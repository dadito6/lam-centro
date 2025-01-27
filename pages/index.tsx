import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { TeamSection } from "@/components/team-section";
import { WorkGallery } from "@/components/work-gallery";
import { Button } from "@/components/ui/Button";
import Link from 'next/link';
import Head from 'next/head';
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Menu, X } from 'lucide-react';
import Testimonios from '@/components/Testimonios';
import { useState } from "react";

const especialidades = [
  {
    title: "Especialización en Medicina Ortopédica Europea",
    puntosClave: [
      "Tratamientos avanzados para el diagnóstico.",
      "Manejo de trastornos musculoesqueléticos.",
      "Técnicas basadas en evidencia.",
    ],
    image: "/centroE.jpg", // Asegúrate de que esta imagen exista en la carpeta public
    link: "/especialidad/ortopedia", // Ruta a la página de detalles
  },
  // Agrega más especialidades si es necesario
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Contenido de la página */}
      <div className="relative z-10">
        <SiteHeader />
        <main className="flex-1 overflow-y-auto">
          <HeroSection />
          <section className="py-16 bg-white/90">
            <div className="container mx-auto px-4">
              {/* Título centrado */}
              <h2 className="text-4xl font-bold text-center mb-12">Especialidad</h2>

              {/* Contenedor de las tarjetas */}
              <div className="flex justify-center w-full mx-auto">
                <div className=" mx-auto justify-items-center">
                  {especialidades.map((especialidad, index) => (
                    <div key={index} className="especialidades bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 mx-auto">
                      {/* Imagen */}
                      <div className="relative h-64 w-full">
                        <Image
                          src="/centroE.jpg"
                          alt="Imagen de especialidad"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw" // Ajusta según tus necesidades
                          className="object-cover"
                        />
                      </div>

                      {/* Contenido */}
                      <div className="p-6">
                        {/* Título */}
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{especialidad.title}</h3>

                        {/* Puntos clave */}
                        <ul className=" list-inside mb-6 text-gray-600">
                          {especialidad.puntosClave.map((punto, i) => (
                            <li key={i} className="mb-2">{punto}</li>
                          ))}
                        </ul>

                        {/* Botón "Conoce más" */}
                        <Link href={especialidad.link}>
                          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                            Conoce más
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <Testimonios />
          <WorkGallery />
          <TeamSection />
          

          <footer className="bg-blue-500 py-4 text-white footer-container">
  <div className="container mx-auto px-4 flex justify-between items-center footer-flex">
    <div className="text-lg font-bold text-white sm:text-base ">
      <p className="mb-2 font-open-sans">Horarios:</p>
      <p className="mb-2 font-open-sans">Lunes Miercoles y Viernes de 08:00 A 20:00hs</p>
      <p className="mb-2 font-open-sans">Martes y Jueves: 10:00 am - 20:00hs</p>
      <p className="mb-2 font-open-sans">Teléfono: +54 2215256816</p>
      <p className="text-lg font-bold text-white mb-2 sm:text-base">Ubicacion :   Plaza 19 de Noviembre e/ Diag. 96 y 25 (44 y 25) La Plata Bs.As.</p>
    </div>
    <div className="flex justify-end">
    <div className="map-container relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10 hover:border-primary/30 transition-all duration-300">
  <iframe
    src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d833118.0815780339!2d-58.8985191!3d-35.3465248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2dd8f2db09453%3A0xdcef35c9551c789a!2sCentro%20LAM%20Kinesiologia%20Y%20Entrenamiento!5e0!3m2!1ses-419!2sar!4v1736823847773!5m2!1ses-419!2sar&zoom=17&style=feature:poi|visibility:off&style=feature:road|element:labels|visibility:off&style=feature:transit|visibility:off&color=%2300748c&markers=color:red%7C-35.3465248,-58.8985191`}
    width="100%"
    height="300"
    style={{ 
      border: 0,
      filter: "grayscale(20%) contrast(110%) saturate(90%)"
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="aspect-video"
  />
  
  {/* Overlay de carga elegante */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
</div>
</div>
  </div>
  <div className="container mx-auto px-4 flex justify-start items-start" style={{ position: 'relative' }}>
    <div className="flex flex-col items-start footer-logo" style={{ position: 'relative', top: 0, left: 0 }}>
      <div className="flex items-center">
        <Image
          src="/lam.png"
          alt="Logo LAM"
          width={50}
          height={50 }
          className="h-8 w-8 mr-2"
        />
        <h2 className="text-3xl font-bold text-white uppercase sm:text-2xl">CENTRO LAM</h2>
      </div>
    
    </div>
  </div>
</footer>
        </main>
      </div>
    </div>
  );
};

export default Home;