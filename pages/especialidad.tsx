import Image from 'next/image';
import { useState } from 'react';

// =======================================================
// INTERFACES
// =======================================================
interface PuntoClave {
  title: string;
  description: string;
  icon: string;
}

interface Especialidad {
  id: string;
  title: string;
  description: string;
  puntosClave: PuntoClave[];
  image: string;
  referenciaLink: string;
  backgroundImage: string;
}

// =======================================================
// COMPONENTE AUXILIAR PARA LA DESCRIPCIÓN 
// =======================================================
const FormattedDescription = ({ text }: { text: string }) => {
  const paragraphs = text.split('\n\n').filter(p => p.trim() !== '');
  
  return (
    <div className="p-6 md:p-10 bg-gray-900 rounded-xl shadow-2xl border-t-4 border-slate-700 max-w-4xl mx-auto">
      {paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 last:mb-0 font-light"
        >
          {paragraph.split('\n').map((line, lineIndex) => (
            <span key={lineIndex}>
              {line}
              {lineIndex < paragraph.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

// =======================================================
// COMPONENTE PRINCIPAL
// =======================================================
const EspecialidadDetalle = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const especialidades: Especialidad[] = [
    {
      id: 'ortopedia',
      title: "Especialización en Medicina Ortopédica Europea",
      description: `"La Medicina Ortopédica Europea, desarrollada por el Dr. James Cyriax, se centra en la evaluación y tratamiento preciso de las lesiones músculo-esqueléticas.
Su enfoque se basa en una historia clínica detallada, una exploración física minuciosa y en la identificación exacta del tejido lesionado (músculo, tendón, ligamento, cápsula o articulación).

En nuestro centro, aplicamos este método para diagnosticar y tratar afecciones del sistema locomotor como tendinitis, esguinces, lumbalgias, cervicalgias o lesiones deportivas, combinando técnicas manuales específicas, movilización articular, y prescripción de ejercicios terapéuticos."`,
      puntosClave: [
        { title: "Técnicas avanzadas", description: "Diagnósticos precisos con tecnología moderna.", icon: "🔬" },
        { title: "Enfoque personalizado", description: "Tratamientos adaptados a cada paciente.", icon: "👨‍⚕️" },
        { title: "Equipo multidisciplinario", description: "Colaboración integral entre especialistas.", icon: "👥" },
        { title: "Resultados comprobados", description: "Métodos con evidencia científica.", icon: "📈" },
      ],
      image: "/etgom2.png",
      referenciaLink: "https://cyriax.eu/",
      backgroundImage: "/etgo.jpg",
    },
  ];

  const especialidad = especialidades[0]; 
  
  const handleClick = () => {
    setIsClicked(true);
    window.open(especialidad.referenciaLink, "_blank"); 
  };
  
  const puntosClave = especialidad.puntosClave;

  return (
    <div className="min-h-screen flex flex-col bg-gray-900"> 
      
      <main className="flex-1 pt-16 md:pt-20"> 
        
        <div className="py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            
            {/* Título y Logo */}
            <div className="text-center mb-8 md:mb-10">
              <div className="flex justify-center items-center mb-5">
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 md:border-8 border-slate-700 shadow-xl">
                  <Image
                    src={especialidad.image} 
                    alt={especialidad.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight px-4">
                {especialidad.title}
              </h1>
            </div>
            
            {/* Descripción */}
            <FormattedDescription text={especialidad.description} /> 

            {/* Botón */}
            <div className="flex justify-center my-8 md:my-10">
              <button 
                onClick={handleClick} 
                className="bg-slate-400 text-gray-900 font-bold py-3 px-6 md:px-8 rounded-full shadow-lg hover:bg-slate-500 transition duration-300 uppercase transform hover:scale-105 text-sm md:text-base"
              >
                Más Información Cyriax
              </button>
            </div>

            {/* Puntos clave */}
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mt-10 mb-6 md:mb-8 uppercase border-b-2 border-gray-700 pb-3">
              ¿Por qué elegir nuestra especialización?
            </h2>
            
            {/* Grid de tarjetas mejorado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"> 
              {puntosClave.map((punto, index) => (
                <div
                  key={index}
                  className="p-5 md:p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] border-t-4 border-teal-500 flex flex-col"
                >
                  {/* Icono */}
                  <div className="text-3xl md:text-4xl mb-3 flex justify-center">
                    <span>{punto.icon}</span> 
                  </div>
                  {/* Título */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-center min-h-[3rem] flex items-center justify-center">
                    {punto.title}
                  </h3>
                  {/* Descripción */}
                  <p className="text-sm md:text-base text-gray-300 text-center leading-relaxed">
                    {punto.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default EspecialidadDetalle;