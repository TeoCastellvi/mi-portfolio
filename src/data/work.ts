import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Desarrollador Front-end",
    company: "Jelliby",
    region: "Barcelona", 
    description:
      "Desarrollo y mantenimiento de sitios web implementando temas personalizados de WordPress con Sage. Creación de documentación técnica de proyectos utilizando Astro Starlight.", // [cite: 30, 31]
    technologies: [
      "WordPress", 
      "Sage",  
      "PHP",  
      "JavaScript",  
      "Tailwind CSS",  
      "Astro Starlight",  
      "Bitbucket",  
    ],
  },
  {
    title: "Desarrollador Full Stack (Prácticas)",
    company: "Lenium Group", 
    region: "Barcelona",
    description:
      "Desarrollo de una aplicación web integral para la optimización de instalaciones fotovoltaicas. Trabajo en equipo aplicando metodologías ágiles (Scrum).", // [cite: 35, 37]
    technologies: [
      "Laravel", 
      "PHP",
      "JavaScript", 
      "Tailwind CSS", 
      "Git", 
      "Scrum", 
    ],
  },
  {
    title: "Atención al Cliente",
    company: "Les Topettes", 
    region: "Barcelona",
    description:
      "Resolución de incidencias y comunicación efectiva con el cliente. Gestión de objetivos comerciales y trabajo en equipo en entorno retail.", 
    technologies: [
      "Resolución de problemas", 
      "Comunicación efectiva", 
      "Trabajo en equipo", 
      "Atención al cliente", 
    ],
  },
];

export type WorkItem = (typeof work)[number];