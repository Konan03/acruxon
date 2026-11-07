import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import { faq, features, process, projects } from "@/data/content";
import { images } from "@/data/images";
import { Action, SectionHeading } from "./ui";

export function About() {
  return (
    <section className="section" id="nosotros">
      <div className="wrap about-grid">
        <figure className="about-photo">
          <Image src={images.colaboracion.src} alt={images.colaboracion.alt} fill sizes="(max-width: 670px) 100vw, 50vw" placeholder="blur" />
          <figcaption>Fotografía de referencia</figcaption>
        </figure>
        <div>
          <SectionHeading label="02 / Conoce Acruxon" title="La tecnología, más cerca de ti.">
            Resolvemos necesidades técnicas y creamos herramientas digitales para facilitar tu día a día.
          </SectionHeading>
          <ul className="value-list">{["Compromiso", "Innovación", "Calidad", "Confianza"].map(value => <li key={value}><Check size={16} aria-hidden />{value}</li>)}</ul>
          <Action href="#contacto" secondary>Conversemos</Action>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="section band" id="ventajas">
      <div className="wrap">
        <SectionHeading label="03 / Lo que nos guía" title="¿Por qué Acruxon?" />
        <div className="grid-four">
          {features.map(({ title, icon: Icon, description }) => (
            <article className="feature" key={title}>
              <span className="icon-tile"><Icon size={25} aria-hidden /></span>
              <h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="wrap">
        <SectionHeading label="04 / Posibilidades" title="Lo que podemos hacer">
          Ejemplos de presentación para visualizar tu próxima solución.
        </SectionHeading>
        <div className="grid-three">
          {projects.map(({ title, category, image, description }) => (
            <article className="card project" key={title}>
              <div className="project-photo">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 670px) 100vw, 33vw" placeholder="blur" />
                <span className="demo">Ejemplo de presentación</span>
              </div>
              <div className="project-copy"><p className="eyebrow">{category}</p><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section band" id="proceso">
      <div className="wrap">
        <SectionHeading label="05 / Paso a paso" title="Así lo hacemos" />
        <ol className="grid-four process">
          {process.map(({ title, description, icon: Icon }, i) => (
            <li key={title}>
              <div className="process-mark"><Icon size={26} aria-hidden /><span>0{i + 1}</span></div>
              <h3>{title}</h3><p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="section" id="preguntas">
      <div className="wrap faq-grid">
        <SectionHeading label="06 / Resolvemos tus dudas" title="Preguntas frecuentes" />
        <div className="faq-list">
          {faq.map(([question, answer]) => <details key={question} name="faq"><summary>{question}<ChevronDown size={20} aria-hidden /></summary><p>{answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}
