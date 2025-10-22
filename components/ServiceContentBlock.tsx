// components/ServiceContentBlock.tsx

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
    <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
      
      {/* Contenedor del Texto */}
      <div className="w-full px-6 md:px-12 lg:px-16 mx-auto relative z-10">
        
        {/* Número Difuminado en el fondo */}
        <div 
          className="absolute left-0 top-0 font-extrabold pointer-events-none opacity-10"
          style={{ 
            fontSize: 'clamp(8rem, 15vw, 12rem)',
            lineHeight: '1',
            color: '#127B8E'
          }} 
        >
          {number}
        </div>

        {/* Contenido de Texto: Más espaciado y énfasis */}
        <div className="max-w-4xl mx-auto text-center relative z-20"> 
          
          {/* Título: Más grande y con mejor espaciado */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            {title}
          </h2>

          {/* Párrafo: Más espaciado entre líneas */}
          <p 
            className="font-robotoC font-normal text-gray-600 mx-auto leading-loose"
            style={{ 
              fontSize: '18px',
              lineHeight: '32px', // Más espaciado
              maxWidth: '850px',
              letterSpacing: '0.01em'
            }}
          >
            {description}
          </p>
        </div>
      </div>
      
      {/* BLOQUE DE IMAGEN FULL WIDTH - Sin márgenes */}
      <div className="w-full mt-12 md:mt-16"> 
        <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full overflow-hidden">
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