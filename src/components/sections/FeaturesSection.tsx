import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  props: {
    heading: string;
    features: Feature[];
    style: {
      background: string;
      color: string;
      align: string;
      padding: string;
    };
  };
  selected?: boolean;
  onClick?: () => void;
  preview?: boolean;
}

export function FeaturesSection({ props, selected, onClick, preview }: FeaturesSectionProps) {
  const { heading, features, style } = props;

  const sectionStyle = {
    background: style.background,
    color: style.color,
    textAlign: style.align as 'left' | 'center' | 'right',
    padding: preview ? '12px' : style.padding || '2rem',
    border: preview ? '1px solid #eee' : (selected ? '2px solid #6366f1' : '1px solid #ccc'),
    borderRadius: preview ? 6 : 8,
    margin: preview ? 0 : '12px 0',
    cursor: preview ? 'default' : 'pointer',
    position: 'relative' as const,
    boxShadow: selected ? '0 0 0 2px #6366f1' : (preview ? '0 1px 4px #0001' : undefined),
    transition: 'box-shadow 0.2s, border 0.2s',
    minHeight: preview ? 80 : undefined,
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
          fontSize: preview ? '1.2rem' : 'clamp(1.8rem, 4vw, 2.5rem)', 
          marginBottom: preview ? '0.5rem' : '2rem',
          fontWeight: 'bold',
          lineHeight: 1.2,
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          {heading}
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: preview ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: preview ? '0.5rem' : '1.5rem',
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'white',
              padding: preview ? '0.5rem' : '1.5rem',
              borderRadius: '8px',
              boxShadow: preview ? '0 1px 3px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              minHeight: preview ? 'auto' : '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{
                fontSize: preview ? '1.5rem' : 'clamp(2rem, 5vw, 3rem)',
                marginBottom: preview ? '0.25rem' : '1rem',
                lineHeight: 1
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: preview ? '0.9rem' : 'clamp(1.1rem, 3vw, 1.5rem)',
                fontWeight: 'bold',
                marginBottom: preview ? '0.25rem' : '1rem',
                color: '#222',
                lineHeight: 1.2,
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: preview ? '0.8rem' : 'clamp(0.9rem, 2.5vw, 1rem)',
                lineHeight: 1.4,
                color: '#666',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 