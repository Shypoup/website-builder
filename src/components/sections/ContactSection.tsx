import React from 'react';

interface ContactProps {
    heading: string;
    subheading: string;
    email: string;
    phone: string;
    address?: string;
    style?: {
        background?: string;
        color?: string;
        padding?: number;
        align?: 'left' | 'center' | 'right';
        justify?: string;
        textShadow?: string;
    };
}

export interface ContactSectionProps {
    props: ContactProps;
    selected?: boolean;
    onClick?: () => void;
    preview?: boolean;
}

export function ContactSection({ props, selected, onClick, preview = false }: ContactSectionProps) {
  const { heading, subheading, email, phone, address, style } = props;

  const sectionStyle = {
    background: style?.background,
    color: style?.color,
    textAlign: style?.align as 'left' | 'center' | 'right',
    padding: preview ? '12px' : style?.padding || '2rem',
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
          marginBottom: preview ? '0.25rem' : '1rem',
          fontWeight: 'bold',
          lineHeight: 1.2,
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          {heading}
        </h2>
        
        <p style={{ 
          fontSize: preview ? '0.8rem' : 'clamp(1rem, 2.5vw, 1.2rem)', 
          marginBottom: preview ? '0.5rem' : '2rem',
          opacity: 0.8,
          lineHeight: 1.4,
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          {subheading}
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: preview ? '1fr' : (address ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr'),
          gap: preview ? '0.5rem' : '1.5rem',
          maxWidth: preview ? '100%' : '600px',
          margin: '0 auto',
        }}>
          <div style={{
            background: 'white',
            padding: preview ? '0.5rem' : '1.5rem',
            borderRadius: '8px',
            boxShadow: preview ? '0 1px 3px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}>
            <h3 style={{
              fontSize: preview ? '0.9rem' : 'clamp(1.2rem, 3vw, 1.5rem)',
              fontWeight: 'bold',
              marginBottom: preview ? '0.5rem' : '1.5rem',
              color: '#222',
              lineHeight: 1.2,
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              Get In Touch
            </h3>
            
            <div style={{ 
              marginBottom: preview ? '0.25rem' : '1rem',
              fontSize: preview ? '0.7rem' : 'clamp(0.9rem, 2.5vw, 1rem)',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              <strong>Email:</strong> {email}
            </div>
            
            <div style={{ 
              marginBottom: preview ? '0.25rem' : '1rem',
              fontSize: preview ? '0.7rem' : 'clamp(0.9rem, 2.5vw, 1rem)',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              <strong>Phone:</strong> {phone}
            </div>
            
            {address && (
              <div style={{
                fontSize: preview ? '0.7rem' : 'clamp(0.9rem, 2.5vw, 1rem)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                <strong>Address:</strong> {address}
              </div>
            )}
          </div>
          
          {address && (
            <div style={{
              background: '#f8f9fa',
              padding: preview ? '0.5rem' : '1.5rem',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontSize: preview ? '0.9rem' : 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: 'bold',
                marginBottom: preview ? '0.25rem' : '1rem',
                color: '#222',
                lineHeight: 1.2,
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Visit Us
              </h3>
              <p style={{ 
                color: '#666',
                fontSize: preview ? '0.7rem' : 'clamp(0.9rem, 2.5vw, 1rem)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {address}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 