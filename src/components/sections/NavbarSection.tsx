import React from 'react';

export function NavbarSection({ props, selected, onClick, preview = false }: any) {
    const style = {
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
        flexDirection: 'row',
        alignItems: props.style?.align === 'center' ? 'center' : (props.style?.align === 'left' ? 'flex-start' : 'center'),
        justifyContent: props.style?.justify || 'space-between',
        gap: preview ? 8 : 12,
        textAlign: props.style?.align || 'left',
        backgroundSize: props.style?.background?.includes('url(') ? 'cover' : undefined,
        backgroundPosition: props.style?.background?.includes('url(') ? 'center' : undefined,
        textShadow: props.style?.textShadow,
        flexWrap: 'wrap',
    };
    
    return (
        <div style={style} onClick={onClick}>
            {/* Logo and Title */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 8,
                flexShrink: 0,
                minWidth: preview ? 'auto' : 0
            }}>
                {props.logo && (
                    <img 
                        src={props.logo} 
                        alt="logo" 
                        style={{ 
                            height: preview ? 18 : 28, 
                            width: preview ? 18 : 28, 
                            objectFit: 'contain',
                            flexShrink: 0
                        }} 
                    />
                )}
                <span style={{ 
                    fontWeight: 600, 
                    fontSize: preview ? 13 : 20,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {props.title}
                </span>
            </div>
            
            {/* Navigation Links - Mobile Friendly */}
            <nav style={{ 
                display: 'flex', 
                gap: preview ? 8 : 16, 
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flex: 1,
                minWidth: 0
            }}>
                {props.links.map((l: any, i: number) => (
                    <span 
                        key={i} 
                        style={{ 
                            color: style.color, 
                            textDecoration: 'underline', 
                            fontSize: preview ? 12 : undefined,
                            whiteSpace: 'nowrap',
                            padding: preview ? '2px 4px' : '4px 8px',
                            borderRadius: 4,
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
                        }}
                    >
                        {l.label}
                    </span>
                ))}
            </nav>
        </div>
    );
} 