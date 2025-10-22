import Image from 'next/image';
import Head from 'next/head';
import SiteHeader  from "@/components/site-header";

export default function SobreNosotros() {
  return (
    <div>
      <SiteHeader />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Sobre Nosotros
        </h1>

        {/* Contenedor principal */}
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Imagen */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/sobre-nosotros.jpg" // Ruta de la imagen en la carpeta public
              alt="Imagen sobre nosotros"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 p-6">
            <p className="text-gray-700 text-lg mb-4">
              En <strong>Centro LAM</strong>, nos dedicamos a brindar atención de calidad en kinesiología y rehabilitación.
              Nuestro equipo de profesionales está comprometido con tu bienestar y recuperación.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Ofrecemos tratamientos personalizados, utilizando técnicas avanzadas y equipos de última generación.
            </p>
            <p className="text-gray-700 text-lg titulo-res"  >
             <strong> EVALUAMOS DIAGNOSTICAMOS SOLUCIONAMOS </strong>
             </p>
            <p  className="text-gray-700 text-lg titulo-res"> 
            <strong> LAM</strong>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}