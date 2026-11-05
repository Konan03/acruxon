# Acruxon

Sitio corporativo en español para presentar las líneas de soporte técnico y desarrollo de software de Acruxon. Usa Next.js (App Router), React, TypeScript, Tailwind CSS, Lucide y la fuente Inter optimizada con next/font.

## Ejecución local

Requiere Node.js 20.9 o superior y npm. Desde PowerShell:

```powershell
cd C:\dev\acruxon
npm ci
npm run dev
```

Abre http://localhost:3000. Para revisar el código y compilar:

```powershell
npm run lint
npm run typecheck
npm run build
npm start
```

## Contenido y configuración

- `src/app` contiene la página principal, metadata, estilos y vista 404.
- `src/components` contiene las secciones, la navegación, el formulario y la identidad visual.
- `src/data/content.ts` contiene servicios, proyectos de ejemplo, preguntas y respuestas, ventajas y pasos del proceso.
- `src/config/site.ts` contiene datos corporativos, navegación y contacto. Configura `email` con una dirección real y `whatsapp` con el código de país y número, solo dígitos. Agrega cobertura y redes únicamente cuando estén confirmadas. El correo se prepara con mailto y requiere una aplicación de correo en el dispositivo.
- Para reemplazar el identificador provisional, agrega el recurso oficial a `public` y actualiza `BrandLogo` en `src/components/ui.tsx`. Actualiza el icono de metadata en `src/app/layout.tsx`.
- Para incorporar proyectos reales, sustituye las entradas de `projects` y sus ilustraciones en el componente `Projects`. Retira la etiqueta de ejemplo únicamente en entradas verificadas.

## Vercel

Sube el código y el archivo de bloqueo a un repositorio Git. En Vercel, importa el repositorio y selecciona la raíz que contiene package.json. Conserva el preajuste Next.js, revisa la vista previa y configura el dominio cuando corresponda. El formulario no requiere variables secretas ni backend.
