import { Activity, ArrowDown, CodeXml, MonitorCog, Orbit, UsersRound } from "lucide-react";
import { Action } from "./ui";

export function Hero() {
  return <section className="hero" id="inicio">
    <div className="wrap hero-grid">
      <div>
        <p className="eyebrow hero-label"><span /> Soluciones tecnológicas integrales</p>
        <h1>Tecnología que <em>impulsa tus ideas.</em></h1>
        <p className="hero-copy">En Acruxon combinamos soporte técnico especializado y desarrollo de software para ofrecer soluciones tecnológicas adaptadas a tus necesidades.</p>
        <div className="actions"><Action href="#servicios">Explorar servicios</Action><Action href="#contacto" secondary>Solicitar cotización</Action></div>
        <p className="audience"><UsersRound size={18} aria-hidden /> Soluciones para personas, emprendedores y empresas.</p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-label"><Activity size={16} /> ACRUXON / TECNOLOGÍA INTEGRAL</div>
        <svg className="circuit" viewBox="0 0 480 360" preserveAspectRatio="none">
          <path d="M0 104H103L176 177H240M480 257H375L306 188H240M240 0V360M0 180H480" />
          <circle cx="240" cy="180" r="117" /><circle cx="240" cy="180" r="86" /><circle cx="240" cy="180" r="148" strokeDasharray="3 8" />
        </svg>
        <div className="art-core"><Orbit size={58} strokeWidth={1.25} /></div>
        <div className="art-card art-support"><span><MonitorCog size={23} /></span><div><small>01 / EQUIPOS</small><strong>Soporte técnico</strong></div></div>
        <div className="art-card art-software"><span><CodeXml size={23} /></span><div><small>02 / SISTEMAS</small><strong>Desarrollo de software</strong></div></div>
        <div className="art-caption"><span>01 — 02</span><span>UN MISMO EQUIPO</span></div>
      </div>
    </div>
    <div className="wrap hero-end"><a href="#servicios"><ArrowDown size={15} aria-hidden /> Descubre lo que hacemos</a></div>
  </section>;
}
