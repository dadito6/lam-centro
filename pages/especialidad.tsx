import Image from 'next/image';
import { useState } from 'react';
// ELIMINAMOS useRouter ya que cargaremos la primera especialidad directamente.
// import { useRouter } from 'next/router'; 

// =======================================================
// INTERFACES (Se mantienen)
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
    // Tarjeta con borde y fondo oscuro/neutro, texto claro
    <div className="p-8 md:p-10 bg-gray-900 rounded-xl shadow-2xl border-t-4 border-slate-800 max-w-4xl mx-auto">
      {paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          // Texto claro
          className="text-gray-200 text-lg md:text-xl leading-relaxed mb-4 last:mb-0 font-light"
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
// COMPONENTE PRINCIPAL: EspecialidadDetalle
// =======================================================
const EspecialidadDetalle = () => {
  // ELIMINAMOS router y id
  // const router = useRouter(); 
  // const { id } = router.query; 
  const [isClicked, setIsClicked] = useState(false);
  
  // 1. Datos de ejemplo (Se mantienen)
  const especialidades: Especialidad[] = [
    {
      id: 'ortopedia',
      title: "Especialización en Medicina Ortopédica Europea",
      // Texto mejorado para el home
      description: `“La Medicina Ortopédica Europea, desarrollada por el Dr. James Cyriax, se centra en la evaluación y tratamiento preciso de las lesiones músculo-esqueléticas.
Su enfoque se basa en una historia clínica detallada, una exploración física minuciosa y en la identificación exacta del tejido lesionado (músculo, tendón, ligamento, cápsula o articulación).

En nuestro centro, aplicamos este método para diagnosticar y tratar afecciones del sistema locomotor como tendinitis, esguinces, lumbalgias, cervicalgias o lesiones deportivas, combinando técnicas manuales específicas, movilización articular, y prescripción de ejercicios terapéuticos.

El objetivo es recuperar la función, aliviar el dolor y prevenir recaídas, devolviendo al paciente la movilidad y bienestar de forma segura y eficaz.”`,
      puntosClave: [
        { title: "Técnicas avanzadas", description: "Uso de tecnologías modernas para diagnósticos precisos.", icon: "fas fa-microscope" },
        { title: "Enfoque personalizado", description: "Tratamientos adaptados a las necesidades individuales de cada paciente.", icon: "fas fa-user-md" },
        { title: "Equipo multidisciplinario", description: "Colaboración entre especialistas para un tratamiento integral.", icon: "fas fa-users" },
        { title: "Resultados comprobados", description: "Métodos basadas en evidencia científica con altas tasas de éxito.", icon: "fas fa-chart-line" },
      ],
      image: "/etgom2.png",
      referenciaLink: "https://cyriax.eu/",
      backgroundImage: "/etgo.jpg",
    },
  ];

  // 🚨 SOLUCIÓN: Cargamos la primera especialidad directamente
  const especialidad = especialidades[0]; 
  
  // ELIMINAMOS la verificación de router.isReady y "Especialidad no encontrada"

  const handleClick = () => {
    setIsClicked(true);
    window.open(especialidad.referenciaLink, "_blank"); 
  };
  
  const puntosClave = especialidad.puntosClave;

  return (
   
    <div className="min-h-screen flex flex-col bg-gray-900"> 
      
      <main className="flex-1 pt-16 md:pt-20"> 
        
        {/* Contenido */}
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">
            
            {/* Título y Logo */}
            <div className="text-center mb-10 md:mb-12">
                {/* Logo centrado */}
                <div className="flex justify-center items-center mb-6">
                    {/* Borde del logo con color de acento */}
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-8 border-slate-800 shadow-xl">
                        <Image
                            src={especialidad.image} 
                            alt={especialidad.title} 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Título Principal: Texto blanco */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    {especialidad.title}
                </h1>
            </div>
            
            {/* DESCRIPCIÓN: Usa el componente FormattedDescription */}
            <FormattedDescription text={especialidad.description} /> 

            {/* Botón "Más Información": Color de acento (lime-400) */}
            <div className="flex justify-center my-10 md:my-12">
                <button 
                    onClick={handleClick} 
                    className="bg-slate-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-600 transition duration-300 uppercase transform hover:scale-105"
                >
                    Más Información Cyriax
                </button>
            </div>

            {/* Puntos clave */}
            <h2 className="text-3xl font-bold text-white text-center mt-12 mb-8 uppercase border-b-2 border-gray-700 pb-3">
                ¿Por qué elegir nuestra especialización?
            </h2>
            
            {/* CORRECCIÓN DE ALINEACIÓN FINAL: items-stretch + flex-grow dentro de la tarjeta */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"> 
                {puntosClave.map((punto, index) => (
                    <div
                        key={index}
                        // La combinación flex-col h-full permite que flex-grow funcione
                        className="aspecto-clave p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] border-t-4  flex flex-col h-full"
                    >
                        {/* Icono (Placeholder): Color de acento */}
                        <div className="text-4xl text-teal-400 mb-4 flex justify-center flex-shrink-0">
                            <span>💡</span> 
                        </div>
                        {/* Título */}
                        <h3 className="text-xl font-bold text-white mb-2 text-center flex-shrink-0">{punto.title}</h3>
                        {/* Descripción: flex-grow obliga a la descripción a ocupar el espacio restante para igualar la altura de todas las tarjetas */}
                        <p className="text-base text-gray-300 text-center flex-grow">{punto.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
      </main>
      
      {/* Footer */}

    </div>
  );
}

export default EspecialidadDetalle ;