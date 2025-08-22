import Image from "next/image";
import Link from "next/link";
import DashboardDemo from "./_components/DashboardDemo";

const MP_LINK = "https://link.mercadopago.com.mx/minepremium";

const Stat = ({ title, desc }) => (
  <div className="rounded-2xl bg-white/80 border border-gray-200 p-5 shadow-sm">
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{desc}</p>
  </div>
);

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" width={44} height={44} alt="MINERO Premium" />
              <span className="text-2xl font-bold tracking-wide">MINERO Premium</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Inteligencia accionable para la <span className="text-gold-500">industria minera</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Ahorra horas de lectura. Recibe análisis claros de precios, licitaciones y riesgos
              en un boletín semanal y un dashboard simple.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={MP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-gold-500 text-black font-semibold px-5 py-3 hover:brightness-95 transition"
              >
                Suscribirme ahora
              </Link>
              <a
                href="#planes"
                className="inline-flex items-center justify-center rounded-2xl border border-white/40 text-white px-5 py-3 hover:bg-white/10 transition"
              >
                Ver planes
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <div>✓ Cancelas cuando quieras</div>
              <div>✓ Datos privados</div>
              <div>✓ Enfoque ROI</div>
            </div>
          </div>
          <div className="rounded-2xl bg-white text-gray-800 p-6 shadow-xl">
            <h3 className="font-semibold mb-3">Precios semanales (demo)</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-lg bg-gray-50 border">
                <div className="text-xs text-gray-500">Oro</div>
                <div className="text-2xl font-bold">$2,456/oz</div>
                <div className="text-green-600 text-xs mt-1">+1.2%</div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 border">
                <div className="text-xs text-gray-500">Cobre</div>
                <div className="text-2xl font-bold">$9,100/t</div>
                <div className="text-green-600 text-xs mt-1">+2.3%</div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 border">
                <div className="text-xs text-gray-500">Plata</div>
                <div className="text-2xl font-bold">$29.7/oz</div>
                <div className="text-gray-600 text-xs mt-1">Estable</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">*Datos ilustrativos. La versión premium muestra fuentes y series completas.</p>
          </div>
        </div>
      </section>

      {/* RESUMEN EJECUTIVO */}
      <section id="resumen" className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Resumen Ejecutivo</h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              MINERO Premium simplifica la sobrecarga de información en la industria minera.
              En lugar de navegar entre cientos de reportes, te ofrecemos un boletín semanal con
              precios, licitaciones y riesgos que importan para tu operación y tus inversiones.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Precios de metales con contexto</li>
              <li>✔ Oportunidades de negocio en LATAM</li>
              <li>✔ Cambios regulatorios y de seguridad</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow">
            <h3 className="font-semibold text-gray-800 mb-3">Lo que obtienes</h3>
            <p className="text-sm text-gray-600">
              Un newsletter accionable y un dashboard simple que te ahorran horas de análisis.
            </p>
          </div>
        </div>
      </section>

      {/* NOTICIAS CLAVE */}
      <section id="noticias" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Noticias recientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="rounded-2xl bg-white border p-5 shadow-sm">
              <h4 className="font-semibold text-gray-800">Alza en precios del cobre</h4>
              <p className="text-sm text-gray-600 mt-2">
                La demanda en Asia impulsa un aumento del 2.3% en el cobre. Implicaciones
                directas para proveedores de maquinaria.
              </p>
            </article>
            <article className="rounded-2xl bg-white border p-5 shadow-sm">
              <h4 className="font-semibold text-gray-800">Nuevas licitaciones en México</h4>
              <p className="text-sm text-gray-600 mt-2">
                El estado de Sonora anuncia proyectos de exploración de litio. Oportunidad
                para contratistas especializados.
              </p>
            </article>
            <article className="rounded-2xl bg-white border p-5 shadow-sm">
              <h4 className="font-semibold text-gray-800">Actualización en normativa ESG</h4>
              <p className="text-sm text-gray-600 mt-2">
                Nuevos requisitos de reporte en sostenibilidad afectan a operaciones medianas
                y grandes en LATAM.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DASHBOARD DEMO */}
      <section id="dashboard" className="py-12 bg-white">
        <DashboardDemo />
      </section>

      {/* VALUE */}
      <section id="valor" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6">
          <Stat title="Noticias con contexto" desc="No solo titulares: explicamos el impacto operativo y regulatorio para proveedores y contratistas." />
          <Stat title="Mercados claros" desc="Oro, plata, cobre, litio y zinc con comentarios accionables, no jerga." />
          <Stat title="Licitaciones y contactos" desc="Oportunidades activas (MX/LATAM), clusters y eventos para cerrar negocios." />
          <Stat title="Riesgo y compliance" desc="Alertas de seguridad, cambios normativos e implicaciones ESG para tus proyectos." />
        </div>
      </section>

      {/* PRICING */}
      <section id="planes" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Planes de suscripción</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Básico", price: "$10 / mes", desc: "Boletín semanal (email). Resumen de precios y 3 noticias clave.", link: MP_LINK },
              { name: "Premium", price: "$25 / mes", desc: "Todo lo del Básico + canal privado de Telegram, alertas y licitaciones.", link: MP_LINK, featured: true },
              { name: "Corporativo", price: "A medida", desc: "Reportes personalizados por estado/mineral. Capacitación y soporte prioritario.", link: MP_LINK }
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl bg-white border ${p.featured ? "border-gold-500 ring-2 ring-gold-500" : "border-gray-200"} p-6 shadow-sm`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">{p.name}</h3>
                  {p.featured && <span className="text-xs bg-gold-500/90 text-black px-2 py-1 rounded-full">Recomendado</span>}
                </div>
                <div className="text-2xl font-extrabold mt-2">{p.price}</div>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                <Link
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-navy-900 text-white font-semibold px-5 py-3 hover:bg-navy-800 transition"
                >
                  Suscribirme
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Hablemos</h3>
            <p className="text-gray-600 mb-6">¿Quieres una demo con tus datos o un reporte corporativo a medida? Escríbenos.</p>
            <form className="grid gap-3">
              <input className="rounded-2xl border px-4 py-3" placeholder="Nombre" />
              <input className="rounded-2xl border px-4 py-3" type="email" placeholder="Correo" />
              <textarea className="rounded-2xl border px-4 py-3 min-h-[120px]" placeholder="Cuéntanos qué necesitas" />
              <button type="button" className="rounded-2xl bg-gray-900 text-white px-5 py-3 hover:bg-gray-800 transition">Enviar</button>
            </form>
          </div>
          <div className="rounded-2xl border p-6">
            <h4 className="font-semibold text-gray-800">Canal Premium en Telegram</h4>
            <p className="text-sm text-gray-600 mt-2">El contenido premium también está disponible en nuestro canal privado. Acceso inmediato para miembros.</p>
            <a href="#" className="mt-4 inline-flex items-center justify-center rounded-2xl border px-4 py-2 hover:bg-gray-50">Unirme al canal</a>
            <div className="text-xs text-gray-500 mt-2">*El acceso se habilita automáticamente tras confirmar tu suscripción.</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-navy-800 text-white/80">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" width={28} height={28} alt="MINERO Premium" />
            <span className="text-sm">© {new Date().getFullYear()} MINERO Premium — Inteligencia para la minería de LATAM</span>
          </div>
          <div className="flex gap-4 text-sm">
            <a className="hover:text-white" href="#">Términos</a>
            <a className="hover:text-white" href="#">Privacidad</a>
            <a className="hover:text-white" href="#">Soporte</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
