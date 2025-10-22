// components/ServiceContentBlock.tsx

import Link from 'next/link';
import Image from 'next/image';

interface ServiceContentBlockProps {
  title: string;
  description: string;
  number: string; 
  imageUrl: string;
}

export function ServiceContentBlock({ 
  title, 
  description, 
  number, 
  imageUrl,
}: ServiceContentBlockProps) {
  
  const isFirstBlock = number === "01"; 

  return (
    // 🚨 AJUSTE DE PADDING: Aumentamos el padding vertical (py-24)
    <section className="relative w-full bg-white py-24 md:py-40 overflow-hidden border-b border-gray-100">
      
      {/* Contenedor del Texto (limitado por .container) */}
      <div className="container mx-auto relative z-10">
        
        {/* Número Difuminado (Se mantiene) */}
        <div 
          className="absolute inset-0 flex items-start justify-center font-extrabold pointer-events-none"
          style={{ 
            lineHeight: 1, 
            top: '0', 
            color: 'rgb(107 114 128 / 0.25)', 
            fontSize: '15vw', 
            paddingTop: '2rem' 
          }} 
        >
          {number}
        </div>

        {/* Contenido de Texto: Centrado y con Énfasis */}
        {/* 🚨 CLAVE: Añadimos px-6/md:px-4 para espaciar el texto del borde en móvil */}
        <div className="max-w-5xl mx-auto text-center relative z-20 px-6 md:px-4 pt-10"> 
          
          {/* Título: Ajuste de tamaño responsivo para visibilidad en móvil (text-4xl) */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 md:text-7xl leading-tight">
            {title}
          </h2>

          {/* Párrafo: Estilo Forza y ancho expandido */}
          <p 
            className="mb-10 font-robotoC font-medium mx-auto" 
            style={{ 
              color: '#9c9c9c', 
              lineHeight: '27px', 
              fontSize: '17px', // Tamaño exacto de Forza
              maxWidth: '950px' 
            }}
          >
            {description}
          </p>
        </div>
      </div>
      
      {/* BLOQUE DE IMAGEN (Full Width) */}
      {/* 🚨 CLAVE: Quitamos px-0 y dejamos el control de margen a la sección */}
      <div className="w-full mt-10 md:mt-16"> 
          <div className="relative h-[400px] md:h-[600px] w-full mx-auto rounded-none md:rounded-lg overflow-hidden shadow-2xl">
              <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="100vw"
                  priority={isFirstBlock} 
              />
          </div>
      </div>
    </section>
  );
}