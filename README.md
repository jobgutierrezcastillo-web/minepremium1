# MINERO Premium — Sitio Next.js (listo para Vercel)

Sitio de suscripción para boletín minero con **Checkout Pro de Mercado Pago** (link directo).

## 🚀 Despliegue rápido en Vercel
1. Crea un repositorio en GitHub (ej. `minepremium`).
2. Sube todos los archivos de este proyecto.
3. En Vercel → **Add New Project** → selecciona tu repo → Deploy.
4. ¡Listo! Tu web quedará en `https://<tu-proyecto>.vercel.app`.

## 🔗 Pago con Mercado Pago
- El botón de suscripción usa el link directo:  
  `https://link.mercadopago.com.mx/minepremium`
- Si luego quieres **links distintos por plan**, edita `app/page.js` y cambia la constante `MP_LINK` o cada `link` de los planes.

## 🛠️ Desarrollo local
```bash
npm install
npm run dev
```
Luego visita `http://localhost:3000`

## 📁 Estructura
- `app/layout.js` — Layout base
- `app/page.js` — Página principal con planes y botón de pago
- `app/globals.css` — Tailwind CSS
- `public/logo.svg` — Logo ejecutivo

## ✅ Notas
- Este proyecto usa **Next.js (app router)** y **TailwindCSS**.
- No requiere backend ni llaves. Ideal para validar.
- Puedes conectar tu dominio en Vercel → *Settings → Domains*.
