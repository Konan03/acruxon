import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "./ui";

export function Services() {
  return (
    <section className="section band" id="servicios">
      <div className="wrap">
        <SectionHeading label="01 / Qué hacemos" title="Equipos que funcionan. Ideas que avanzan." />
        <div className="grid-two">
          {services.map(({ id, title, icon: Icon, image, description, highlights, details }, index) => (
            <article className="card service-card" key={id}>
              <div className="service-photo">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 670px) 100vw, 50vw" placeholder="blur" />
                <span className="photo-index">0{index + 1}</span>
              </div>
              <div className="service-body">
                <div className="service-title"><span className="icon-tile"><Icon size={23} aria-hidden /></span><h3>{title}</h3></div>
                <p>{description}</p>
                <ul>{highlights.map(item => <li key={item}><Check size={15} aria-hidden />{item}</li>)}</ul>
                <details className="service-details" id={id}>
                  <summary>Ver todos los servicios<ChevronDown size={18} aria-hidden /></summary>
                  <dl>
                    {details.map(([name, description]) => <div key={name}><dt>{name}</dt><dd>{description}</dd></div>)}
                  </dl>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
