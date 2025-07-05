import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function PropertiesPanel({ selectedSectionIdx, sections, handleSectionPropChange, handleSectionArrayPropChange, handleSectionStyleChange, handleRemoveSection }: any) {
    if (selectedSectionIdx === null) {
        return <div className="text-gray-500 mt-8 text-sm">Select a section in the preview to edit its properties.</div>;
    }
    const section = sections[selectedSectionIdx];
    if (!section) return null;
    
    if (section.type === 'navbar') {
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Logo URL</label>
                    <Input 
                        value={section.props.logo || ''} 
                        onChange={e => handleSectionPropChange('logo', e.target.value)} 
                        placeholder="/globe.svg or https://..." 
                        className="text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">Enter the URL or path to your logo image</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Website Title</label>
                    <Input 
                        value={section.props.title} 
                        onChange={e => handleSectionPropChange('title', e.target.value)} 
                        className="text-sm"
                        placeholder="My Website"
                    />
                    <p className="text-xs text-gray-500 mt-1">The main title displayed in the navigation</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Navigation Links:</label>
                    {section.props.links.map((l: any, i: number) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-2 mb-2">
                            <Input 
                                value={l.label} 
                                onChange={e => handleSectionArrayPropChange('links', i, 'label', e.target.value)} 
                                placeholder="Link text" 
                                className="text-sm flex-1"
                            />
                            <Input 
                                value={l.url} 
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
                            value={section.props.style.background} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#222 or linear-gradient..." 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.background.startsWith('#') ? section.props.style.background : '#222'}
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
                            value={section.props.style.color} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.color}
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
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Main Heading</label>
                    <Input 
                        value={section.props.heading} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="Welcome to My Website"
                    />
                    <p className="text-xs text-gray-500 mt-1">The main title that appears prominently</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Subheading</label>
                    <Input 
                        value={section.props.subheading} 
                        onChange={e => handleSectionPropChange('subheading', e.target.value)} 
                        className="text-sm"
                        placeholder="Build your site visually!"
                    />
                    <p className="text-xs text-gray-500 mt-1">Supporting text below the main heading</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color/Image</label>
                    <Input 
                        value={section.props.style.background} 
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
                            value={section.props.style.color} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.color}
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
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={section.props.heading} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="About Our Company"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this content section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Main Content</label>
                    <textarea 
                        value={section.props.content} 
                        onChange={e => handleSectionPropChange('content', e.target.value)} 
                        className="text-sm w-full p-2 border rounded-md"
                        rows={3}
                        placeholder="Enter your content here..."
                    />
                    <p className="text-xs text-gray-500 mt-1">The main text content for this section</p>
                </div>
                {section.props.content2 && (
                    <div>
                        <label className="text-sm font-medium block mb-1">Second Content Column</label>
                        <textarea 
                            value={section.props.content2} 
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
                            value={section.props.style.background} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.background}
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
                            value={section.props.style.color} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.color}
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
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={section.props.heading} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="Our Features"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this features section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Feature Items:</label>
                    {section.props.features.map((f: any, i: number) => (
                        <div key={i} className="border p-3 rounded-md mb-2">
                            <div className="flex flex-col gap-2 mb-2">
                                <Input 
                                    value={f.title} 
                                    onChange={e => handleSectionArrayPropChange('features', i, 'title', e.target.value)} 
                                    placeholder="Feature title" 
                                    className="text-sm"
                                />
                                <Input 
                                    value={f.icon} 
                                    onChange={e => handleSectionArrayPropChange('features', i, 'icon', e.target.value)} 
                                    placeholder="🎨 (emoji icon)" 
                                    className="text-sm"
                                />
                                <textarea 
                                    value={f.description} 
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
                            value={section.props.style.background} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#f8f9fa" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.background}
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
                            value={section.props.style.color} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.color}
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
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={section.props.heading} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="What Our Clients Say"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this testimonials section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Customer Testimonials:</label>
                    {section.props.testimonials.map((t: any, i: number) => (
                        <div key={i} className="border p-3 rounded-md mb-2">
                            <div className="flex flex-col gap-2">
                                <Input 
                                    value={t.name} 
                                    onChange={e => handleSectionArrayPropChange('testimonials', i, 'name', e.target.value)} 
                                    placeholder="Customer name" 
                                    className="text-sm"
                                />
                                <Input 
                                    value={t.role} 
                                    onChange={e => handleSectionArrayPropChange('testimonials', i, 'role', e.target.value)} 
                                    placeholder="Job title, Company" 
                                    className="text-sm"
                                />
                                <textarea 
                                    value={t.content} 
                                    onChange={e => handleSectionArrayPropChange('testimonials', i, 'content', e.target.value)} 
                                    placeholder="Customer testimonial text" 
                                    className="text-sm w-full p-2 border rounded-md"
                                    rows={3}
                                />
                                <Input 
                                    value={t.rating} 
                                    onChange={e => handleSectionArrayPropChange('testimonials', i, 'rating', parseInt(e.target.value))} 
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
                            value={section.props.style.background} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#f8f9fa" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.background}
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
                            value={section.props.style.color} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.color}
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
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={section.props.heading} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="Get In Touch"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this contact section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Subheading</label>
                    <Input 
                        value={section.props.subheading} 
                        onChange={e => handleSectionPropChange('subheading', e.target.value)} 
                        className="text-sm"
                        placeholder="We'd love to hear from you"
                    />
                    <p className="text-xs text-gray-500 mt-1">Supporting text below the heading</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Email Address</label>
                    <Input 
                        value={section.props.email} 
                        onChange={e => handleSectionPropChange('email', e.target.value)} 
                        className="text-sm"
                        placeholder="contact@example.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">Your business email address</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Phone Number</label>
                    <Input 
                        value={section.props.phone} 
                        onChange={e => handleSectionPropChange('phone', e.target.value)} 
                        className="text-sm"
                        placeholder="+1 (555) 123-4567"
                    />
                    <p className="text-xs text-gray-500 mt-1">Your business phone number</p>
                </div>
                {section.props.address && (
                    <div>
                        <label className="text-sm font-medium block mb-1">Business Address</label>
                        <Input 
                            value={section.props.address} 
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
                            value={section.props.style.background} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.background}
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
                            value={section.props.style.color} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.color}
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
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Section Heading</label>
                    <Input 
                        value={section.props.heading} 
                        onChange={e => handleSectionPropChange('heading', e.target.value)} 
                        className="text-sm"
                        placeholder="Choose Your Plan"
                    />
                    <p className="text-xs text-gray-500 mt-1">The title for this pricing section</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Subheading</label>
                    <Input 
                        value={section.props.subheading} 
                        onChange={e => handleSectionPropChange('subheading', e.target.value)} 
                        className="text-sm"
                        placeholder="Select the perfect plan for your needs"
                    />
                    <p className="text-xs text-gray-500 mt-1">Supporting text below the heading</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Pricing Plans:</label>
                    {section.props.plans.map((p: any, i: number) => (
                        <div key={i} className="border p-3 rounded-md mb-2">
                            <div className="flex flex-col gap-2">
                                <Input 
                                    value={p.name} 
                                    onChange={e => handleSectionArrayPropChange('plans', i, 'name', e.target.value)} 
                                    placeholder="Plan name (e.g., Basic)" 
                                    className="text-sm"
                                />
                                <Input 
                                    value={p.price} 
                                    onChange={e => handleSectionArrayPropChange('plans', i, 'price', e.target.value)} 
                                    placeholder="Price (e.g., $29)" 
                                    className="text-sm"
                                />
                                <Input 
                                    value={p.period} 
                                    onChange={e => handleSectionArrayPropChange('plans', i, 'period', e.target.value)} 
                                    placeholder="Period (e.g., /month)" 
                                    className="text-sm"
                                />
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        checked={p.popular} 
                                        onChange={e => handleSectionArrayPropChange('plans', i, 'popular', e.target.checked)} 
                                        className="text-sm"
                                    />
                                    <label className="text-sm">Mark as popular plan</label>
                                </div>
                                <div>
                                    <label className="text-sm font-medium block mb-1">Plan Features (one per line):</label>
                                    <textarea 
                                        value={p.features.join('\n')} 
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
                            value={section.props.style.background} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.background}
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
                            value={section.props.style.color} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.color}
                            onChange={e => handleSectionStyleChange('color', e.target.value)}
                            className="w-10 h-10 rounded border"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose the text color for pricing info</p>
                </div>
                <Button variant="destructive" onClick={handleRemoveSection} className="mt-4">Remove Section</Button>
            </div>
        );
    }
    
    if (section.type === 'footer') {
        return (
            <div className="flex flex-col gap-3">
                <div>
                    <label className="text-sm font-medium block mb-1">Copyright Text</label>
                    <Input 
                        value={section.props.copyright} 
                        onChange={e => handleSectionPropChange('copyright', e.target.value)} 
                        className="text-sm"
                        placeholder="© 2024 My Website"
                    />
                    <p className="text-xs text-gray-500 mt-1">Copyright notice displayed in footer</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-2">Social Media Links:</label>
                    {section.props.social.map((s: any, i: number) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-2 mb-2">
                            <Input 
                                value={s.label} 
                                onChange={e => handleSectionArrayPropChange('social', i, 'label', e.target.value)} 
                                placeholder="Platform name" 
                                className="text-sm flex-1"
                            />
                            <Input 
                                value={s.url} 
                                onChange={e => handleSectionArrayPropChange('social', i, 'url', e.target.value)} 
                                placeholder="Profile URL" 
                                className="text-sm flex-1"
                            />
                        </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-1">Add links to your social media profiles</p>
                </div>
                <div>
                    <label className="text-sm font-medium block mb-1">Background Color</label>
                    <div className="flex gap-2">
                        <Input 
                            value={section.props.style.background} 
                            onChange={e => handleSectionStyleChange('background', e.target.value)} 
                            placeholder="#222" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.background.startsWith('#') ? section.props.style.background : '#222'}
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
                            value={section.props.style.color} 
                            onChange={e => handleSectionStyleChange('color', e.target.value)} 
                            placeholder="#fff" 
                            className="text-sm flex-1"
                        />
                        <input 
                            type="color" 
                            value={section.props.style.color}
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
    return null;
} 