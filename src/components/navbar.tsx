"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { Action, BrandLogo } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <header className={scrolled ? "navbar elevated" : "navbar"} onKeyDown={event => {
    if (event.key === "Escape" && open) { setOpen(false); trigger.current?.focus(); }
  }}>
    <div className="wrap nav-inner">
      <BrandLogo />
      <button ref={trigger} className="menu-toggle" type="button" aria-expanded={open} aria-controls="navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden /> : <Menu aria-hidden />}
      </button>
      <nav id="navigation" aria-label="Navegación principal" className={open ? "nav-links open" : "nav-links"} onClick={event => {
        if ((event.target as HTMLElement).closest("a")) setOpen(false);
      }}>
        {site.navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        <Action href="#contacto">Solicitar cotización</Action>
      </nav>
    </div>
  </header>;
}
