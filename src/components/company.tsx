import { ChevronDown, Orbit } from "lucide-react";
import { faq, features, process, projects } from "@/data/content";
import { SectionHeading } from "./ui";

export function About() {
  return <section className="section" id="nosotros"><div className="wrap about-grid">
    <SectionHeading label="02 / Nuestra forma de ver la tecnología" title="Conoce Acruxon">En Acruxon creemos que la tecnología debe facilitar la vida de las personas y contribuir al crecimiento de los negocios. Por eso reunimos conocimientos en soporte técnico y desarrollo de software para ofrecer soluciones prácticas, confiables y adaptadas a cada necesidad.</SectionHeading>
    <div className="values"><Orbit size={104} strokeWidth={1} aria-hidden /><div>{["Compromiso", "Innovación", "Calidad", "Confianza"].map((value, i) => <p key={value}><span>0{i + 1}</span>{value}</p>)}</div></div>
  </div></section>;
}

export function Features() {
  return <section className="section band" id="ventajas"><div className="wrap">
    <SectionHeading label="03 / Lo que nos guía" title="¿Por qué elegir Acruxon?" />
    <div className="grid-four">{features.map(({ title, icon: Icon, description }) => <article className="card detail" key={title}><span className="icon-tile"><Icon size={22} aria-hidden /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
  </div></section>;
}

export function Projects() {
  return <section className="section" id="proyectos"><div className="wrap">
    <SectionHeading label="04 / Ideas en práctica" title="Nuestros proyectos">Conoce algunos ejemplos de las soluciones tecnológicas que podemos desarrollar.</SectionHeading>
    <div className="grid-three">{projects.map(({ title, category, icon: Icon, description }, i) => <article className="card project" key={title}>
      <div className={`project-art project-art-${i}`} aria-hidden="true"><span>CONCEPTO / 0{i + 1}</span><Icon size={65} strokeWidth={1.2} /></div>
      <div className="project-copy"><p className="eyebrow">{category}</p><h3>{title}</h3><p>{description}</p><span className="demo">Ejemplo de presentación</span></div>
    </article>)}</div>
  </div></section>;
}

export function Process() {
  return <section className="section band" id="proceso"><div className="wrap">
    <SectionHeading label="05 / De la idea a la entrega" title="Así trabajamos" />
    <ol className="grid-four process">{process.map(([title, description], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
  </div></section>;
}

export function FAQ() {
  return <section className="section" id="preguntas"><div className="wrap faq-grid">
    <SectionHeading label="06 / Antes de empezar" title="Preguntas frecuentes" />
    <div className="faq-list">{faq.map(([question, answer]) => <details key={question} name="faq"><summary>{question}<ChevronDown size={20} aria-hidden /></summary><p>{answer}</p></details>)}</div>
  </div></section>;
}
