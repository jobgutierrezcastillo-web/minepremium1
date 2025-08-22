"use client";
import { useMemo, useState } from "react";

export default function DashboardDemo() {
  const [q, setQ] = useState("");

  const precios = [
    { mineral: "Oro", unidad: "oz", precio: 2456, var: +1.2, fuente: "LBMA (demo)" },
    { mineral: "Plata", unidad: "oz", precio: 29.7, var: 0.0, fuente: "LBMA (demo)" },
    { mineral: "Cobre", unidad: "t", precio: 9100, var: +2.3, fuente: "LME (demo)" },
    { mineral: "Litio (espod.)", unidad: "t", precio: 11800, var: -0.8, fuente: "Spot Asia (demo)" },
  ];

  const licitaciones = [
    { titulo: "Servicios de exploración geológica", entidad: "SDA Sonora", pais: "MX", cierra: "2025-09-05", link: "#", requisitos: "Registro proveedor, experiencia 3 años" },
    { titulo: "Suministro de explosivos y accesorios", entidad: "Operadora del Centro", pais: "MX", cierra: "2025-09-18", link: "#", requisitos: "Permisos SEDENA, NOM-023" },
    { titulo: "Mantenimiento equipos de acarreo", entidad: "Mina Andina", pais: "CL", cierra: "2025-09-12", link: "#", requisitos: "Catálogo OEM, cobertura 24/7" },
  ];

  const preciosFiltrados = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return precios;
    return precios.filter(p =>
      [p.mineral, p.unidad, p.fuente].some(v => String(v).toLowerCase().includes(t))
    );
  }, [q]);

  const licitacionesFiltradas = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return licitaciones;
    return licitaciones.filter(l =>
      [l.titulo, l.entidad, l.pais, l.requisitos].some(v => String(v).toLowerCase().includes(t))
    );
  }, [q]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard demo</h2>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar: oro, Sonora, explosivos…"
          className="w-full md:w-80 rounded-2xl border px-4 py-2"
        />
      </div>

      {/* Tabla de precios */}
      <div className="rounded-2xl border bg-white overflow-hidden">
        <div className="px-5 py-4 border-b">
          <h3 className="font-semibold text-gray-800">Precios de referencia</h3>
          <p className="text-sm text-gray-500">*Datos ilustrativos — en la versión premium se muestran fuentes, series y notas.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-600">
                <th className="px-5 py-3">Mineral</th>
                <th className="px-5 py-3">Precio</th>
                <th className="px-5 py-3">Var. semanal</th>
                <th className="px-5 py-3">Fuente</th>
              </tr>
            </thead>
            <tbody>
              {preciosFiltrados.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="px-5 py-3 font-medium">{p.mineral}</td>
                  <td className="px-5 py-3">
                    {p.unidad === "t" ? `$${p.precio.toLocaleString()}/t` : `$${p.precio.toLocaleString()}/${p.unidad}`}
                  </td>
                  <td className={`px-5 py-3 ${p.var > 0 ? "text-green-600" : p.var < 0 ? "text-red-600" : "text-gray-600"}`}>
                    {p.var > 0 ? "+" : ""}{p.var}%
                  </td>
                  <td className="px-5 py-3 text-gray-600">{p.fuente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Licitaciones */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Licitaciones y oportunidades</h3>
          <span className="text-xs text-gray-500">Demostrativo</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {licitacionesFiltradas.map((l, i) => (
            <article key={i} className="rounded-2xl border bg-white p-4">
              <div className="text-xs uppercase text-gray-500">{l.pais}</div>
              <h4 className="mt-1 font-semibold text-gray-800">{l.titulo}</h4>
              <div className="text-sm text-gray-600 mt-1">{l.entidad}</div>
              <div className="text-sm mt-1">
                <span className="text-gray-500">Cierra:</span> <span className="font-medium">{l.cierra}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{l.requisitos}</p>
              <a
                href={l.link}
                className="mt-3 inline-flex items-center justify-center rounded-2xl border px-3 py-2 text-sm hover:bg-gray-50"
                target="_blank" rel="noopener noreferrer"
              >
                Ver bases
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
        * Para suscriptores Premium, el dashboard muestra <b>series históricas</b>, enlaces directos a <b>fuentes</b>, y licitaciones con <b>requisitos</b> y <b>contactos</b>.
      </div>
    </div>
  );
}
