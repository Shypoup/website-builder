import React from 'react';

interface ContentProps {
    heading: string;
    content: string;
    content2?: string;
    style?: {
        background?: string;
        color?: string;
        padding?: number;
        align?: 'left' | 'center' | 'right';
        justify?: string;
        textShadow?: string;
    };
}

export interface ContentSectionProps {
    props: ContentProps;
    selected?: boolean;
    onClick?: () => void;
    preview?: boolean;
}

export function ContentSection({ props, selected, onClick, preview = false }: ContentSectionProps) {
  const { heading, content, content2, style } = props;

  const sectionStyle = {
    background: style?.background,
    color: style?.color,
    textAlign: style?.align as 'left' | 'center' | 'right' || 'left',
    padding: preview ? '12px' : style?.padding || '2rem',
    border: preview ? '1px solid #eee' : (selected ? '2px solid #6366f1' : '1px solid #ccc'),
    borderRadius: preview ? 6 : 8,
    margin: preview ? 0 : '12px 0',
    cursor: preview ? 'default' : 'pointer',
    position: 'relative' as const,
    boxShadow: selected ? '0 0 0 2px #6366f1' : (preview ? '0 1px 4px #0001' : undefined),
    transition: 'box-shadow 0.2s, border 0.2s',
    minHeight: preview ? 60 : undefined,
    width: '100%',
  };

  return (
    <div style={sectionStyle} onClick={onClick}>
      {selected && !preview && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: '#6366f1',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 10,
        }}>
          Selected
        </div>
      )}
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%',
        padding: preview ? '0' : '0 1rem'
      }}>
        <h2 style={{ 
          fontSize: preview ? '1.2rem' : 'clamp(1.5rem, 4vw, 2rem)', 
          marginBottom: preview ? '0.5rem' : '1rem',
          fontWeight: 'bold',
          lineHeight: 1.2,
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          {heading}
        </h2>
        
        {content2 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: preview ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: preview ? '0.5rem' : '2rem',
            marginTop: preview ? '0.5rem' : '1rem',
          }}>
            <div>
              <p style={{ 
                fontSize: preview ? '0.9rem' : 'clamp(1rem, 2.5vw, 1.1rem)', 
                lineHeight: 1.5,
                marginBottom: preview ? '0.5rem' : '1rem',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {content}
              </p>
            </div>
            <div>
              <p style={{ 
                fontSize: preview ? '0.9rem' : 'clamp(1rem, 2.5vw, 1.1rem)', 
                lineHeight: 1.5,
                marginBottom: preview ? '0.5rem' : '1rem',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {content2}
              </p>
            </div>
          </div>
        ) : (
          <p style={{ 
            fontSize: preview ? '0.9rem' : 'clamp(1rem, 2.5vw, 1.1rem)', 
            lineHeight: 1.5,
            marginTop: preview ? '0.5rem' : '1rem',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            {content}
          </p>
        )}
      </div>
    </div>
  );
} 