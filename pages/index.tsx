
import { ServiceContentBlock } from "@/components/ServiceContentBlock"; 

import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import { Button } from "@/components/ui/Button"; 
import Head from 'next/head'; 

import { MapPin, Phone, Mail, Instagram, Menu, X, Clock } from 'lucide-react';

// 🛠️ Componente auxiliar para el diseño de DOBLE IMAGEN (Full-Width y Sin Gap)
// pages/index.tsx
interface ImageProps {
    image1Url:'/atendiendo1.jpg' ; // Use React.ReactNode for the icon component
    image2Url :'/atendiendo2.jpg' ;
  }

const DoubleImageBlock = ({ image1Url, image2Url }:ImageProps) => (
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



        </main>
      </div>
    </div>
  );
};

export default Home;