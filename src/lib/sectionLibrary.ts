// Section templates
export const SECTION_LIBRARY = [
  {
    type: "navbar",
    name: "Navbar",
    variants: [
      {
        name: "Classic Dark",
        defaultProps: {
          logo: "/globe.svg",
          title: "My Website",
          links: [
            { label: "Home", url: "#" },
            { label: "About", url: "#" },
            { label: "Contact", url: "#" },
          ],
          style: {
            background: "#222",
            color: "#fff",
            layout: "horizontal",
            justify: "space-between",
            padding: "12px 24px",
          },
        },
      },
      {
        name: "Centered Light",
        defaultProps: {
          logo: "/window.svg",
          title: "Minimal Site",
          links: [
            { label: "Home", url: "#" },
            { label: "Blog", url: "#" },
            { label: "Contact", url: "#" },
          ],
          style: {
            background: "#fff",
            color: "#222",
            layout: "horizontal",
            justify: "center",
            borderBottom: "1px solid #eee",
            padding: "12px 0",
          },
        },
      },
      {
        name: "Logo Left Colorful",
        defaultProps: {
          logo: "/next.svg",
          title: "Colorful Nav",
          links: [
            { label: "Home", url: "#" },
            { label: "Portfolio", url: "#" },
            { label: "Contact", url: "#" },
          ],
          style: {
            background: "linear-gradient(90deg, #6366f1, #06b6d4)",
            color: "#fff",
            layout: "horizontal",
            justify: "flex-start",
            padding: "12px 24px",
          },
        },
      },
    ],
  },
  {
    type: "hero",
    name: "Hero",
    variants: [
      {
        name: "Simple",
        defaultProps: {
          heading: "Welcome to My Website",
          subheading: "Build your site visually!",
          style: {
            background: "#eee",
            color: "#222",
            align: "center",
            padding: "48px 0",
          },
        },
      },
      {
        name: "Bold Left",
        defaultProps: {
          heading: "Create Something Amazing",
          subheading: "Start building your dream site today.",
          style: {
            background: "#6366f1",
            color: "#fff",
            align: "left",
            padding: "48px 0 48px 48px",
          },
        },
      },
      {
        name: "Image Background",
        defaultProps: {
          heading: "Stunning Visuals",
          subheading: "Your site, your style.",
          style: {
            background:
              "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80) center/cover",
            color: "#fff",
            align: "center",
            padding: "64px 0",
            textShadow: "0 2px 8px #0008",
          },
        },
      },
    ],
  },
  {
    type: "content",
    name: "Content",
    variants: [
      {
        name: "Simple Text",
        defaultProps: {
          heading: "About Our Company",
          content: "We are passionate about creating amazing experiences for our customers. Our team works tirelessly to deliver the best solutions.",
          style: {
            background: "#fff",
            color: "#222",
            align: "left",
            padding: "48px 24px",
          },
        },
      },
      {
        name: "Centered",
        defaultProps: {
          heading: "Our Mission",
          content: "To provide innovative solutions that empower businesses to grow and succeed in the digital age.",
          style: {
            background: "#f8f9fa",
            color: "#222",
            align: "center",
            padding: "64px 24px",
          },
        },
      },
      {
        name: "Two Column",
        defaultProps: {
          heading: "Why Choose Us",
          content: "We combine creativity with technology to deliver exceptional results that exceed expectations.",
          content2: "Our proven track record and dedicated team ensure your project is completed on time and within budget.",
          style: {
            background: "#fff",
            color: "#222",
            align: "left",
            padding: "48px 24px",
          },
        },
      },
    ],
  },
  {
    type: "features",
    name: "Features",
    variants: [
      {
        name: "Three Cards",
        defaultProps: {
          heading: "Our Features",
          features: [
            {
              title: "Fast & Reliable",
              description: "Lightning-fast performance with 99.9% uptime guarantee.",
              icon: "⚡",
            },
            {
              title: "Easy to Use",
              description: "Intuitive interface designed for the best user experience.",
              icon: "🎯",
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock support to help you succeed.",
              icon: "🛡️",
            },
          ],
          style: {
            background: "#f8f9fa",
            color: "#222",
            align: "center",
            padding: "64px 24px",
          },
        },
      },
      {
        name: "Grid Layout",
        defaultProps: {
          heading: "What We Offer",
          features: [
            {
              title: "Design",
              description: "Beautiful, responsive designs that work on all devices.",
              icon: "🎨",
            },
            {
              title: "Development",
              description: "Clean, efficient code that powers your applications.",
              icon: "💻",
            },
            {
              title: "Marketing",
              description: "Strategic marketing to grow your business.",
              icon: "📈",
            },
            {
              title: "Support",
              description: "Dedicated support team to help you succeed.",
              icon: "🤝",
            },
          ],
          style: {
            background: "#fff",
            color: "#222",
            align: "center",
            padding: "48px 24px",
          },
        },
      },
    ],
  },
  {
    type: "testimonials",
    name: "Testimonials",
    variants: [
      {
        name: "Simple Cards",
        defaultProps: {
          heading: "What Our Clients Say",
          testimonials: [
            {
              name: "Sarah Johnson",
              role: "CEO, TechStart",
              content: "Amazing service! They delivered exactly what we needed on time and within budget.",
              rating: 5,
            },
            {
              name: "Mike Chen",
              role: "Founder, DesignLab",
              content: "The team was professional, creative, and exceeded our expectations. Highly recommended!",
              rating: 5,
            },
          ],
          style: {
            background: "#f8f9fa",
            color: "#222",
            align: "center",
            padding: "64px 24px",
          },
        },
      },
      {
        name: "Quote Style",
        defaultProps: {
          heading: "Client Testimonials",
          testimonials: [
            {
              name: "Emily Davis",
              role: "Marketing Director",
              content: "Working with this team has been a game-changer for our business. The results speak for themselves.",
              rating: 5,
            },
          ],
          style: {
            background: "#6366f1",
            color: "#fff",
            align: "center",
            padding: "80px 24px",
          },
        },
      },
    ],
  },
  {
    type: "contact",
    name: "Contact",
    variants: [
      {
        name: "Simple Form",
        defaultProps: {
          heading: "Get In Touch",
          subheading: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
          email: "contact@example.com",
          phone: "+1 (555) 123-4567",
          style: {
            background: "#fff",
            color: "#222",
            align: "center",
            padding: "64px 24px",
          },
        },
      },
      {
        name: "With Map",
        defaultProps: {
          heading: "Contact Us",
          subheading: "Ready to start your project? Let's talk!",
          address: "123 Business St, Suite 100, City, State 12345",
          email: "hello@company.com",
          phone: "+1 (555) 987-6543",
          style: {
            background: "#f8f9fa",
            color: "#222",
            align: "left",
            padding: "48px 24px",
          },
        },
      },
    ],
  },
  {
    type: "pricing",
    name: "Pricing",
    variants: [
      {
        name: "Three Tiers",
        defaultProps: {
          heading: "Choose Your Plan",
          subheading: "Select the perfect plan for your needs",
          plans: [
            {
              name: "Starter",
              price: "$29",
              period: "/month",
              features: ["Basic features", "Email support", "5GB storage", "1 user"],
              popular: false,
            },
            {
              name: "Professional",
              price: "$99",
              period: "/month",
              features: ["All starter features", "Priority support", "50GB storage", "10 users", "Advanced analytics"],
              popular: true,
            },
            {
              name: "Enterprise",
              price: "$199",
              period: "/month",
              features: ["All professional features", "24/7 support", "Unlimited storage", "Unlimited users", "Custom integrations"],
              popular: false,
            },
          ],
          style: {
            background: "#fff",
            color: "#222",
            align: "center",
            padding: "64px 24px",
          },
        },
      },
      {
        name: "Simple Pricing",
        defaultProps: {
          heading: "Simple Pricing",
          subheading: "No hidden fees, no surprises",
          plans: [
            {
              name: "Basic",
              price: "$19",
              period: "/month",
              features: ["Core features", "Email support", "Community access"],
              popular: false,
            },
            {
              name: "Pro",
              price: "$49",
              period: "/month",
              features: ["All basic features", "Priority support", "Advanced features", "API access"],
              popular: true,
            },
          ],
          style: {
            background: "#f8f9fa",
            color: "#222",
            align: "center",
            padding: "48px 24px",
          },
        },
      },
    ],
  },
  {
    type: "footer",
    name: "Footer",
    variants: [
      {
        name: "Dark Simple",
        defaultProps: {
          copyright: "© 2024 My Website",
          social: [
            { label: "Twitter", url: "https://twitter.com" },
            { label: "GitHub", url: "https://github.com" },
          ],
          style: {
            background: "#222",
            color: "#fff",
            layout: "horizontal",
            justify: "space-between",
            padding: "16px 24px",
          },
        },
      },
      {
        name: "Light Centered",
        defaultProps: {
          copyright: "© 2024 Minimal Site",
          social: [
            { label: "LinkedIn", url: "https://linkedin.com" },
            { label: "Instagram", url: "https://instagram.com" },
          ],
          style: {
            background: "#fafafa",
            color: "#222",
            layout: "vertical",
            align: "center",
            padding: "24px 0",
          },
        },
      },
      {
        name: "Gradient Columns",
        defaultProps: {
          copyright: "© 2024 Colorful Footer",
          social: [
            { label: "Facebook", url: "https://facebook.com" },
            { label: "YouTube", url: "https://youtube.com" },
          ],
          style: {
            background: "linear-gradient(90deg, #06b6d4, #6366f1)",
            color: "#fff",
            layout: "columns",
            padding: "24px 32px",
          },
        },
      },
    ],
  },
]; 