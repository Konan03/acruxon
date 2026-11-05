import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Orbit } from "lucide-react";

export function BrandLogo() {
  return <Link className="brand" href="/#inicio" aria-label="Acruxon, inicio"><span><Orbit size={23} aria-hidden /></span> ACRUXON</Link>;
}

export function Action({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  const Element = href.startsWith("#") ? "a" : Link;
  return <Element className={secondary ? "button secondary" : "button"} href={href}>{children}<ArrowUpRight size={17} aria-hidden /></Element>;
}

export function SectionHeading({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return <header className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{children && <p>{children}</p>}</header>;
}
