import { useState } from "react";
import "../styles/services.css";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  checklist: string[];
  badge?: string;
}

const servicesData = {
  offer: [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Design stunning, user-friendly interfaces.",
      checklist: ["Wireframes", "Prototypes", "User Research"],
      badge: "Most Popular",
    },
    {
      icon: "🖥️",
      title: "Frontend Development",
      description: "Responsive, performant web interfaces.",
      checklist: ["HTML/CSS", "JavaScript", "React / Vue"],
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Powerful server-side applications.",
      checklist: ["Node.js", "Express", "MongoDB"],
    },
  ],
  skill: [
    {
      icon: "🌐",
      title: "HTML",
      description: "Structure the web.",
      checklist: ["Semantic Tags", "Forms", "SEO Elements"],
    },
    {
      icon: "🎨",
      title: "CSS",
      description: "Style your websites beautifully.",
      checklist: ["Flexbox", "Grid", "Animations"],
    },
    {
      icon: "📦",
      title: "Bootstrap",
      description: "Responsive UI toolkit.",
      checklist: ["Grid System", "Components", "Utilities"],
    },
    {
      icon: "📜",
      title: "JavaScript",
      description: "Dynamic interactivity.",
      checklist: ["ES6+", "DOM Manipulation", "Fetch API"],
    },
    {
      icon: "⚛️",
      title: "React JS",
      description: "Component-based frontend.",
      checklist: ["Hooks", "State Management", "JSX"],
    },
    {
      icon: "📱",
      title: "React Native",
      description: "Mobile app development.",
      checklist: ["Cross-Platform", "Native Modules", "Expo"],
    },
    {
      icon: "🛠️",
      title: "Node JS",
      description: "Backend runtime environment.",
      checklist: ["Non-blocking IO", "npm", "Modules"],
    },
    {
      icon: "🚀",
      title: "Express",
      description: "Web framework for Node.",
      checklist: ["Routing", "Middleware", "APIs"],
    },
    {
      icon: "💾",
      title: "MongoDB",
      description: "NoSQL database.",
      checklist: ["Documents", "Mongoose", "CRUD"],
    },
    {
      icon: "🔧",
      title: "GitHub",
      description: "Code collaboration.",
      checklist: ["Repos", "Branches", "Pull Requests"],
    },
    {
      icon: "🌟",
      title: "GSAP.js",
      description: "Advanced animations.",
      checklist: [
        "Timelines",
        "ScrollTrigger",
        "Ease Functions",
      ],
    },
    {
      icon: "🌳",
      title: "Three.js",
      description: "3D graphics for the web.",
      checklist: ["Canvas", "3D Objects", "Lights"],
    },
  ],
  tool: [
    {
      icon: "🧠",
      title: "VS Code",
      description: "Popular code editor.",
      checklist: ["Extensions", "Debugger", "Git Integration"],
    },
    {
      icon: "📐",
      title: "Figma",
      description: "UI design & collaboration.",
      checklist: [
        "Prototyping",
        "Components",
        "Real-time Editing",
      ],
    },
    {
      icon: "🌀",
      title: "Spline",
      description: "3D design tool.",
      checklist: [
        "Interactive 3D",
        "Export to Web",
        "Animations",
      ],
    },
    {
      icon: "🔁",
      title: "Reactbit",
      description: "Reusable React components.",
      checklist: [
        "Modular UI",
        "Component Sharing",
        "Integration",
      ],
    },
    {
      icon: "🌍",
      title: "Womp",
      description: "3D design & animation tool.",
      checklist: [
        "Online Editor",
        "Scene Composition",
        "Exports",
      ],
    },
    {
      icon: "🌌",
      title: "Universe.io",
      description: "No-code site builder.",
      checklist: ["Drag & Drop", "Templates", "Mobile-First"],
    },
  ],
};

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<
    "offer" | "skill" | "tool"
  >("offer");

  const tabs = [
    { id: "offer" as const, label: "Offer", icon: "💻" },
    { id: "skill" as const, label: "Skill", icon: "🎯" },
    { id: "tool" as const, label: "Tool", icon: "🧰" },
  ];

  return (
    <div>
      {/* Services Top Bar */}
      <section id="services" className="flex justify-between items-center uppercase text-xs sm:text-sm tracking-widest font-light text-gray-300 px-4 sm:px-8 md:px-16 py-4">
        <span>03</span>
        <span>//SERVICES</span>
        <span>2023 - 2025</span>
      </section>
      
      <div id="services" className="services-section">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        {servicesData[activeTab].map((card, index) => (
          <div key={index} className="card">
            {/* Badge */}
            {card.badge && (
              <div className="badge">{card.badge}</div>
            )}

            {/* Card Icon */}
            <div className="card-icon">{card.icon}</div>

            {/* Card Title */}
            <div className="card-title">{card.title}</div>

            {/* Card Description */}
            <div className="card-desc">{card.description}</div>

            {/* Checklist */}
            <ul className="checklist">
              {card.checklist.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}