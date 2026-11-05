import { CodeXml, MonitorCog, ShieldCheck, Layers3, Handshake, Headset, LayoutDashboard, PanelsTopLeft, Gauge } from "lucide-react";

export const services = [
  {
    id: "soporte", title: "Soporte técnico", icon: MonitorCog,
    description: "Mantenemos tus equipos en óptimas condiciones mediante diagnóstico, mantenimiento, reparación y optimización.",
    highlights: ["Diagnóstico y reparación", "Mantenimiento preventivo y correctivo", "Optimización de equipos", "Instalación y configuración de software"],
    details: [
      ["Diagnóstico y reparación", "Evaluamos fallas y planteamos soluciones para portátiles y computadores de escritorio."],
      ["Mantenimiento y rendimiento", "Realizamos mantenimiento preventivo y correctivo, optimización y actualización de componentes."],
      ["Configuración y asesoría", "Instalamos y configuramos software y te orientamos sobre el uso y cuidado de tus equipos."],
    ],
  },
  {
    id: "software", title: "Desarrollo de software", icon: CodeXml,
    description: "Transformamos ideas y necesidades empresariales en soluciones digitales modernas, escalables y personalizadas.",
    highlights: ["Desarrollo web", "Software a medida", "Aplicaciones empresariales", "Integración de sistemas y APIs"],
    details: [
      ["Sitios y aplicaciones web", "Diseñamos páginas responsivas, aplicaciones empresariales y sistemas de información a medida."],
      ["APIs y automatización", "Integramos APIs REST y bases de datos para conectar herramientas y simplificar procesos."],
      ["Evolución y consultoría", "Te orientamos sobre decisiones técnicas y damos mantenimiento y actualización a aplicaciones."],
    ],
  },
];

export const features = [
  { title: "Atención personalizada", icon: Handshake, description: "Analizamos cada necesidad para ofrecer soluciones adecuadas a cada cliente." },
  { title: "Soluciones integrales", icon: Layers3, description: "Combinamos soporte técnico y desarrollo de software en una misma empresa." },
  { title: "Enfoque en calidad", icon: ShieldCheck, description: "Buscamos implementar soluciones confiables, eficientes y fáciles de mantener." },
  { title: "Acompañamiento tecnológico", icon: Headset, description: "Orientamos a nuestros clientes durante el proceso de implementación de sus soluciones." },
];

export const projects = [
  { title: "Sistema de gestión empresarial", category: "Desarrollo de software", icon: LayoutDashboard, description: "Aplicación web para administrar procesos, usuarios e información empresarial." },
  { title: "Sitio web corporativo", category: "Desarrollo web", icon: PanelsTopLeft, description: "Plataforma web moderna y responsiva para presentar servicios y facilitar el contacto con clientes." },
  { title: "Optimización de equipos", category: "Soporte técnico", icon: Gauge, description: "Ejemplo de servicio de diagnóstico, mantenimiento y optimización de equipos de cómputo." },
];

export const process = [
  ["Cuéntanos tu necesidad", "Recibimos tu solicitud y conocemos el problema o proyecto."],
  ["Analizamos la solución", "Evaluamos las alternativas y definimos una propuesta."],
  ["Implementamos", "Desarrollamos o ejecutamos el servicio acordado."],
  ["Te acompañamos", "Realizamos la entrega y brindamos orientación sobre la solución."],
];

export const faq = [
  ["¿Qué servicios ofrece Acruxon?", "Ofrecemos soporte técnico y mantenimiento de equipos, desarrollo de software y consultoría tecnológica."],
  ["¿Puedo solicitar una cotización sin compromiso?", "Sí. Cuéntanos qué necesitas para que podamos evaluar el alcance y preparar una propuesta."],
  ["¿Desarrollan software personalizado?", "Sí. El alcance se define según tus objetivos, procesos y necesidades de integración."],
  ["¿Realizan mantenimiento de computadores portátiles y de escritorio?", "Sí. Atendemos equipos portátiles y de escritorio para diagnóstico, mantenimiento y optimización."],
  ["¿Cómo puedo solicitar un servicio?", "Puedes preparar tu consulta en la sección de contacto. Los canales disponibles se indican allí."],
  ["¿Trabajan con personas y empresas?", "Sí. Las soluciones están dirigidas a personas, emprendedores y empresas."],
];
