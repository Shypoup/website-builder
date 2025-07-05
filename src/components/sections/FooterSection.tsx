import React from 'react';

interface SocialLink {
    label: string;
    url?: string;
}

interface FooterProps {
    copyright: string;
    social: SocialLink[];
    style?: {
        background?: string;
        color?: string;
        padding?: number;
        align?: 'left' | 'center' | 'right';
        justify?: string;
        textShadow?: string;
        layout?: 'columns' | 'vertical' | 'horizontal';
    };
}

export interface FooterSectionProps {
    props: FooterProps;
    selected?: boolean;
    onClick?: () => void;
    preview?: boolean;
}

export function FooterSection({ props, selected, onClick, preview = false }: FooterSectionProps) {
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
        minHeight: preview ? 36 : undefined,
        overflow: preview ? 'hidden' : undefined,
        background: props.style?.background,
        color: props.style?.color,
        display: 'flex',
        flexDirection: props.style?.layout === 'columns' ? 'row' : (props.style?.layout === 'vertical' ? 'column' : 'row'),
        alignItems: props.style?.align === 'center' ? 'center' : (props.style?.align === 'left' ? 'flex-start' : 'center'),
        justifyContent: props.style?.justify || 'space-between',
        gap: preview ? 8 : 12,
        textAlign: props.style?.align || 'left',
        backgroundSize: props.style?.background?.includes('url(') ? 'cover' : undefined,
        backgroundPosition: props.style?.background?.includes('url(') ? 'center' : undefined,
        textShadow: props.style?.textShadow,
        flexWrap: 'wrap',
        width: '100%',
    };
    
    if (props.style?.layout === 'columns') {
        return (
            <div style={style} onClick={onClick}>
                <div style={{ 
                    flex: 1, 
                    minWidth: 0,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                }}>
                    <div style={{ 
                        fontSize: preview ? 11 : undefined,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
                    }}>
                        {props.social.map((social: SocialLink) => social.label).join(' | ')}
                    </div>
                </div>
                <div style={{ 
                    fontSize: preview ? 11 : undefined, 
                    textAlign: 'right',
                    flexShrink: 0,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                }}>
                    {props.copyright}
                </div>
            </div>
        );
    }
    
    return (
        <div style={style} onClick={onClick}>
            <div style={{ 
                fontSize: preview ? 11 : undefined,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                flex: 1,
                minWidth: 0
            }}>
                {props.social.map((social: SocialLink) => social.label).join(' | ')}
            </div>
            <div style={{ 
                fontSize: preview ? 11 : undefined,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                flexShrink: 0
            }}>
                {props.copyright}
            </div>
        </div>
    );
} 