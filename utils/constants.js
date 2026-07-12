// data/portfolioData.js
export const codeLines = [
  [{ t: "const", c: "text-[#7aa2f7]" }, { t: " engineer = {" }],
  [
    { t: "  " },
    { t: "name", c: "text-[#bb9af7]" },
    { t: ": " },
    { t: '"Shakib Uddin Bhuiyan"', c: "text-[#9ece6a]" },
    { t: "," },
  ],
  [
    { t: "  " },
    { t: "role", c: "text-[#bb9af7]" },
    { t: ": " },
    { t: '"Software Engineer, Frontend"', c: "text-[#9ece6a]" },
    { t: "," },
  ],
  [
    { t: "  " },
    { t: "based", c: "text-[#bb9af7]" },
    { t: ": " },
    { t: '"Dhaka, Bangladesh"', c: "text-[#9ece6a]" },
    { t: "," },
  ],
  [
    { t: "  " },
    { t: "experience", c: "text-[#bb9af7]" },
    { t: ": " },
    { t: '"4+ years"', c: "text-[#9ece6a]" },
    { t: "," },
  ],
  [
    { t: "  " },
    { t: "stack", c: "text-[#bb9af7]" },
    { t: ": [" },
    { t: '"React"', c: "text-[#9ece6a]" },
    { t: ", " },
    { t: '"Next.js"', c: "text-[#9ece6a]" },
    { t: ", " },
    { t: '"TypeScript"', c: "text-[#9ece6a]" },
    { t: "]," },
  ],
  [
    { t: "  " },
    { t: "currentlyLearning", c: "text-[#bb9af7]" },
    { t: ": [" },
    { t: '"C#"', c: "text-[#9ece6a]" },
    { t: ", " },
    { t: '".NET"', c: "text-[#9ece6a]" },
    { t: ", " },
    { t: '"DSA"', c: "text-[#9ece6a]" },
    { t: "]," },
  ],
  [{ t: "};" }],
  [{ t: "// building fast, readable, accessible UI", c: "text-[#5b6272]" }],
  [{ t: "", cursor: true }],
];

export const experiences = [
  {
    period: "Nov 2025 — Present",
    role: "Software Engineer",
    org: "Pivotly",
    isCurrent: true,
    points: [
      "Build and optimize responsive, high-performance UIs with React.js, TypeScript and Next.js, using modular component architecture and Tailwind CSS.",
      "Work directly with Figma designers, backend engineers and QA to ship accessible, pixel-perfect, cross-browser experiences.",
      "Keep the codebase clean and shippable — strict TypeScript, Playwright test coverage, and disciplined Git workflows.",
    ],
  },
  {
    period: "Jan 2022 — Oct 2025",
    role: "Software Engineer",
    org: "Silicon Orchard Ltd.",
    isCurrent: false,
    points: [
      "Owned requirement analysis and effort estimation, then led scalable technical design in React.js and Next.js — nearly 4 years on one product.",
      "Shipped pixel-perfect, responsive UIs in TypeScript and Tailwind CSS, backed by Cypress end-to-end tests written in close collaboration with QA.",
      "Redesigned the team's Git branching strategy and release workflow, and kept feature documentation current for smoother handoffs.",
      "Improved app scalability by optimizing database schemas and tightening frontend–backend data flow through REST APIs.",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Practice Management Platform",
    problem:
      "A production healthcare platform used by dental and clinical practices to manage patient workflows, clinical documentation, communication, and administrative operations.",
    link: null,
    badge: "private / NDA",
    points: [
      "Built a fully customizable medical form builder that enables practices to dynamically configure and collect patient visit records without requiring code changes.",
      "Implemented real-time video consultations using Agora and Socket.io, enabling secure communication workflows between healthcare providers and patients.",
      "Developed integrated faxing workflows using SRFax to streamline document transmission between practices, patients, and external providers.",
      "Created a real-time internal ticketing system using Socket.io for efficient issue tracking, communication, and operational support.",
      "Implemented end-to-end testing with Cypress to validate critical user workflows and improve application reliability.",
      "Refactored large, complex components into smaller reusable components, custom hooks, and maintainable modules to improve long-term code quality.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "React Query",
      "Context API",
      "Socket.io",
      "Agora",
      "SRFax",
      "Node.js",
      "Ant Design",
      "Formik",
      "Yup",
      "Cypress",
    ],
  },
  {
    filename: "vault-76 / equipment-rental.tsx",
    title: "Vault-76 — Equipment Rental Platform",
    problem:
      "A personal project built end-to-end: a system for tracking rental equipment, customers, and money from booking to return — live in production.",
    link: "https://vault-76.vercel.app",
    badge: null,
    points: [
      "Customer management and full equipment inventory with categories and real-time availability tracking.",
      "Rental creation, status tracking, and payment handling — deposits, rental charges, and refunds.",
      "Analytics dashboard surfacing business insights, plus search, filtering, and pagination across every record list.",
      "Fully responsive interface, built and tested for both desktop and mobile use.",
    ],
    stack: ["Next.js", "Tailwind CSS", "DaisyUI", "MongoDB", "Zustand"],
  },
];
