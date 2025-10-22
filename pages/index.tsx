
import { ServiceContentBlock } from "@/components/ServiceContentBlock"; 

import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import { Button } from "@/components/ui/Button"; 
import Head from 'next/head'; 

import { MapPin, Phone, Mail, Instagram, Menu, X, Clock } from 'lucide-react';

// 🛠️ Componente auxiliar para el diseño de DOBLE IMAGEN (Full-Width y Sin Gap)
// pages/index.tsx

const DoubleImageBlock = ({ image1Url, image2Url }) => (
    <section className="w-full bg-white overflow-hidden py-0"> 
        <div className="w-full"> 
            
            {/* Imagen 1 (100% del ancho) */}
            {/* 🚨 CRÍTICO: Aseguramos la altura y el ancho total */}
            <div className="w-full relative h-[400px] md:h-[600px] overflow-hidden"> 
                <Image
                    src={image1Url}
                    alt="Foto de apoyo 1"
                    fill
                    className="object-cover" 
                    sizes="100vw"
                />
            </div>
            
            {/* Imagen 2 (100% del ancho) */}
            <div className="w-full relative h-[400px] md:h-[600px] overflow-hidden">
                <Image
                    src={image2Url}
                    alt="Foto de apoyo 2"
                    fill
                    className="object-cover" 
                    sizes="100vw"
                />
            </div>
        </div>
    </section>
);


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Head>
          <title>CENTRO LAM | Rehabilitación y Medicina Deportiva Especializada</title>
          <meta name="description" content="Recuperá tu bienestar con nuestro equipo de profesionales especializados en Kinesiología Avanzada y Medicina Deportiva." />
      </Head>

      <div className="relative z-10">
       
        <main className="flex-1 overflow-y-auto">
          {/* 1. HERO SECTION (Banner de la pantalla inicial) */}
          {/* <HeroSection /> */}

          {/* 2. BLOQUE DE SERVICIO 01: Kinesiología (TEXTO COMPLETO + IMAGEN ABAJO) */}
          <ServiceContentBlock
                title="Kinesiología Avanzada y Readaptación"
                description="Nuestros tratamientos se centran en devolver la función completa. Usamos la Medicina Ortopédica Europea (GCI Cyriax) para un diagnóstico preciso y terapias manuales y funcionales para asegurar una recuperación óptima y sin recaídas. Esta es la base de nuestro trabajo y el primer paso hacia tu bienestar."
                number="01" 
                imageUrl="/trabajando1.jpg" 
            />

          {/* 3. BLOQUE DE DOBLE IMAGEN (APILADAS Y FULL-WIDTH) */}
            <DoubleImageBlock
                image1Url="/atendiendo1.jpg" 
                image2Url="/atendiendo2.jpg" 
            />

          {/* 4. BLOQUE DE SERVICIO 02: Medicina Deportiva (TEXTO COMPLETO + IMAGEN ABAJO) */}
          <ServiceContentBlock
              title="Medicina Deportiva y Alto Rendimiento"
              description="Acompañamos a deportistas de todos los niveles. Desde la evaluación funcional hasta la planificación del regreso al campo, garantizamos que tu cuerpo esté listo para superar sus límites de forma segura y efectiva."
              imageUrl="/trabajando4.jpg" 
              number="02"
          />

            {/* 5. BLOQUE DE SERVICIO 03: Evaluación Postural (TEXTO COMPLETO + IMAGEN ABAJO) */}
            <ServiceContentBlock
                title="Evaluación Postural y Prevención"
                description="Más allá de la lesión, nos enfocamos en prevenir. Nuestro enfoque incluye el estudio de la pisada, análisis postural y planes de ejercicio correctivo para mantener la columna y articulaciones saludables a largo plazo."
                imageUrl="/trabajando2.jpg" 
                number="03"
            />

<ServiceContentBlock
                title="Traumatologia"
                description="Especialidad médica que se encarga del cuidado, estudio y rehabilitación de la forma y función de las extremidades, columna y estructuras asociadas. Es una especialidad que abarca más allá del campo de lesiones traumáticas; contempla también el estudio de patologías congénitas"
                imageUrl="/trabajando2.jpg" 
                number="04"
            />


          {/* 7. FOOTER (Se mantiene) */}
       {/* 7. FOOTER (Optimizado para Diseño y Responsividad) */}
    <footer className="bg-gray-900 py-10 md:py-16 text-white footer-container">
            
            {/* Contenedor Principal: Centrado y Columna Simple en Móvil */}
            <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
              
                {/* COLUMNA 1: CONTACTO Y HORARIOS (Centrado) */}
              <div className="text-sm md:text-base mb-10 md:w-full">
                <h3 className="text-xl font-bold mb-4 uppercase text-blue-400">Contáctanos</h3>
                
                {/* HORARIOS */}
                <div className="flex flex-col items-center mb-4">
                    <Clock size={18} className="text-blue-400 mb-1" />
                    
                    <p className="mb-1 font-open-sans">Lunes, Miércoles y Viernes: 08:00 A 20:00hs</p>
                    <p className="mb-4 font-open-sans">Martes y Jueves: 10:00 am - 20:00hs</p>
                </div>
                
                {/* TELÉFONO */}
                <div className="flex items-center justify-center mb-4">
                    <Phone size={18} className="text-blue-400 mr-2" />
                    <p className="font-open-sans">
                        <strong className="text-white">Recepcion:</strong> +54 2215256816
                    </p>
                </div>

                {/* UBICACIÓN */}
                <div className="flex items-center justify-center">
                    <MapPin size={18} className="text-blue-400 mr-2" />
                    <p className="text-sm text-gray-400">
                        <strong className="text-white"></strong> Plaza 19 de Noviembre e/ Diag. 96 y 25 (44 y 25) La Plata Bs.As.
                    </p>
                </div>
              </div>
              
                {/* 🚨 COLUMNA 2: LOGO y RRSS (Diseño Limpio y Centrado) 🚨 */}
                <div className="w-full flex flex-col items-center justify-center mt-8 pt-4">
    
    {/* LOGO Y TÍTULO */}
    <div className="flex items-center mb-6">
        <Image
            src="/lam.png"
            alt="Logo LAM"
            width={60}
            height={60} // Usamos 60x60 para un logo más grande
            className="h-10 w-10 mr-3" // Aumentamos el margen (mr-3) para separar sutilmente el texto
        />
        <h2 className="text-2xl font-bold text-white uppercase">CENTRO LAM</h2>
    </div>
                    
                    {/* TÍTULO "SÍGUENOS" */}
                    <p className="text-lg font-semibold text-gray-500 mb-3 uppercase">Síguenos</p>

                    {/* ENLACE DE REDES SOCIALES (Estilo Limpio) */}
                    <Link 
                        href="https://www.instagram.com/lamcentro/"
                        target="_blank"
                        className="flex items-center text-white hover:text-blue-400 transition duration-300 text-base"
                        aria-label="Síguenos en Instagram"
                    >
                        <Instagram size={28} className="text-white hover:text-blue-400 transition" />
                    </Link>
                </div>

            </div>

            {/* SECCIÓN INFERIOR: Derechos de autor */}
            <div className="container mx-auto px-6 mt-8 border-t border-gray-700 pt-4 text-center">
                <p className="text-xs text-gray-500">© {new Date().getFullYear()} Centro LAM. Todos los derechos reservados.</p>
            </div>

          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;