import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import Link from 'next/link';

const trabajos = [
  {
    title: "Rehabilitación Deportiva",
    description: "Recuperación de lesiones deportivas",
    image: "/trabajo0.jpg",
    link: "/detalle-trabajo/rehabilitacion-deportiva", // Ruta específica para este trabajo
  },
  {
    title: "Terapia de Dolor Crónico y Rehabilitación Postural",
    description: "Tratamientos personalizados",
    image: "/trabajo1.jpg",
    link: "/detalle-trabajo/terapia-manual", // Ruta específica para este trabajo
  },
  {
    title: "Entrenamiento Funcional",
    description: "Mejora tu rendimiento",
    image: "/trabajo2.jpg", 
    link: "/detalle-trabajo/entrenamiento-funcional", // Ruta específica para este trabajo
  },
];

export function WorkGallery() {
  return (
    <section id="trabajos" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trabajos.filter((work, index, self) => self.findIndex(w => w.title === work.title) === index).map((work, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-xl mb-2">{work.title}</h3>
                <p className="text-muted-foreground mb-4">{work.description}</p>

                {/* Botón para redireccionar a la página de detalles */}
                <Link href={work.link}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                    Descubre nuestros servicios
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}