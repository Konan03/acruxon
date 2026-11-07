import {
  CodeXml, MonitorCog, ShieldCheck, Layers3, Handshake, Headset,
  MessageSquare, ScanSearch, Wrench, CircleCheck,
} from "lucide-react";
import { images } from "./images";

export const services = [
  {
    id: "soporte", title: "Soporte técnico", icon: MonitorCog, image: images.soporte,
    description: "Recupera el rendimiento de tus equipos.",
    highlights: ["Diagnóstico y reparación", "Mantenimiento", "Optimización", "Software y componentes"],
    details: [
      ["Diagnóstico y reparación", "Portátiles y computadores de escritorio."],
      ["Mantenimiento y rendimiento", "Mantenimiento preventivo y correctivo, optimización y actualización de componentes."],
      ["Configuración y asesoría", "Instalación de software y orientación para cuidar tus equipos."],
    ],
  },
  {
    id: "software", title: "Desarrollo de software", icon: CodeXml, image: images.desarrollo,
    description: "Convierte tus ideas en herramientas digitales.",
    highlights: ["Desarrollo web", "Software a medida", "Aplicaciones empresariales", "APIs y automatización"],
    details: [
      ["Web y aplicaciones", "Sitios responsivos, aplicaciones empresariales y sistemas de información."],
      ["Integraciones", "APIs REST, bases de datos y automatización de procesos."],
      ["Evolución y consultoría", "Mantenimiento de aplicaciones y orientación tecnológica."],
    ],
  },
];

export const features = [
  { title: "A tu medida", icon: Handshake, description: "Partimos de lo que necesitas." },
  { title: "Visión integral", icon: Layers3, description: "Equipos y software conectados." },
  { title: "Calidad técnica", icon: ShieldCheck, description: "Soluciones confiables y mantenibles." },
  { title: "Acompañamiento", icon: Headset, description: "Orientación en cada etapa." },
];

export const projects = [
  { title: "Gestión empresarial", category: "Software a medida", image: images.codigo, description: "Procesos, usuarios e información en un solo lugar." },
  { title: "Web corporativa", category: "Desarrollo web", image: images.colaboracion, description: "Una presencia digital para acercarte a tus clientes." },
  { title: "Equipos optimizados", category: "Soporte técnico", image: images.diagnostico, description: "Diagnóstico y mantenimiento para mejorar el rendimiento." },
];

export const process = [
  { title: "Te escuchamos", description: "Cuéntanos qué necesitas.", icon: MessageSquare },
  { title: "Proponemos", description: "Definimos la solución contigo.", icon: ScanSearch },
  { title: "Implementamos", description: "Ponemos manos a la obra.", icon: Wrench },
  { title: "Te acompañamos", description: "Entregamos y te orientamos.", icon: CircleCheck },
];

export const faq = [
  ["¿Qué servicios ofrecen?", "Soporte técnico, mantenimiento, desarrollo de software y consultoría tecnológica."],
  ["¿Puedo solicitar una cotización sin compromiso?", "Sí. Cuéntanos tu necesidad para evaluar el alcance y preparar una propuesta."],
  ["¿Crean software a medida?", "Sí. Desarrollamos soluciones adaptadas a tus procesos y objetivos."],
  ["¿Atienden portátiles y computadores de escritorio?", "Sí. Realizamos diagnóstico, mantenimiento, reparación y optimización."],
  ["¿Cómo solicito un servicio?", "Prepara tu consulta en Contacto y revisa allí los canales disponibles."],
  ["¿Trabajan con personas y empresas?", "Sí, con personas, emprendedores y empresas."],
];
