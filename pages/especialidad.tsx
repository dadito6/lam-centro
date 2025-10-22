import { useRouter } from 'next/router';
import Image from 'next/image';
import SiteHeader from "@/components/site-header"; // 🚨 CORREGIDO: Importación por defecto
import { useState } from 'react';

// 🚨 La función principal debe ser exportada por defecto al final del archivo.
const EspecialidadDetalle = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [isClicked, setIsClicked] = useState(false); 
  const [indice, setIndice] = useState(0);

  // Datos de ejemplo (se mantienen)
  const especialidades = [
    {
      id: 'ortopedia',
      title: "Especialización en Medicina Ortopédica Europea",
      description: "Es un método de trabajo ideado por el Dr. james Cyriax ( traumatologo Britanico 1904-1985)... [descripción completa]",
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
    // Agrega más especialidades si es necesario
  ];

  const especialidad = especialidades.find((esp) => esp.id === id);

  if (!especialidad) {
    return <div className="text-center pt-32 text-xl font-bold">Especialidad no encontrada</div>;
  }

  const handleClick = () => {
    setIsClicked(true); 
    window.open(especialidad.referenciaLink, "_blank"); 
  };

  const puntosClave = especialidad.puntosClave;

  return (
    <div className="relative min-h-screen">
      {/* 🚨 NOTA: El SiteHeader ya se renderiza globalmente en _app.tsx, 
          pero si tu aplicación aún lo necesita aquí, se mantiene. 
      <SiteHeader /> */}

      {/* Contenido de la página */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-20"> 
        {/* 🚨 CLAVE: Añadimos pt-16/pt-20 para empujar el contenido debajo del header fijo */}

        {/* Fondo con imagen */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={especialidad.backgroundImage} 
            alt="Fondo de la página de detalles" 
            fill 
            className="object-cover"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Contenido superpuesto */}
        <div className="relative z-10 py-12 md:py-20">
          <div className="container mx-auto px-4">
            
            {/* Logo centrado */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={especialidad.image} 
                  alt={especialidad.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Título y descripción */}
            <h1 className={`text-4xl font-extrabold text-white text-center mb-6`}>{especialidad.title}</h1>
            <p className="text-xl text-white text-center mb-12 max-w-4xl mx-auto">{especialidad.description}</p>

            {/* Botón "Más Información" */}
            <div className="flex justify-center my-5">
                <button onClick={handleClick} className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 uppercase">
                  Más Información Cyriax
                </button>
            </div>

            {/* Puntos clave */}
            <h2 className="text-3xl font-bold text-white text-center mt-16 mb-8 uppercase">Aspectos Clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {puntosClave.map((punto, index) => (
                <div
                  key={index}
                  className="aspecto-clave text-center p-6 rounded-xl shadow-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  {/* 🚨 Icono (Placeholder temporal, si Font Awesome no está instalado) */}
                    <div className="text-3xl text-blue-300 mb-4 flex justify-center">
                        <span className="text-4xl">💡</span> 
                    </div>
                  <h3
                    className={`text-xl font-bold text-white mb-2`}
                  >
                    {punto.title}
                  </h3>
                  <p className="text-base text-gray-200">{punto.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EspecialidadDetalle;