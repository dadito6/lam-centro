import { useRouter } from 'next/router';
import Image from 'next/image';
import { SiteHeader } from "@/components/site-header";
import { useState } from 'react';

const EspecialidadDetalle = () => {
  const router = useRouter();
  const { id } = router.query; // Obtén el parámetro de la ruta (id)
  const [isClicked, setIsClicked] = useState(false); // Estado para controlar el clic
  const [indice, setIndice] = useState(0);

  // Datos de ejemplo (puedes reemplazar esto con una llamada a una API o un archivo JSON)
  const especialidades = [
    {
      id: 'ortopedia',
      title: "Especialización en Medicina Ortopédica Europea",
      description: "Tratamientos avanzados para el diagnóstico y manejo de trastornos musculoesqueléticos. Utilizamos técnicas basadas en evidencia para aliviar el dolor, restaurar la funcionalidad y mejorar la calidad de vida.",
      puntosClave: [
        {
          title: "Técnicas avanzadas",
          description: "Uso de tecnologías modernas para diagnósticos precisos.",
          icon: "fas fa-microscope",
        },
        {
          title: "Enfoque personalizado",
          description: "Tratamientos adaptados a las necesidades individuales de cada paciente.",
          icon: "fas fa-user-md",
        },
        {
          title: "Equipo multidisciplinario",
          description: "Colaboración entre especialistas para un tratamiento integral.",
          icon: "fas fa-users",
        },
        {
          title: "Resultados comprobados",
          description: "Métodos basadas en evidencia científica con altas tasas de éxito.",
          icon: "fas fa-chart-line",
        },
      ],
      image: "/centroE.jpg", // Ruta de la imagen en la carpeta public
      referenciaLink: "https://cyriax.eu/", // Enlace a la página de referencia
      backgroundImage: "/etgo.jpg", // Ruta de la imagen de fondo
    },
    // Agrega más especialidades si es necesario
  ];

  // Busca la especialidad correspondiente al ID
  const especialidad = especialidades.find((esp) => esp.id === id);

  if (!especialidad) {
    return <div>Especialidad no encontrada</div>;
  }

  // Función para manejar el clic en el botón
  const handleClick = () => {
    setIsClicked(true); // Cambia el estado a true
    window.open(especialidad.referenciaLink, "_blank"); // Abre el enlace en una nueva pestaña
  };

  const puntosClave = especialidad.puntosClave;

  return (
    <div className="relative min-h-screen" >
      {/* Encabezado */}
      <SiteHeader />

      {/* Contenido de la página */}
      <main className="flex-1 overflow-y-auto">
        {/* Fondo con imagen usando el componente Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={especialidad.backgroundImage} // Ruta de la imagen de fondo
            alt="Fondo de la página de detalles" // Texto alternativo obligatorio
            fill // Ocupa todo el espacio disponible
            className="object-cover"
          />
          {/* Overlay oscuro para mejorar la legibilidad */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Contenido superpuesto */}
        <div className="relative z-10">
          <div className="container py-16">
            {/* Logo centrado */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src={especialidad.image} // Ruta de la imagen en la carpeta public
                  alt={especialidad.title} // Texto alternativo obligatorio
                  fill // Ocupa todo el espacio disponible
                  className="object-cover"
                />
              </div>
            </div>

  {/* Título y descripción */}
<h1 className={`text-3xl font-bold text-white text-center mb-6`}>{especialidad.title}</h1>
<p className="text-lg text-white text-center mb-5">{especialidad.description}</p>

  {/* Botón "Más Información" modificado */}
<div className="flex justify-center my-5"> {/* Agregado my-5 para margen vertical */}
  <button onClick={handleClick} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
    Más Información
  </button>
</div>

{/* Puntos clave */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
  {puntosClave.map((punto, index) => (
    <div
      key={index}
      className="aspecto-clave text-center mx-2 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
    >
      <h3
        className={`text-2xl font-bold text-gray-100 text-shadow-lg p-2 ${
          punto.title === "Enfoque personalizado" ? "text-blue-600 font-bold" : ""
        }`}
      >
        {punto.title}
      </h3>
      <p className="text-md text-gray-100 text-shadow p-1">{punto.description}</p>
      <i className={`${punto.icon} text-3xl text-blue-300 mt-4 text-shadow`}></i>
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