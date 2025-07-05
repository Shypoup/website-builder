import React from 'react';

interface HeroProps {
    heading: string;
    subheading: string;
    style?: {
        background?: string;
        color?: string;
        padding?: number;
        align?: 'left' | 'center' | 'right';
        justify?: string;
        textShadow?: string;
    };
}

export interface HeroSectionProps {
    props: HeroProps;
    selected?: boolean;
    onClick?: () => void;
    preview?: boolean;
}

export function HeroSection({ props, selected, onClick, preview = false }: HeroSectionProps) {
    const style: React.CSSProperties = {
        ...props.style,
        border: preview ? '1px solid #eee' : (selected ? '2px solid #6366f1' : '1px solid #ccc'),
        borderRadius: preview ? 6 : 8,
        margin: preview ? 0 : '12px 0',
        cursor: onClick ? 'pointer' : undefined,
        boxShadow: selected ? '0 0 0 2px #6366f1' : (preview ? '0 1px 4px #0001' : undefined),
        transition: 'box-shadow 0.2s, border 0.2s',
        padding: preview ? (props.style?.padding || 12) : 16,
        fontSize: preview ? 12 : undefined,
        overflow: preview ? 'hidden' : undefined,
        background: props.style?.background,
        color: props.style?.color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: props.style?.align === 'center' ? 'center' : (props.style?.align === 'left' ? 'flex-start' : 'center'),
        justifyContent: props.style?.justify || 'center',
        gap: preview ? 8 : 12,
        textAlign: props.style?.align || 'center',
        backgroundSize: props.style?.background?.includes('url(') ? 'cover' : undefined,
        backgroundPosition: props.style?.background?.includes('url(') ? 'center' : undefined,
        textShadow: props.style?.textShadow,
        minHeight: preview ? 60 : 120,
        width: '100%',
    };
    
    return (
        <div style={style} onClick={onClick}>
            <div style={{ 
                fontWeight: 'bold', 
                fontSize: preview ? 15 : 28,
                lineHeight: 1.2,
                textAlign: 'center',
                maxWidth: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
            }}>
                {props.heading}
            </div>
            <div style={{ 
                marginTop: preview ? 2 : 8, 
                fontSize: preview ? 12 : 18,
                lineHeight: 1.4,
                textAlign: 'center',
                maxWidth: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                opacity: 0.9
            }}>
                {props.subheading}
            </div>
        </div>
    );
} 