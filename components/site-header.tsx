"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "/", label: "Home" },
    { href: "/especialidad?id=ortopedia", label: "Especialidad" },
    { href: "/nuestro-equipo", label: "Nuestro equipo" },
    { href: "/sobre-nosotros", label: "Nosotros" },
    { href: "/contactanos", label: "Contáctanos", highlight: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex justify-between items-center px-6 py-3 h-16 max-w-6xl mx-auto">
        {/* Logo + título */}
        <Link
          href="/"
          className="flex items-center space-x-3 hover:opacity-90 transition"
        >
          <Image
            src="/lam.png"
            alt="Centro LAM"
            width={48}
            height={48}
            className="rounded-full object-contain"
          />
          <span className="font-semibold text-2xl md:text-3xl tracking-tight text-gray-800 font-['Poppins']">
            CENTRO <span className="text-lam">LAM</span>
          </span>
        </Link>

        {/* Menú de escritorio */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          {links.map(({ href, label, highlight }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-emerald-600 ${
                highlight ? "text-emerald-600 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-gray-900 transition"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`fixed inset-x-0 top-0 w-full h-[60vh] bg-gray-900 transition-transform duration-300 z-40 shadow-xl md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header del menú */}
        <div className="h-16 flex items-center justify-between px-6 bg-gray-800 border-b border-gray-700">
          <span className="text-xl font-bold text-white uppercase">Menú</span>
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-emerald-400"
          >
            <X size={32} />
          </button>
        </div>

        {/* Enlaces móviles */}
        <nav className="flex flex-col text-lg font-semibold w-full h-[calc(100%-4rem)] overflow-y-auto">
          {links.map(({ href, label, highlight }) => (
            <Link
              key={href}
              href={href}
              onClick={toggleMenu}
              className={`flex justify-between items-center w-full py-4 px-6 border-b border-gray-700 uppercase transition ${
                highlight
                  ? "text-emerald-400 hover:bg-gray-800"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Fondo oscuro cuando se abre el menú (solo móvil) */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 md:hidden"
        ></div>
      )}
    </header>
  );
}
