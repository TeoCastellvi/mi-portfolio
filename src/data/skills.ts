export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.89 11.1L9 7.21l1.41-1.41L15.72 11.1l-5.31 5.31L9 15l3.89-3.9zM17 18h-5v-2h5v2z"/></svg>`,
    title: "Desarrollo WordPress & CMS",
    description: "Creación y personalización de temas, gestión avanzada con PHP y optimización del ecosistema de plugins para webs escalables.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    title: "Front-End Moderno",
    description: "Maquetación de interfaces con HTML5, CSS3 y Tailwind. Diseño totalmente Responsive y accesible.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`, 
    title: "Documentación & Starlight",
    description: "Gestión del conocimiento y documentación técnica de proyectos usando Astro Starlight. Porque un buen código debe ser entendible.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>`,
    title: "Maquetación Visual",
    description: "Experto en trasladar diseños a la realidad usando constructores como Elementor o Gutenberg. Diseño sitios atractivos y fáciles de navegar.",
  },
];

export type Skill = (typeof skills)[number];