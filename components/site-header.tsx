"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      
      {/* BARRA PRINCIPAL (Logo Centrado, Menú Izquierda) */}
      <div className="relative flex justify-center items-center px-6 py-3 h-16">
        
        {/* Botón menú hamburguesa (POSICIONADO A LA IZQUIERDA) */}
        <button
          onClick={toggleMenu}
          className="absolute left-6 text-gray-700 hover:text-gray-900 transition"
          aria-label="Abrir menú"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo + Nombre (CENTRADOS) */}
        <Link
          href="/"
          className="flex items-center justify-center space-x-2"
        >
          <Image
            src="/lam.png"
            alt="CENTRO LAM"
            width={42}
            height={42}
            className="rounded-full object-contain"
          />
          <span className="text-xl font-extrabold tracking-wide text-gray-800 leading-none md:text-2xl">
            CENTRO LAM
          </span>
        </Link>
      </div>

      {/* 🚨 MENÚ DESPLEGABLE (Vertical de Altura Limitada y Ruta Actualizada) 🚨 */}
      <div className={`fixed inset-x-0 top-0 w-full h-[60vh] bg-gray-900 transition-transform duration-300 z-40 shadow-xl ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          
          {/* Fila de Header para el Menú (Cierre y Título) */}
          <div className="h-16 flex items-center justify-between px-6 bg-gray-800 border-b border-gray-700">
              <span className="text-xl font-bold text-white uppercase">MENÚ</span>
              {/* Botón de cierre */}
              <button onClick={toggleMenu} className="p-2 text-white hover:text-blue-400">
                  <X size={32} />
              </button>
          </div>
          
            <nav className="flex flex-col text-xl font-semibold w-full h-[calc(100%-4rem)] overflow-y-auto"> {/* h-16 = 4rem */}
              
              {/* ENLACES DE NAVEGACIÓN (Rutas Ocultas + Nueva Ruta de Contacto) */}
              <Link href="/" onClick={toggleMenu} className="flex justify-between items-center w-full py-4 px-6 text-gray-300 hover:bg-gray-700 transition border-b border-gray-700 uppercase">HOME <ChevronRight size={20} className="text-blue-400" /></Link>
              <Link href="/especialidad" onClick={toggleMenu} className="flex justify-between items-center w-full py-4 px-6 text-gray-300 hover:bg-gray-700 transition border-b border-gray-700 uppercase">ESPECIALIDAD <ChevronRight size={20} className="text-blue-400" /></Link>
              <Link href="/equipo" onClick={toggleMenu} className="flex justify-between items-center w-full py-4 px-6 text-gray-300 hover:bg-gray-700 transition border-b border-gray-700 uppercase">NUESTRO EQUIPO <ChevronRight size={20} className="text-blue-400" /></Link>
              <Link href="/testimonios" onClick={toggleMenu} className="flex justify-between items-center w-full py-4 px-6 text-gray-300 hover:bg-gray-700 transition border-b border-gray-700 uppercase">TESTIMONIOS <ChevronRight size={20} className="text-blue-400" /></Link>
              {/* 🚨 RUTA ACTUALIZADA: Apuntando a la nueva página de contacto */}
              <Link href="/contactanos" onClick={toggleMenu} className="flex justify-between items-center w-full py-4 px-6 text-blue-400 hover:bg-gray-800 transition border-b border-gray-700 uppercase">CONTÁCTANOS <ChevronRight size={20} className="text-blue-400" /></Link>

            </nav>
        </div>
        
        {/* Overlay Oscuro para el fondo */}
        {isOpen && (
             <div onClick={toggleMenu} className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"></div>
        )}
        
    </header>
  );
}