type Contact = { email: string | null; whatsapp: string | null; location: string | null; social: {label: string; href: string}[] };

export const contact: Contact = { email: null, whatsapp: null, location: null, social: [] };

export const site = {
  name: "Acruxon",
  description: "Soporte técnico especializado y desarrollo de software para personas, emprendedores y empresas.",
  navigation: [
    ["Inicio", "inicio"], ["Servicios", "servicios"], ["Nosotros", "nosotros"],
    ["Proyectos", "proyectos"], ["Contacto", "contacto"],
  ],
};
