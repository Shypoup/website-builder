# Website Builder

A modern, drag-and-drop website builder built with Next.js, React, and TypeScript. Create beautiful websites with a visual editor that supports multiple device previews, real-time editing, and project management.

## 🚀 Features

### Visual Website Builder
- **Drag & Drop Interface**: Add sections from a comprehensive library
- **Real-time Preview**: See changes instantly as you build
- **Multi-device Preview**: Test your design on desktop, tablet, and mobile
- **Section Library**: Pre-built sections including Hero, Features, Contact, Pricing, and more
- **Properties Panel**: Edit section content, styling, and layout in real-time

### Project Management
- **Save Projects**: Store your designs with custom names and descriptions
- **Import/Export**: Share designs via JSON files
- **Auto-save**: Your work is automatically saved to localStorage
- **Project Gallery**: View and manage all your saved projects

### Advanced Features
- **Full-screen Mode**: Focus on your design with distraction-free editing
- **Responsive Design**: Built-in responsive breakpoints and preview modes
- **Section Reordering**: Drag sections to rearrange your layout
- **Style Customization**: Modify colors, spacing, typography, and more
- **Component Library**: Built with shadcn/ui for consistent, beautiful components

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website-builder
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Creating a New Website
1. Navigate to "Create New Website"
2. Choose sections from the Library panel
3. Customize content and styling in the Properties panel
4. Preview your design across different devices
5. Save your project when ready

### Managing Projects
- **Save Project**: Click the save button to store your current design
- **View Projects**: Visit "My Projects" to see all saved designs
- **Export Design**: Download your design as a JSON file
- **Import Design**: Upload a previously exported design file

### Editing Sections
1. Click on any section in the preview to select it
2. Use the Properties panel to modify:
   - Text content
   - Images and media
   - Colors and styling
   - Layout and spacing
   - Links and navigation

### Device Preview
- Switch between Desktop, Tablet, and Mobile views
- Test responsive design across different screen sizes
- Use full-screen mode for focused editing

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── create-new-website/ # Website builder interface
│   └── my-projects/       # Project management
├── components/             # React components
│   ├── panels/            # Main builder panels
│   ├── sections/          # Pre-built website sections
│   └── ui/               # Reusable UI components
└── lib/                   # Utilities and libraries
    ├── sectionLibrary.ts  # Section definitions
    └── sectionRenderer.tsx # Section rendering logic
```

## 🎨 Available Sections

- **Hero Section**: Eye-catching landing sections with CTAs
- **Features Section**: Showcase product features and benefits
- **Content Section**: Rich text content with images
- **Contact Section**: Contact forms and information
- **Pricing Section**: Pricing tables and plans
- **Testimonials Section**: Customer reviews and feedback
- **Footer Section**: Site footer with links and info
- **Navbar Section**: Navigation menus and branding

## 🔧 Development

### Adding New Sections
1. Create a new section component in `src/components/sections/`
2. Add section definition to `src/lib/sectionLibrary.ts`
3. Update the section renderer in `src/lib/sectionRenderer.tsx`

### Customizing Styles
- Modify Tailwind classes in section components
- Update the Properties panel for new style options
- Add new color schemes and themes
