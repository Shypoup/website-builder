import { motion, Reorder } from "framer-motion";
import React, { useState, useEffect } from "react";

type Section = {
  id: string | number;
  type: string;
  props: Record<string, unknown>;
};

interface DeviceSizes {
  [key: string]: {
    width: number;
    height: number;
  };
}

interface PreviewPanelProps {
  device: string;
  setDevice: (device: string) => void;
  deviceSizes: DeviceSizes;
  sections: Section[];
  selectedSectionIdx: number | null;
  setSelectedSectionIdx: (index: number | null) => void;
  handleReorder: (newOrder: (string | number)[]) => void;
  RenderSection: React.ComponentType<{
    section: Section;
    selected: boolean;
  }>;
  isFullScreen?: boolean;
}

export default function PreviewPanel({
  device,
  deviceSizes,
  sections,
  selectedSectionIdx,
  setSelectedSectionIdx,
  handleReorder,
  RenderSection,
  isFullScreen = false,
}: PreviewPanelProps) {
  const currentSize = deviceSizes[device];
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Calculate dimensions based on full screen mode
  let maxWidth, maxHeight;
  
  if (isFullScreen) {
    // In full screen mode, use most of the available space
    maxWidth = windowSize.width > 0 ? Math.min(currentSize.width * 1.5, windowSize.width - 80) : currentSize.width * 1.5;
    maxHeight = windowSize.height > 0 ? Math.min(currentSize.height * 1.5, windowSize.height - 120) : currentSize.height * 1.5;
  } else {
    // Normal mode
    maxWidth = windowSize.width > 0 ? Math.min(currentSize.width, windowSize.width - 40) : currentSize.width;
    maxHeight = windowSize.height > 0 ? Math.min(currentSize.height, windowSize.height * 0.6) : currentSize.height;
  }

  return (
    <div className={`w-full flex items-center justify-center ${isFullScreen ? 'h-full' : ''}`}>
      <motion.div
        layout
        style={{
          width: maxWidth,
          height: maxHeight,
          maxWidth: '100%',
        }}
        className={`p-2 overflow-auto bg-[#fafafa] rounded-2xl border ${
          isFullScreen ? 'mt-4' : 'mt-2 lg:mt-8'
        }`}
      >
        {sections.length === 0 && (
          <div style={{ 
            textAlign: "center", 
            marginTop: isFullScreen ? 120 : 60, 
            color: "#bbb", 
            fontSize: isFullScreen ? '18px' : '14px' 
          }}>
            Add sections from the library to start building!
          </div>
        )}
        <Reorder.Group
          axis="y"
          values={sections.map((s) => s.id)}
          onReorder={handleReorder}
          style={{ minHeight: isFullScreen ? 200 : 100 }}
        >
          {sections.map((section, idx) => (
            <Reorder.Item
              key={section.id}
              value={section.id}
              style={{ listStyle: "none" }}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setSelectedSectionIdx(idx);
              }}
            >
              <RenderSection
                section={section}
                selected={selectedSectionIdx === idx}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </motion.div>
    </div>
  );
}
