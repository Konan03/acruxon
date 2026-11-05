"use client";

import { useState, type FormEvent } from "react";

export function ContactForm({ email }: { email: string | null }) {
  const [status, setStatus] = useState("");

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) {
      setStatus("El envío está pendiente de configuración. Tus datos siguen en el formulario.");
      return;
    }
    const data = new FormData(event.currentTarget);
    const subject = `Consulta Acruxon: ${data.get("service")}`;
    const body = [
      `Nombre: ${data.get("name")}`, `Correo: ${data.get("email")}`,
      `Teléfono: ${data.get("phone") || "No indicado"}`, "", String(data.get("message")),
    ].join("\r\n");
    setStatus("Revisa el borrador en tu aplicación de correo para enviarlo.");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={prepare} aria-describedby="contact-help">
    <div className="form-grid">
      <label>Nombre completo<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>Correo electrónico<input type="email" name="email" autoComplete="email" required maxLength={160} /></label>
      <label>Teléfono <span>(opcional)</span><input type="tel" name="phone" autoComplete="tel" maxLength={35} /></label>
      <label>Tipo de servicio<select name="service" defaultValue="" required>
        <option value="" disabled>Selecciona un servicio</option>
        {["Soporte técnico y mantenimiento", "Desarrollo de software", "Consultoría tecnológica", "Otro"].map(option => <option key={option}>{option}</option>)}
      </select></label>
    </div>
    <label>Mensaje<textarea name="message" rows={5} required maxLength={1200} /></label>
    <p className="form-note" id="contact-help">{email ? "Se abrirá un borrador en tu aplicación de correo." : "El envío está pendiente de configuración. Puedes conservar el texto mientras esta página siga abierta."}</p>
    <button className="button" type="submit">{email ? "Preparar correo" : "Revisar solicitud"}</button>
    <p className="form-note" role="status">{status}</p>
  </form>;
}
