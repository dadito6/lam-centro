"use client";
import React from "react";

const NuestroEquipo = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-6">
      
      {/* TÍTULO */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 uppercase tracking-wide">
        Nuestro Equipo
      </h1>

      {/* DESCRIPCIÓN */}
      <p className="text-center text-gray-600 max-w-2xl mb-10 text-base md:text-lg">
        En Centro LAM trabajamos con pasión, profesionalismo y compromiso. 
     
      </p>

      {/* VIDEO LOCAL */}
      {/* 🚨 SOLUCIÓN DEFINITIVA: 
          1. aspect-[9/16]: Proporción correcta (720x1280).
          2. object-cover: Recorta ligeramente si es necesario para eliminar BORDES INCRUSTADOS.
      */}
      <div className="w-full max-w-xs md:max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-black aspect-[9/16]"> 
        <video
          autoPlay
          muted
          loop
          playsInline
          // 🚨 CAMBIO CLAVE FINAL: Usamos object-cover para llenar el contenedor 9:16
          className="w-full h-full object-cover" 
        >
          <source src="/video/nuestro-equipo.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

    </section>
  );
};

export default NuestroEquipo;