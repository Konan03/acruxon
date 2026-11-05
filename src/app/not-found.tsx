import { Action, BrandLogo } from "@/components/ui";

export default function NotFound() {
  return <main className="wrap section"><BrandLogo /><p className="eyebrow mt-10">Error 404</p><h1>Página no encontrada</h1><p className="my-6">La dirección que abriste no está disponible.</p><Action href="/">Volver al inicio</Action></main>;
}
