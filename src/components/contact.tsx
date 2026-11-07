import { Mail, MapPin, MessageCircle } from "lucide-react";
import { contact, site } from "@/config/site";
import { ContactForm } from "./contact-form";
import { BrandLogo, SectionHeading } from "./ui";

export function Contact() {
  const channels = [
    { name: "WhatsApp", icon: MessageCircle, value: contact.whatsapp, href: contact.whatsapp && `https://wa.me/${contact.whatsapp}` },
    { name: "Correo electrónico", icon: Mail, value: contact.email, href: contact.email && `mailto:${contact.email}` },
    { name: "Ubicación o cobertura", icon: MapPin, value: contact.location, href: null },
  ];
  return <section className="section band" id="contacto"><div className="wrap contact-grid">
    <div>
      <SectionHeading label="07 / Contacto" title="Hablemos de tu idea">Cuéntanos qué necesitas. Busquemos juntos la solución.</SectionHeading>
      <ul className="channels">{channels.map(({ name, icon: Icon, value, href }) => <li key={name}>
        <span className="icon-tile"><Icon size={21} aria-hidden /></span><div><strong>{name}</strong>{href ? <a href={href}>{value}</a> : <p>{value ?? "Pendiente de configuración"}</p>}</div>
      </li>)}</ul>
    </div>
    <ContactForm email={contact.email} />
  </div></section>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap">
    <div className="footer-grid">
      <div><BrandLogo /><p>{site.description}</p></div>
      <div><h2>Explorar</h2>{site.navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
      <div><h2>Servicios</h2><a href="#soporte">Soporte técnico</a><a href="#software">Desarrollo de software</a></div>
      <div><h2>Contacto</h2><a href="#contacto">Solicitar cotización</a>{contact.social.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}</div>
    </div>
    <div className="footer-end"><p>© {new Date().getFullYear()} Acruxon. Todos los derechos reservados.</p><a href="#inicio">Volver al inicio ↑</a></div>
  </div></footer>;
}
