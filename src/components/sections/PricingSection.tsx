import React from 'react';

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

interface PricingProps {
  heading: string;
  subheading: string;
  plans: Plan[];
  style?: {
    background?: string;
    color?: string;
    padding?: number;
    align?: 'left' | 'center' | 'right';
    justify?: string;
    textShadow?: string;
  };
}

export interface PricingSectionProps {
  props: PricingProps;
  selected?: boolean;
  onClick?: () => void;
  preview?: boolean;
}

export function PricingSection({ props, selected, onClick, preview = false }: PricingSectionProps) {
  const { heading, subheading, plans, style } = props;

  const sectionStyle = {
    background: style?.background,
    color: style?.color,
    textAlign: (style?.align as 'left' | 'center' | 'right') || 'left',
    padding: preview ? '12px' : style?.padding || '2rem',
    border: preview ? '1px solid #eee' : (selected ? '2px solid #6366f1' : '1px solid #ccc'),
    borderRadius: preview ? 6 : 8,
    margin: preview ? 0 : '12px 0',
    cursor: onClick ? 'pointer' : undefined,
    position: 'relative' as const,
    boxShadow: selected ? '0 0 0 2px #6366f1' : (preview ? '0 1px 4px #0001' : undefined),
    transition: 'box-shadow 0.2s, border 0.2s',
    minHeight: preview ? 60 : 120,
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
          gridTemplateColumns: preview ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: preview ? '0.5rem' : '1.5rem',
          maxWidth: preview ? '100%' : (plans.length === 2 ? '800px' : '1200px'),
          margin: '0 auto',
        }}>
          {plans.map((plan, index) => (
            <div key={index} style={{
              background: plan.popular ? '#6366f1' : 'white',
              color: plan.popular ? 'white' : '#222',
              padding: preview ? '0.5rem' : '1.5rem',
              borderRadius: '8px',
              boxShadow: preview ? '0 1px 3px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              position: 'relative' as const,
              transform: preview ? 'none' : (plan.popular ? 'scale(1.02)' : 'none'),
            }}>
              {plan.popular && !preview && (
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ff6b6b',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{
                fontSize: preview ? '0.9rem' : 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: 'bold',
                marginBottom: preview ? '0.25rem' : '1rem',
                lineHeight: 1.2,
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {plan.name}
              </h3>
              
              <div style={{
                fontSize: preview ? '1.5rem' : 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 'bold',
                marginBottom: preview ? '0.125rem' : '0.5rem',
                lineHeight: 1
              }}>
                {plan.price}
                <span style={{ 
                  fontSize: preview ? '0.7rem' : 'clamp(0.8rem, 2vw, 1rem)', 
                  opacity: 0.8 
                }}>
                  {plan.period}
                </span>
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: preview ? '0.5rem 0' : '1.5rem 0',
                textAlign: 'left',
              }}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{
                    padding: preview ? '0.125rem 0' : '0.5rem 0',
                    borderBottom: featureIndex < plan.features.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    fontSize: preview ? '0.7rem' : 'clamp(0.9rem, 2.5vw, 1rem)',
                    lineHeight: 1.3,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button style={{
                background: plan.popular ? 'white' : '#6366f1',
                color: plan.popular ? '#6366f1' : 'white',
                border: 'none',
                padding: preview ? '0.25rem 0.5rem' : '0.75rem 2rem',
                borderRadius: '4px',
                fontSize: preview ? '0.7rem' : 'clamp(0.9rem, 2.5vw, 1rem)',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
              }}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 