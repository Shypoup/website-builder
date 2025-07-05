"use client";
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Smartphone, Tablet, Menu, X, Maximize2, Minimize2 } from 'lucide-react';
import { useState } from 'react';

interface ToolbarProps {
  // Project actions
  onSaveProject: () => void;
  onExportDesign: () => void;
  onImportDesign: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearDesign: () => void;
  
  // Device selection
  device: string;
  setDevice: (device: string) => void;
  
  // Full screen functionality
  isFullScreen: boolean;
  onToggleFullScreen: () => void;
  
  // States
  sectionsLength: number;
  saveProjectOpen: boolean;
  setSaveProjectOpen: (open: boolean) => void;
}

export default function Toolbar({
  onSaveProject,
  onExportDesign,
  onImportDesign,
  onClearDesign,
  device,
  setDevice,
  isFullScreen,
  onToggleFullScreen,
  sectionsLength,
  saveProjectOpen,
  setSaveProjectOpen,
}: ToolbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-amber-200 to-red-400 border-b border-gray-200 px-2 py-2 lg:px-4 lg:py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Project actions */}
        <div className="flex items-center gap-1 lg:gap-2">
          <Button
            onClick={onExportDesign}
            disabled={sectionsLength === 0}
            variant="outline"
            size="sm"
            className="text-xs lg:text-sm"
          >
            Export
          </Button>
          
          <label className="cursor-pointer">
            <Button variant="outline" size="sm" asChild className="text-xs lg:text-sm">
              <span>Import</span>
            </Button>
            <input
              type="file"
              accept=".json"
              onChange={onImportDesign}
              className="hidden"
            />
          </label>
        </div>

        {/* Center - Device selection */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Tabs value={device} onValueChange={setDevice} className="w-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desktop" className="text-xs px-1 lg:px-3">
                <Monitor className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Desktop</span>
              </TabsTrigger>
              <TabsTrigger value="tablet" className="text-xs px-1 lg:px-3">
                <Tablet className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Tablet</span>
              </TabsTrigger>
              <TabsTrigger value="mobile" className="text-xs px-1 lg:px-3">
                <Smartphone className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Mobile</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Right side - Navigation and Mobile Menu */}
        <div className="flex items-center gap-1 lg:gap-2">
          {/* Full Screen Button */}
          <Button
            onClick={onToggleFullScreen}
            variant="outline"
            size="sm"
            className="text-xs lg:text-sm"
            title={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
          >
            {isFullScreen ? (
              <Minimize2 className="w-3 h-3 lg:w-4 lg:h-4" />
            ) : (
              <Maximize2 className="w-3 h-3 lg:w-4 lg:h-4" />
            )}
            <span className="hidden sm:inline ml-1">
              {isFullScreen ? "Exit" : "Full Screen"}
            </span>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              onClick={onClearDesign}
              disabled={sectionsLength === 0}
              variant="destructive"
              size="sm"
            >
              Clear
            </Button>
            <Button
              onClick={() => setSaveProjectOpen(true)}
              disabled={sectionsLength === 0}
              variant="outline"
              size="sm"
            >
              Save as Project
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-2 bg-white/90 rounded-md border">
          <div className="flex flex-col gap-2">
            <Button
              onClick={onToggleFullScreen}
              variant="outline"
              size="sm"
              className="w-full"
            >
              {isFullScreen ? "Exit Full Screen" : "Full Screen"}
            </Button>
            <Button
              onClick={onClearDesign}
              disabled={sectionsLength === 0}
              variant="destructive"
              size="sm"
              className="w-full"
            >
              Clear Design
            </Button>
            <Button
              onClick={() => {
                setSaveProjectOpen(true);
                setMobileMenuOpen(false);
              }}
              disabled={sectionsLength === 0}
              variant="outline"
              size="sm"
              className="w-full"
            >
              Save as Project
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 