import Image from "next/image";
import { ArrowDown, CodeXml, MonitorCog } from "lucide-react";
import { images } from "@/data/images";
import { Action } from "./ui";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div className="hero-intro">
          <p className="eyebrow hero-label"><span /> Soluciones tecnológicas integrales</p>
          <h1>Tecnología que <em>impulsa tus ideas.</em></h1>
          <p className="hero-copy">Tus equipos en marcha.<br />Tu próximo proyecto digital, en camino.</p>
          <div className="actions">
            <Action href="#servicios">Explorar servicios</Action>
            <Action href="#contacto" secondary>Solicitar cotización</Action>
          </div>
          <p className="audience">Para personas, emprendedores y empresas.</p>
        </div>
        <div className="hero-photos">
          <figure className="hero-photo hero-photo-main">
            <Image src={images.desarrollo.src} alt={images.desarrollo.alt} fill sizes="(max-width: 670px) 90vw, 45vw" preload placeholder="blur" />
            <figcaption><CodeXml size={19} aria-hidden /> Desarrollo de software</figcaption>
          </figure>
          <figure className="hero-photo hero-photo-inset">
            <Image src={images.soporte.src} alt={images.soporte.alt} fill sizes="(max-width: 670px) 48vw, 250px" placeholder="blur" />
            <figcaption><MonitorCog size={17} aria-hidden /> Soporte técnico</figcaption>
          </figure>
          <p className="photo-reference">Fotografías ilustrativas</p>
        </div>
      </div>
      <div className="wrap hero-end">
        <a href="#servicios"><ArrowDown size={15} aria-hidden /> Dos especialidades. Una solución para ti.</a>
      </div>
    </section>
  );
}
