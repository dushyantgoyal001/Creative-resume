// Single source of truth for all application data
export const resumeData = {
  // User Profile Information
  user: {
    name: "dushyant goyal",
    email: "dushyantgoyal001@gmail.com",
    avatar: "/images/avatar.png",
    hasPassword: false,
  },

  // Navigation Menu
  navigation: [
    { label: "Overview", href: "#", active: true },
    { label: "Account and security", href: "#", active: false },
    { label: "Plans and payment", href: "#", active: false },
    { label: "Communication preferences", href: "#", active: false },
  ],

  // Creative Identity Card
  identityCard: {
    summary: "A versatile creative professional specializing in digital design and visual storytelling. Combining technical expertise with artistic vision to deliver compelling visual experiences across multiple platforms and mediums.",
    signatureStyle: "Bold color language",
    coreThemes: [
      "Urban movement",
      "Human emotions",
      "Surreal nature"
    ],
    techniques: [
      { icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg", name: "Digital illustration", appName: "Ai" },
      { icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", name: "Vibrant palette", appName: "Ps" },
      { icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Adobe_Firefly_Logo.svg", name: "AI-powered design", appName: "Ff" },
      { icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", name: "Video editing", appName: "Pr" }
    ],
    strengths: [
      "Strong typography",
      "Excellent color harmony"
    ],
    portfolio: {
      platform: "Behance",
      icon: "/icons/behance.svg",
      projectCount: 52
    },
    verification: {
      isVerified: true,
      platform: "Adobe"
    }
  },

  // Social Sign-in Options
  socialSignIns: [
    { name: "Google", icon: "/icons/google.svg" },
    { name: "Facebook", icon: "/icons/facebook.svg" },
    { name: "Apple", icon: "/icons/apple.svg" },
    { name: "Microsoft", icon: "/icons/microsoft.svg" },
    { name: "iCloud", icon: "/icons/icloud.svg" },
    { name: "Message", icon: "/icons/message.svg" },
  ],

  // Help Sections in Footer
  helpSections: [
    {
      title: "Common questions",
      icon: "question",
      links: [
        { label: "Help getting started", href: "#" },
        { label: "How do I download and install my products?", href: "#" },
        { label: "What should I do if a payment is missed or fails?", href: "#" },
        { label: "How do I change my plan?", href: "#" },
        { label: "Review top billing FAQs", href: "#" },
        { label: "Help with my storage, files or folders", href: "#" },
      ],
    },
    {
      title: "Communities",
      icon: "community",
      links: [
        { label: "Come for help, be inspired", href: "#" },
      ],
    },
    {
      title: "Tutorials",
      icon: "play",
      links: [
        { label: "Learn creativity and design", href: "#" },
        { label: "Learn document productivity", href: "#" },
        { label: "Account troubleshooting and how-to", href: "#" },
      ],
    },
    {
      title: "Contact",
      icon: "chat",
      links: [
        { label: "View Support History", href: "#" },
        { label: "Contact Adobe Support", href: "#" },
      ],
    },
  ],

  // Footer Links
  footerLinks: [
    { label: "Do not sell or share my personal information", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms of use", href: "#" },
    { label: "Cookie preferences", href: "#" },
  ],
};

// Export individual parts for backward compatibility (optional)
export const userData = resumeData.user;
export const navigationItems = resumeData.navigation;
export const creativeIdentityCard = resumeData.identityCard;
export const socialSignIns = resumeData.socialSignIns;
export const helpSections = resumeData.helpSections;
export const footerLinks = resumeData.footerLinks;

