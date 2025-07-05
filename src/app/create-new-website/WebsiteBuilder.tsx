"use client";
import { useState, useRef, useEffect } from "react";
import LibraryPanel from "@/components/panels/LibraryPanel";
import PreviewPanel from "@/components/panels/PreviewPanel";
import PropertiesPanel from "@/components/panels/PropertiesPanel";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import Toolbar from "@/components/Toolbar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SECTION_LIBRARY } from "@/lib/sectionLibrary";
import { RenderSection, RenderSectionPreview } from "@/lib/sectionRenderer";
import { cn } from "@/lib/utils";

type Section = {
  id: string | number;
  type: string;
  props: Record<string, unknown>;
};

export default function CreateNewWebsiteClient() {
  const [device, setDevice] = useState("desktop");
  const [sections, setSections] = useState<Array<Section>>([]);
  const [selectedSectionIdx, setSelectedSectionIdx] = useState<number | null>(
    null
  );
  const sectionIdRef = useRef(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [saveProjectOpen, setSaveProjectOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [activeTab, setActiveTab] = useState("library");
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Load saved design from localStorage on component mount
  useEffect(() => {
    try {
      const savedDesign = localStorage.getItem("website-builder-design");
      if (savedDesign) {
        const designData = JSON.parse(savedDesign);

        // Validate and restore the saved data
        if (designData.sections && Array.isArray(designData.sections)) {
          setSections(designData.sections);
          if (designData.device) {
            setDevice(designData.device);
          }
          if (designData.nextSectionId) {
            sectionIdRef.current = designData.nextSectionId;
          }
          console.log("Design restored from local storage");
        }
      }
    } catch (error) {
      console.error("Error loading saved design:", error);
      // Clear corrupted data
      localStorage.removeItem("website-builder-design");
    }
  }, []);

  // Save design to localStorage whenever sections or device changes
  useEffect(() => {
    const designData = {
      version: "1.0",
      lastSaved: new Date().toISOString(),
      sections: sections,
      device: device,
      nextSectionId: sectionIdRef.current,
    };

    try {
      localStorage.setItem(
        "website-builder-design",
        JSON.stringify(designData)
      );
    } catch (error) {
      console.error("Error saving design to local storage:", error);
    }
  }, [sections, device]);

  // Auto-switch to Properties tab when a section is selected
  useEffect(() => {
    if (selectedSectionIdx !== null) {
      setActiveTab("properties");
    }
  }, [selectedSectionIdx]);

  // Handle full screen toggle
  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Handle escape key to exit full screen
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen]);

  // Export design as JSON
  const handleExportDesign = () => {
    const designData = {
      version: "1.0",
      exportDate: new Date().toISOString(),
      sections: sections,
      device: device,
      nextSectionId: sectionIdRef.current,
    };

    const dataStr = JSON.stringify(designData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `website-design-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Import design from JSON
  const handleImportDesign = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const designData = JSON.parse(e.target?.result as string);
        if (designData.sections && Array.isArray(designData.sections)) {
          setSections(designData.sections);
          if (designData.device) {
            setDevice(designData.device);
          }
          if (designData.nextSectionId) {
            sectionIdRef.current = designData.nextSectionId;
          }
          setSelectedSectionIdx(null);
          setAlertMessage("Design imported successfully!");
          setAlertOpen(true);
        } else {
          throw new Error("Invalid design file format");
        }
      } catch (error) {
        setAlertMessage("Error importing design: Invalid file format");
        setAlertOpen(true);
        console.error("Import error:", error);
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  };

  // Clear saved design (uses confirm dialog)
  const handleClearDesign = () => {
    setConfirmOpen(true);
  };
  const handleConfirmClear = () => {
    setSections([]);
    setSelectedSectionIdx(null);
    sectionIdRef.current = 0;
    localStorage.removeItem("website-builder-design");
    setAlertMessage("Design cleared successfully!");
    setAlertOpen(true);
    setConfirmOpen(false);
  };
  const handleCancelClear = () => {
  
    setConfirmOpen(false);
  };

  // Add section from library (with variant)
  const handleAddSection = (sectionType: string, variantIdx: number) => {
    const template = SECTION_LIBRARY.find((s) => s.type === sectionType);
    if (template && template.variants[variantIdx]) {
      const newId = sectionIdRef.current++;
      setSections((prev) => [
        ...prev,
        {
          id: newId,
          type: template.type,
          props: JSON.parse(
            JSON.stringify(template.variants[variantIdx].defaultProps)
          ),
        },
      ]);

      // Scroll to preview on mobile after a short delay to ensure the section is added
      setTimeout(() => {
        const previewElement = document.querySelector("[data-preview-panel]");
        if (previewElement && window.innerWidth < 1024) {
          // Only on mobile/tablet
          previewElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    }
  };

  // Update section props
  const handleSectionPropChange = (key: string, value: string) => {
    if (selectedSectionIdx === null) return;
    setSections((prev) =>
      prev.map((s, i) =>
        i === selectedSectionIdx
          ? { ...s, props: { ...s.props, [key]: value } }
          : s
      )
    );
  };

  // Update nested array props (e.g., links, social)
  const handleSectionArrayPropChange = (
    arrayKey: string,
    idx: number,
    key: string,
    value: string | boolean | string[]
  ) => {
    if (selectedSectionIdx === null) return;
    setSections((prev) =>
      prev.map((s, i) => {
        if (i !== selectedSectionIdx) return s;
        const arr = Array.isArray(s.props[arrayKey]) ? [...(s.props[arrayKey] as unknown[])] : [];
        arr[idx] = { ...(arr[idx] as object), [key]: value };
        return { ...s, props: { ...s.props, [arrayKey]: arr } };
      })
    );
  };

  // Update style
  const handleSectionStyleChange = (styleKey: string, value: string) => {
    if (selectedSectionIdx === null) return;
    setSections((prev) =>
      prev.map((s, i) =>
        i === selectedSectionIdx
          ? {
              ...s,
              props: {
                ...s.props,
                style: { ...((s.props.style ?? {}) as Record<string, unknown>), [styleKey]: value },
              },
            }
          : s
      )
    );
  };

  // Remove section
  const handleRemoveSection = () => {
    if (selectedSectionIdx === null) return;
    setSections((prev) => prev.filter((_, i) => i !== selectedSectionIdx));
    setSelectedSectionIdx(null);
    setActiveTab("library"); // Switch back to library when no section is selected
  };

  // Device preview sizes - responsive
  const deviceSizes = {
    desktop: { width: 940, height: 600 },
    tablet: { width: 600, height: 500 },
    mobile: { width: 350, height: 600 },
  };

  // Reorder handler for Framer Motion
  const handleReorder = (newOrderIds: (string | number)[]) => {
    setSections((prevSections) => {
      // Map of id to section
      const sectionMap = Object.fromEntries(prevSections.map((s) => [s.id, s]));
      return newOrderIds.map((id) => sectionMap[id]);
    });
  };

  // Save current design as a project
  const handleSaveProject = () => {
    if (!projectName.trim()) {
      setAlertMessage("Please enter a project name");
      setAlertOpen(true);
      return;
    }

    const currentDesign = {
      sections: sections,
      device: device,
      nextSectionId: sectionIdRef.current,
    };

    const newProject = {
      id: Date.now().toString(),
      name: projectName.trim(),
      description: projectDescription.trim() || "No description",
      lastModified: new Date().toISOString(),
      ...currentDesign,
    };

    // Get existing projects
    const existingProjects = localStorage.getItem("website-builder-projects");
    const projects = existingProjects ? JSON.parse(existingProjects) : [];

    // Add new project
    projects.push(newProject);
    localStorage.setItem("website-builder-projects", JSON.stringify(projects));

    setProjectName("");
    setProjectDescription("");
    setSaveProjectOpen(false);
    setAlertMessage("Project saved successfully!");
    setAlertOpen(true);
  };

  return (
    <div className={cn('flex flex-col' ,isFullScreen && 'fixed inset-0 z-50 bg-white')}>
      {/* Toolbar */}
      <Toolbar
        onExportDesign={handleExportDesign}
        onImportDesign={handleImportDesign}
        onClearDesign={handleClearDesign}
        device={device}
        setDevice={setDevice}
        isFullScreen={isFullScreen}
        onToggleFullScreen={handleToggleFullScreen}
        sectionsLength={sections.length}
        setSaveProjectOpen={setSaveProjectOpen}
      />


      {/* Main Content */}
      <div className={cn('flex flex-1 items-start gap-2 p-2 lg:gap-4 lg:p-4 flex-col lg:flex-row', isFullScreen && 'overflow-hidden')}>
        {/* Sidebar - Hidden in full screen mode */}
        {!isFullScreen && (
          <div className="lg:block lg:w-80 border border-gray-200 rounded-md p-4">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="library">Library</TabsTrigger>
                <TabsTrigger value="properties">Properties</TabsTrigger>
              </TabsList>
              <TabsContent value="library" className="mt-4">
                <LibraryPanel
                  SECTION_LIBRARY={SECTION_LIBRARY}
                  handleAddSection={handleAddSection}
                  RenderSectionPreview={RenderSectionPreview}
                />
              </TabsContent>
              <TabsContent value="properties" className="mt-4">
                <h2 className="text-lg font-bold mb-3">Properties</h2>
                <PropertiesPanel
                  selectedSectionIdx={selectedSectionIdx}
                  sections={sections}
                  handleSectionPropChange={handleSectionPropChange}
                  handleSectionArrayPropChange={handleSectionArrayPropChange}
                  handleSectionStyleChange={handleSectionStyleChange}
                  handleRemoveSection={handleRemoveSection}
                />
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Preview Panel */}
        <div className={cn('w-full flex-1 flex justify-center data-preview-panel', isFullScreen ? 'h-full' : '')} >
          <PreviewPanel
            device={device}
            setDevice={setDevice}
            deviceSizes={deviceSizes}
            sections={sections}
            selectedSectionIdx={selectedSectionIdx}
            setSelectedSectionIdx={setSelectedSectionIdx}
            handleReorder={handleReorder}
            RenderSection={RenderSection}
            isFullScreen={isFullScreen}
          />
        </div>
      </div>


      {/* Dialogs */}
      
      {/* Alert Dialog for alerts (success/error) */}
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Notice</AlertDialogTitle>
            <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAlertOpen(false)}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Save Project Dialog */}
      <AlertDialog open={saveProjectOpen} onOpenChange={setSaveProjectOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Save Project</AlertDialogTitle>
            <AlertDialogDescription>
              Save your current design as a named project for easy access later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium">Project Name *</label>
              <Input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project name"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Input
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Enter project description (optional)"
                className="mt-1"
              />
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setSaveProjectOpen(false);
                setProjectName("");
                setProjectDescription("");
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleSaveProject}>
              Save Project
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Confirm Dialog for destructive actions */}
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will clear all your saved work. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelClear}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmClear}>
              Clear
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
