import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About, Features, Projects, Process, FAQ } from "@/components/company";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Navbar />
    <main id="contenido" tabIndex={-1}>
      <Hero /><Services /><About /><Features /><Projects /><Process /><FAQ /><Contact />
    </main>
    <Footer />
  </>;
}
