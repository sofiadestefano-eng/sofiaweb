# Sofía Destefano — Web (React + Vite)

Migración del sitio a React. Single-page, diseño fiel al HTML (Fraunces + paleta verde musgo/coral), contenido final y datos estructurados (JSON-LD) para visibilidad en buscadores de IA.

## Correr en local
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/ (lo que sube Vercel)
```

## Editar contenido
Todo el texto está en `src/data/siteData.js` (servicios, FAQs, testimonio, contacto). No hace falta tocar los componentes.

## Estructura
- `index.html` → metadatos SEO + Open Graph + JSON-LD (Person, ProfessionalService, FAQPage). **Esto es lo que leen las IAs.**
- `src/App.jsx` → la página.
- `src/index.css` → estilos (paleta en `:root`).
- `src/data/siteData.js` → contenido editable.
- `public/og-image.jpg` → imagen para compartir en redes.

## Pendientes marcados con TODO
- Dominio: reemplazar `https://sofiadestefano.com` en `index.html` (canonical, og:url, og:image, JSON-LD) por el dominio real.
- Email de contacto en `src/data/siteData.js` (`brand.email`).
- Formato/duración/precio reales de los 3 servicios (campos `meta` en `siteData.js`).
- Link de "Agendar llamada" (hoy es mailto; ideal Calendly u otro).

## Subir a tu repo (con Antigravity / GitHub)
1. Copiá estos archivos dentro de tu proyecto `sofia-coaching` (reemplazando lo viejo).
2. `git add . && git commit -m "Migración a React + SEO/JSON-LD" && git push`
3. Vercel deploya solo. (Si falla el build por peer-deps, el `.npmrc` con `legacy-peer-deps=true` ya lo resuelve.)
