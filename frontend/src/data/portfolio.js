const IMAGE_BASE = process.env.PUBLIC_URL || "";

export const profile = {
  name: "Vinayak Awati",
  tagline: "Architecture | Photography | Experiments | Creative Work",
  years: "Portfolio 2021–2026",
  location: "Vijayapura, Karnataka",
  email: "vinayakawati011@gmail.com",
  phone: "+91 6360629029",

  instagram: [
    {
      handle: "@vinayaaaaaak",
      url: "https://instagram.com/vinayaaaaaak",
    },
    {
      handle: "@vinayak.jpeg_",
      url: "https://instagram.com/vinayak.jpeg_",
    },
  ],

  bioLead:
    "Great architecture is a lot like good coffee – crafted with care, balanced in every detail, and memorable long after the first impression.",

  bioBody:
    "Hey, I’m Vinayak Awati. I enjoy transforming ideas into spaces that are both functional and expressive, combining creativity with thoughtful problem solving. From architectural design and visualization to photography and graphic experimentation, I explore different ways of communicating ideas through space and image.",

  education: [
    {
      title: "Bachelor of Architecture",
      place: "KLS Gogte Institute of Technology (GIT), Belagavi 590008",
      years: "2021–2026",
    },
    {
      title: "Higher Secondary",
      place: "Tungal Independent PU Science College, Ittangihal 586104",
      years: "2019–2021",
    },
  ],

  experience: [
    {
      title: "Architectural Internship",
      place: "2+ Design Collective, Mysore",
      years: "",
    },
    {
      title: "GIT NASA Treasurer",
      place: "2024",
      years: "",
    },
    {
      title: "IGBC Student Coordinator",
      place: "",
      years: "",
    },
    {
      title: "Graphic Editor at GIT",
      place: "Coffee table book",
      years: "",
    },
  ],

  software: [
    {
      group: "3D Modelling",
      tools: "Trimble SketchUp, Rhinoceros 3D",
    },
    {
      group: "Rendering",
      tools: "D5 Render, Chaos Enscape",
    },
    {
      group: "Drafting",
      tools: "Autodesk AutoCAD, GstarCAD",
    },
    {
      group: "Presentation",
      tools: "Adobe Photoshop, Illustrator, InDesign",
    },
  ],

  capabilities: [
    "Design Drafting & Detailing",
    "3D Visualization",
    "Concept & Design Development",
  ],

  interests: [
    "Movies",
    "Graphic Design",
    "Photography",
    "Travelling",
    "Trekking",
    "3D Modeling",
  ],

  competitions: [
    "NASA LIK 2023 & 2024",
    "NASA ANDC 2024",
    "CPK Trophy 2024",
  ],
};

export const projects = [
  {
    id: "after",
    index: "01",
    title: "AFTER",
    subtitle: "IT Workspace & Plug-and-Play Office",
    location: "Mangaluru",
    category: "Architecture / Workplace Design",

    description:
      "Located in Mangaluru, AFTER reimagines the workplace as a flexible environment where work, collaboration, nature, and informal interaction come together. The project explores a contemporary IT workspace designed around flexibility, connectivity, and a strong relationship with the tropical landscape.",

    plates: [
      `${IMAGE_BASE}/images/p04_0.jpg`,
      `${IMAGE_BASE}/images/p05_0.jpg`,
      `${IMAGE_BASE}/images/p07_0.jpg`,
      `${IMAGE_BASE}/images/p08_0.jpg`,
    ],
  },

  {
    id: "2plus",
    index: "02",
    title: "2+ DESIGN COLLECTIVE",
    subtitle: "Architectural Internship",
    location: "Mysore",
    category: "Architecture / Internship",

    description:
      "Internship at 2+ Design Collective provided valuable exposure to professional architectural practice. Working on diverse projects strengthened my design thinking, technical understanding, documentation, and visualization skills.",

    plates: [
      `${IMAGE_BASE}/images/p10_0.jpg`,
      `${IMAGE_BASE}/images/p11_0.jpg`,
      `${IMAGE_BASE}/images/p12_0.jpg`,
    ],
  },

  {
    id: "edam",
    index: "03",
    title: "EDAM",
    subtitle:
      "Escape · Dwell · Among · Meadows – A Contemporary Weekend Residence",
    location: "Belgaum",
    category: "Architecture / Residential",

    description:
      "Designed for slow living, EDAM blends modern architecture with nature to create a quiet weekend escape. Large openings, open-plan interiors, and landscaped gardens establish a continuous relationship between the built and natural environment.",

    plates: [
      `${IMAGE_BASE}/images/edam-cover.webp`,
      `${IMAGE_BASE}/images/p14_0.jpg`,
      `${IMAGE_BASE}/images/p15_0.jpg`,
    ],
  },

  {
    id: "antara",
    index: "04",
    title: "ANTARA",
    subtitle:
      "Spaces Between Knowledge, People, and Nature – A Contemporary Library",
    location: "Ahmedabad, Gujarat",
    category: "Architecture / Public Building",

    description:
      "ANTARA is a contemporary library designed as a quiet space for reading, learning, and reflection. The design uses natural light, shaded spaces, and bamboo elements to create an atmosphere that connects knowledge, people, and nature.",

    plates: [
      `${IMAGE_BASE}/images/p16_0.jpg`,
      `${IMAGE_BASE}/images/p17_0.jpg`,
    ],
  },

  {
    id: "cad-chaos",
    index: "05",
    title: "CAD CHAOS",
    subtitle: "Working Drawings",
    location: "—",
    category: "Architecture / Technical Drawings",

    description:
      "Working drawings – details of various architectural elements and construction.",

    plates: [
      `${IMAGE_BASE}/images/p18_0.jpg`,
    ],
  },

  {
    id: "misc",
    index: "06",
    title: "MISCELLANEOUS",
    subtitle: "Furniture, Product Design & Photography",
    location: "Outside the studio",
    category: "Furniture / Product / Photography",

    description:
      "Furniture and product design, outside the studio, photography.",

    plates: [
      `${IMAGE_BASE}/images/p19_0.jpg`,
      `${IMAGE_BASE}/images/p20_0.jpg`,
      `${IMAGE_BASE}/images/p21_0.jpg`,
      `${IMAGE_BASE}/images/p22_0.jpg`,
    ],
  },
];