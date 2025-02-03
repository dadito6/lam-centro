import { useRouter } from 'next/router';
import Image from 'next/image';
import { SiteHeader } from "@/components/site-header";

const DetalleTrabajo = () => {
  const router = useRouter();
  const { slug } = router.query; // Obtén el parámetro de la ruta (slug)

  // Datos de ejemplo (puedes reemplazar esto con una llamada a una API o un archivo JSON)
  const trabajos = {
    "rehabilitacion-deportiva": {
      title: "Rehabilitación Deportiva",
      image: "/trabajando2.jpg",
    },
    "terapia-dolor-cronico": {
      title: "Terapia de Dolor Crónico y Rehabilitación Postural",
      image: "/atendiendo2.jpg",
    },
    "terapia-manual": {
      title: "Terapia Manual",
      image: "/atendiendo2.jpg",
    },
    "entrenamiento-funcional": {
      title: "Entrenamiento Funcional",
      image: "/trabajando4.jpg",
    },
  };

  const trabajo = trabajos[slug] || {};

  // Función para redirigir a WhatsApp
  const redirectToWhatsApp = () => {
    const phoneNumber = "+542215256816"; // Reemplaza con tu número de WhatsApp
    const message = `Hola, estoy interesado en más información sobre ${trabajo.title}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader />

      {/* Contenido principal */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container mx-auto max-w-4xl">
          {/* Título centrado */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {trabajo.title}
          </h1>

          {/* Diseño de dos columnas: imagen a la izquierda, texto a la derecha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna de la imagen */}
            <div className="flex justify-center items-center">
              <div className="w-full h-48 md:h-64 relative">
                <Image
                  src={trabajo.image}
                  alt={trabajo.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Columna del texto */}
            <div className="text-base md:text-lg text-gray-700 space-y-4">
              {/* Descripción */}
              <p className="text-gray-600">
                {trabajo.description}
              </p>

              {/* Texto adicional con diseño moderno */}
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                {slug === "rehabilitacion-deportiva" ? (
                  <>
                    <p className="text-gray-700">
                      La rehabilitación deportiva está diseñada para ayudarte a regresar a tu máximo rendimiento físico después de una lesión. En nuestro centro, ofrecemos:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Diagnóstico preciso:</strong> Evaluamos tu lesión con tecnología avanzada para diseñar un plan personalizado.
                      </li>
                      <li>
                        <strong>Tratamiento especializado:</strong> Combinamos técnicas manuales, ejercicios func ionales y tecnología de vanguardia.
                      </li>
                      <li>
                        <strong>Seguimiento continuo:</strong> Monitoreamos tu progreso para ajustar el tratamiento según sea necesario.
                      </li>
                    </ul>
                  </>
                ) : slug === "terapia-manual" ? (
                  <>
                    <p className="text-gray-700">
                      La terapia manual se centra en el tratamiento de disfunciones musculoesqueléticas a través de técnicas manuales. Nuestros servicios incluyen:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Masajes terapéuticos:</strong> Alivio del dolor y mejora de la circulación.
                      </li>
                      <li>
                        <strong>Movilización articular:</strong> Mejora de la movilidad y reducción de la rigidez.
                      </li>
                      <li>
                        <strong>Ejercicios de rehabilitación:</strong> Fortalecimiento y prevención de lesiones.
                      </li>
                    </ul>
                  </>
                ) : slug === "entrenamiento-funcional" ? (
                  <>
                    <p className="text-gray-700">
                      En nuestro centro, el entrenamiento funcional está diseñado para ayudarte a adaptarte nuevamente a tu deporte tras una lesión o para prevenir futuras complicaciones. Nuestro enfoque combina ejercicios funcionales con movimientos específicos de tu disciplina deportiva para que puedas volver más fuerte y preparado.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Reintegración progresiva:</strong> Diseñamos programas que se adaptan a cada fase de recuperación, desde la movilidad inicial hasta el retorno al rendimiento competitivo.
                      </li>
                      <li>
                        <strong>Fortalecimiento específico:</strong> Trabajamos en fortalecer las áreas comprometidas por la lesión, así como en mejorar la estabilidad y resistencia general.
                      </li>
                      <li>
                        <strong>Prevención personalizada:</strong> Evaluamos patrones de movimiento y diseñamos ejercicios para corregir desequilibrios, evitando futuras lesiones.
                      </li>
                      <li>
                        <strong>Enfoque interdisciplinario:</strong> Nuestros kinesiólogos trabajan en conjunto con especialistas para garantizar un programa completo y seguro.
                      </li>
                    </ul>
                  </>
                ) : (
                  <p className="text-gray-700">
                    Nuestro enfoque se centra en identificar las causas subyacentes del dolor crónico y las alteraciones posturales para tratarlas de manera efectiva.
                  </p>
                )}
                <p className="font-semibold text-blue-600 mt-4 cursor-pointer" onClick={redirectToWhatsApp}>
                  ¡Confía en nosotros para tu recuperación completa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetalleTrabajo;