import { Check, ChevronRight } from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "./ui";

export function Services() {
  return <section className="section band" id="servicios"><div className="wrap">
    <SectionHeading label="01 / Qué hacemos" title="Soluciones tecnológicas para cada necesidad">Desde el mantenimiento de tus equipos hasta el desarrollo de herramientas digitales, te acompañamos con soluciones prácticas y eficientes.</SectionHeading>
    <div className="grid-two">
      {services.map(({ id, title, icon: Icon, description, highlights }, index) => <article className="card service-card" key={id}>
        <div className="service-top"><span className="icon-tile"><Icon size={28} aria-hidden /></span><span className="index">0{index + 1}</span></div>
        <h3>{title}</h3><p>{description}</p>
        <ul>{highlights.map(item => <li key={item}><Check size={16} aria-hidden />{item}</li>)}</ul>
        <a className="text-link" href={`#${id}`} aria-label={`Conocer servicios de ${title.toLowerCase()}`}>Conocer servicios <ChevronRight size={17} aria-hidden /></a>
      </article>)}
    </div>
    {services.map(({ id, title, icon: Icon, details }) => <section className="service-details" id={id} key={id}>
      <h3>{title} en detalle</h3>
      <div className="grid-three">{details.map(([name, description]) => <article className="card detail" key={name}><Icon size={21} aria-hidden /><h4>{name}</h4><p>{description}</p></article>)}</div>
    </section>)}
  </div></section>;
}
