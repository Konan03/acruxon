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

## Fotografías de referencia

Las cinco fotografías están guardadas en public/images como WebP (ancho máximo de 1400 px y calidad 82). Se muestran con next/image, tamaños adaptativos, dimensiones reservadas y carga diferida salvo la imagen principal. El mapa de recursos y textos alternativos está en src/data/images.ts.

Son imágenes ilustrativas de banco de imágenes. No representan al equipo, instalaciones ni trabajos reales de Acruxon. Los proyectos siguen identificados como ejemplos de presentación.

| Archivo | Autor | Fuente |
| --- | --- | --- |
| soporte.webp | IT services EU | https://www.pexels.com/photo/hand-with-screwdriver-fixing-motherboard-7639373/ |
| desarrollo.webp | Mikhail Nilov | https://www.pexels.com/photo/men-working-on-a-computer-7988742/ |
| colaboracion.webp | Mizuno K | https://www.pexels.com/photo/man-and-woman-talking-about-programming-12899168/ |
| codigo.webp | luis gomes | https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/ |
| diagnostico.webp | Bulat | https://www.pexels.com/photo/technician-repairing-laptop-in-workshop-33531806/ |

Licencia Pexels, consultada el 7 de noviembre de 2026. Permite el uso comercial y la modificación. Condiciones en https://www.pexels.com/license/ y confirmación en https://help.pexels.com/hc/en-us/articles/360042295214-Can-I-use-the-photos-and-videos-for-a-commercial-project.

Para reemplazarlas, añade la fotografía autorizada a public/images, cambia su importación en src/data/images.ts y actualiza el texto alternativo. Los servicios completos permanecen en los desplegables accesibles de cada tarjeta.