export default function Gracias() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-3">¡Gracias por suscribirte!</h1>
      <p className="text-gray-700">
        Tu pago fue procesado correctamente. En unos minutos te enviaremos el acceso al área premium.
      </p>

      <div className="mt-6 space-y-4">
        <a
          href="https://t.me/tu_canal_privado" // 🔁 pon aquí tu canal privado real
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-black text-white px-5 py-3"
        >
          Ir al canal premium de Telegram
        </a>

        <p className="text-sm text-gray-500">
          Si tienes dudas, escríbenos por WhatsApp y te ayudamos con el acceso.
        </p>
      </div>
    </main>
  );
}
