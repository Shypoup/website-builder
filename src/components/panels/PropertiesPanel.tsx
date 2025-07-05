import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';

type Section = {
  id: string | number;
  type: string;
  props: Record<string, unknown>;
};

interface StyleProps {
  background?: string;
  color?: string;
  padding?: number;
  align?: string;
  justify?: string;
  textShadow?: string;
}

interface PropertiesPanelProps {
  selectedSectionIdx: number | null;
  sections: Section[];
  handleSectionPropChange: (key: string, value: string) => void;
  handleSectionArrayPropChange: (arrayKey: string, idx: number, key: string, value: string | boolean | string[]) => void;
  handleSectionStyleChange: (styleKey: string, value: string) => void;
  handleRemoveSection: () => void;
}

export default function PropertiesPanel({
  selectedSectionIdx,
  sections,
  handleSectionPropChange,
  handleSectionArrayPropChange,
  handleSectionStyleChange,
  handleRemoveSection,
}: PropertiesPanelProps) {
    if (selectedSectionIdx === null) {
        return <div className="text-gray-500 mt-8 text-sm">Select a section in the preview to edit its properties.</div>;
    }
    const section = sections[selectedSectionIdx];
    if (!section) return null;
    
    if (section.type === 'navbar') {
        const links = section.props.links as { label: string; url?: string }[];
        const style = section.props.style as StyleProps;
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Logo URL</label>
                    <Input 
                        value={typeof section.props.logo === 'string' ? section.props.logo : ''} 
                        onChange={e => handleSectionPropChange('logo', e.target.value)} 
                        placeholder="/globe.svg or https://..." 
                        className="text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">Enter the URL or path to your logo image</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Website Title</label>
                    <Input 
                        value={typeof section.props.title === 'string' ? section.props.title : ''} 
                        onChange={e => handleSectionPropChange('title', e.target.value)} 
                        className="text-sm"
                        placeholder="My Website"
                    />
                    <p className="text-xs text-gray-500 mt-1">The main title displayed in the navigation</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Navigation Links:</label>
                    {links.map((l, i) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-2 mb-2">
                            <Input 
                                value={typeof l.label === 'string' ? l.label : ''} 
                                onChange={e => handleSectionArrayPropChange('links', i, 'label', e.target.value)} 
                                placeholder="Link text" 
                                className="text-sm flex-1"
                            />
                            <Input 
                                value={typeof l.url === 'string' ? l.url : ''} 
                                onChange={e => handleSectionArrayPropChange('links', i, 'url', e.target.value)} 
                                placeholder="URL" 
                                className="text-sm flex-1"
                            />
                        </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-1">Add navigation menu items</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.background === 'string' ? style.background : ''} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#222 or linear-gradient..." 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.background === 'string' && style.background.startsWith('#') ? style.background : '#222'}
                            onChange={e => handleSectionStyleChange('background', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the navbar background color</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Text Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.color === 'string' ? style.color : ''} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.color === 'string' ? style.color : '#000'}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for navigation items</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }
    
    if (section.type === 'hero') {
        const style = section.props.style as StyleProps;
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Main Heading</label>
                    <Input 
                        value={typeof section.props.heading === 'string' ? section.props.heading : ''} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="Welcome to My Website"
                    />
                    <p className="text-xs text-gray-500 mt-1">The main title that appears prominently</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Subheading</label>
                    <Input 
                        value={typeof section.props.subheading === 'string' ? section.props.subheading : ''} 
                        onChange={e => handleSectionPropChange('subheading', e.target.value)} 
                        className="text-sm"
                        placeholder="Build your site visually!"
                    />
                    <p className="text-xs text-gray-500 mt-1">Supporting text below the main heading</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color/Image</label>
                    <Input 
                        value={typeof style.background === 'string' ? style.background : ''} 
                        onChange={e => handleSectionStyleChange('background', e.target.value)} 
                        placeholder="#eee or url(image.jpg)" 
                        className="text-sm mb-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">Use color code (#fff) or image URL</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Text Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.color === 'string' ? style.color : ''} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.color === 'string' ? style.color : '#000'}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for headings</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }

    if (section.type === 'content') {
        const style = section.props.style as StyleProps;
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={typeof section.props.heading === 'string' ? section.props.heading : ''} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="About Our Company"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this content section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Main Content</label>
                    <textarea 
                        value={typeof section.props.content === 'string' ? section.props.content : ''} 
                        onChange={e => handleSectionPropChange('content', e.target.value)} 
                        className="text-sm w-full p-2 border rounded-md"
                        rows={3}
                        placeholder="Enter your content here..."
                    />
                    <p className="text-xs text-gray-500 mt-1">The main text content for this section</p>
                </div>
                {typeof section.props.content2 === 'string' && section.props.content2 && (
                    <div>
                        <label className="text-sm font-medium block mb-1">Second Content Column</label>
                        <textarea 
                            value={typeof section.props.content2 === 'string' ? section.props.content2 : ''} 
                            onChange={e => handleSectionPropChange('content2', e.target.value)} 
                            className="text-sm w-full p-2 border rounded-md"
                            rows={3}
                            placeholder="Enter second column content..."
                        />
                        <p className="text-xs text-gray-500 mt-1">Content for the second column (if using two-column layout)</p>
                    </div>
                )}
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.background === 'string' ? style.background : ''} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.background === 'string' ? style.background : '#fff'}
                            onChange={e => handleSectionStyleChange('background', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the section background color</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Text Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.color === 'string' ? style.color : ''} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.color === 'string' ? style.color : '#000'}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for content</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }

    if (section.type === 'features') {
        const style = section.props.style as StyleProps;
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={typeof section.props.heading === 'string' ? section.props.heading : ''} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="Our Features"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this features section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Feature Items:</label>
                    {Array.isArray(section.props.features) && section.props.features.map((f: { icon?: string; title: string; description: string }, i: number) => (
                        <div key={i} className="border p-3 rounded-md mb-2">
                            <div className="flex flex-col gap-2 mb-2">
                                <Input 
                                    value={typeof f.title === 'string' ? f.title : ''} 
                                    onChange={e => handleSectionArrayPropChange('features', i, 'title', e.target.value)} 
                                    placeholder="Feature title" 
                                    className="text-sm"
                                />
                                <Input 
                                    value={typeof f.icon === 'string' ? f.icon : ''} 
                                    onChange={e => handleSectionArrayPropChange('features', i, 'icon', e.target.value)} 
                                    placeholder="🎨 (emoji icon)" 
                                    className="text-sm"
                                />
                                <textarea 
                                    value={typeof f.description === 'string' ? f.description : ''} 
                                    onChange={e => handleSectionArrayPropChange('features', i, 'description', e.target.value)} 
                                    placeholder="Feature description" 
                                    className="text-sm w-full p-2 border rounded-md"
                                    rows={2}
                                />
                            </div>
                        </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-1">Add feature cards with icons and descriptions</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.background === 'string' ? style.background : ''} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#f8f9fa" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.background === 'string' ? style.background : '#f8f9fa'}
                            onChange={e => handleSectionStyleChange('background', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the section background color</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Text Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.color === 'string' ? style.color : ''} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.color === 'string' ? style.color : '#000'}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for headings</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }

    if (section.type === 'testimonials') {
        const style = section.props.style as StyleProps;
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={typeof section.props.heading === 'string' ? section.props.heading : ''} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="What Our Clients Say"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this testimonials section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Customer Testimonials:</label>
                    {Array.isArray(section.props.testimonials) && section.props.testimonials.map((t: { name: string; role: string; content: string; rating: number }, i: number) => (
                        <div key={i} className="border p-3 rounded-md mb-2">
                            <div className="flex flex-col gap-2">
                                <Input 
                                    value={typeof t.name === 'string' ? t.name : ''} 
                                    onChange={e => handleSectionArrayPropChange('testimonials', i, 'name', e.target.value)} 
                                    placeholder="Customer name" 
                                    className="text-sm"
                                />
                                <Input 
                                    value={typeof t.role === 'string' ? t.role : ''} 
                                    onChange={e => handleSectionArrayPropChange('testimonials', i, 'role', e.target.value)} 
                                    placeholder="Job title, Company" 
                                    className="text-sm"
                                />
                                <textarea 
                                    value={typeof t.content === 'string' ? t.content : ''} 
                                    onChange={e => handleSectionArrayPropChange('testimonials', i, 'content', e.target.value)} 
                                    placeholder="Customer testimonial text" 
                                    className="text-sm w-full p-2 border rounded-md"
                                    rows={3}
                                />
                                <Input 
                                    value={typeof t.rating === 'number' ? t.rating.toString() : ''} 
                                    onChange={e => handleSectionArrayPropChange('testimonials', i, 'rating', e.target.value)} 
                                    placeholder="5 (1-5 stars)" 
                                    className="text-sm"
                                    type="number"
                                    min="1"
                                    max="5"
                                />
                            </div>
                        </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-1">Add customer reviews with ratings</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.background === 'string' ? style.background : ''} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#f8f9fa" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.background === 'string' ? style.background : '#f8f9fa'}
                            onChange={e => handleSectionStyleChange('background', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the section background color</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Text Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.color === 'string' ? style.color : ''} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.color === 'string' ? style.color : '#000'}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for testimonials</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }

    if (section.type === 'contact') {
        const style = section.props.style as StyleProps;
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={typeof section.props.heading === 'string' ? section.props.heading : ''} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="Get In Touch"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this contact section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Subheading</label>
                    <Input 
                        value={typeof section.props.subheading === 'string' ? section.props.subheading : ''} 
                        onChange={e => handleSectionPropChange('subheading', e.target.value)} 
                        className="text-sm"
                        placeholder="We'd love to hear from you"
                    />
                    <p className="text-xs text-gray-500 mt-1">Supporting text below the heading</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Email Address</label>
                    <Input 
                        value={typeof section.props.email === 'string' ? section.props.email : ''} 
                        onChange={e => handleSectionPropChange('email', e.target.value)} 
                        className="text-sm"
                        placeholder="contact@example.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">Your business email address</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Phone Number</label>
                    <Input 
                        value={typeof section.props.phone === 'string' ? section.props.phone : ''} 
                        onChange={e => handleSectionPropChange('phone', e.target.value)} 
                        className="text-sm"
                        placeholder="+1 (555) 123-4567"
                    />
                    <p className="text-xs text-gray-500 mt-1">Your business phone number</p>
                </div>
                {typeof section.props.address === 'string' && section.props.address && (
                    <div>
                        <label className="text-sm font-medium block mb-1">Business Address</label>
                        <Input 
                            value={typeof section.props.address === 'string' ? section.props.address : ''} 
                            onChange={e => handleSectionPropChange('address', e.target.value)} 
                            className="text-sm"
                            placeholder="123 Business St, City, State"
                        />
                        <p className="text-xs text-gray-500 mt-1">Your physical business address</p>
                    </div>
                )}
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.background === 'string' ? style.background : ''} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.background === 'string' ? style.background : '#fff'}
                            onChange={e => handleSectionStyleChange('background', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the section background color</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Text Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.color === 'string' ? style.color : ''} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.color === 'string' ? style.color : '#000'}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for contact info</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }

    if (section.type === 'pricing') {
        const style = section.props.style as StyleProps;
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={typeof section.props.heading === 'string' ? section.props.heading : ''} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="Choose Your Plan"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this pricing section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Subheading</label>
                    <Input 
                        value={typeof section.props.subheading === 'string' ? section.props.subheading : ''} 
                        onChange={e => handleSectionPropChange('subheading', e.target.value)} 
                        className="text-sm"
                        placeholder="Select the perfect plan for your needs"
                    />
                    <p className="text-xs text-gray-500 mt-1">Supporting text below the heading</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Pricing Plans:</label>
                    {Array.isArray(section.props.plans) && section.props.plans.map((p: { name: string; price: string; features: string[]; period?: string; popular?: boolean }, i: number) => (
                        <div key={i} className="border p-3 rounded-md mb-2">
                            <div className="flex flex-col gap-2">
                                <Input 
                                    value={typeof p.name === 'string' ? p.name : ''} 
                                    onChange={e => handleSectionArrayPropChange('plans', i, 'name', e.target.value)} 
                                    placeholder="Plan name (e.g., Basic)" 
                                    className="text-sm"
                                />
                                <Input 
                                    value={typeof p.price === 'string' ? p.price : ''} 
                                    onChange={e => handleSectionArrayPropChange('plans', i, 'price', e.target.value)} 
                                    placeholder="Price (e.g., $29)" 
                                    className="text-sm"
                                />
                                <Input 
                                    value={typeof p.period === 'string' ? p.period : ''} 
                                    onChange={e => handleSectionArrayPropChange('plans', i, 'period', e.target.value)} 
                                    placeholder="Period (e.g., /month)" 
                                    className="text-sm"
                                />
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        checked={typeof p.popular === 'boolean' ? p.popular : false} 
                                        onChange={e => handleSectionArrayPropChange('plans', i, 'popular', e.target.checked)} 
                                        className="text-sm"
                                    />
                                    <label className="text-sm">Mark as popular plan</label>
                                </div>
                                <div>
                                    <label className="text-sm font-medium block mb-1">Plan Features (one per line):</label>
                                    <textarea 
                                        value={Array.isArray(p.features) ? p.features.join('\n') : ''} 
                                        onChange={e => handleSectionArrayPropChange('plans', i, 'features', e.target.value.split('\n'))} 
                                        placeholder="Feature 1&#10;Feature 2&#10;Feature 3" 
                                        className="text-sm w-full p-2 border rounded-md"
                                        rows={4}
                                    />
                                    <p className="text-xs text-gray-500 mt-1">List each feature on a separate line</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-1">Configure your pricing plans and features</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.background === 'string' ? style.background : ''} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.background === 'string' ? style.background : '#fff'}
                            onChange={e => handleSectionStyleChange('background', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the section background color</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Text Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.color === 'string' ? style.color : ''} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.color === 'string' ? style.color : '#000'}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for pricing</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }

    if (section.type === 'footer') {
        const style = section.props.style as StyleProps;
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Copyright Text</label>
                    <Input 
                        value={typeof section.props.copyright === 'string' ? section.props.copyright : ''} 
                        onChange={e => handleSectionPropChange('copyright', e.target.value)} 
                        className="text-sm"
                        placeholder="© 2024 My Company. All rights reserved."
                    />
                    <p className="text-xs text-gray-500 mt-1">The copyright notice at the bottom</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Social Links:</label>
                    {Array.isArray(section.props.social) && section.props.social.map((s: { label: string; url?: string }, i: number) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-2 mb-2">
                            <Input 
                                value={typeof s.label === 'string' ? s.label : ''} 
                                onChange={e => handleSectionArrayPropChange('social', i, 'label', e.target.value)} 
                                placeholder="Link text (e.g., Twitter)" 
                                className="text-sm flex-1"
                            />
                            <Input 
                                value={typeof s.url === 'string' ? s.url : ''} 
                                onChange={e => handleSectionArrayPropChange('social', i, 'url', e.target.value)} 
                                placeholder="URL" 
                                className="text-sm flex-1"
                            />
                        </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-1">Add social media links</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.background === 'string' ? style.background : ''} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.background === 'string' ? style.background : '#222'}
                            onChange={e => handleSectionStyleChange('background', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the footer background color</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Text Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={typeof style.color === 'string' ? style.color : ''} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={typeof style.color === 'string' ? style.color : '#fff'}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for footer content</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }

    return <div className="text-gray-500 mt-8 text-sm">Select a section to edit its properties.</div>;
} 