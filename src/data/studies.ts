export const studies = [
  {
    title: "Ciclo Formativo de Grado Superior DAM",
    institution: "Institut Tecnològic de Barcelona (ITB)",
    description:
      "Especialización en Desarrollo de Aplicaciones Multiplataforma, con un fuerte enfoque en tecnologías web modernas, metodologías ágiles y proyectos prácticos de desarrollo.",
    tags: [
      "Java",
      "Android",
      "Bases de Datos",
      "Sistemas",
      "Metodologías Ágiles",
    ],
  },
  {
    title: "Bachillerato Científico-Tecnológico",
    institution: "Institut Pedralbes, Barcelona",
    description:
      "Formación académica con base en matemáticas, física y tecnología industrial, orientada al desarrollo de capacidades analíticas y técnicas.",
    tags: [
      "Matemáticas",
      "Física",
      "Tecnología",
      "Análisis",
    ],
  },
  {
    title: "Certificaciones en Robótica",
    institution: "Universal Robots",
    description:
      "Completados los itinerarios básico y profesional de e-Series para la integración de sistemas robóticos aplicables a la automatización industrial.",
    tags: [
      "Automatización",
      "Robótica",
      "e-Series",
      "Sistemas",
    ],
  },
];

export type StudyItem = (typeof studies)[number];