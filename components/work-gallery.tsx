import Image from "next/image"
import { Card, CardContent } from "@/components/ui/Card"

const works = [
  {
    title: "Rehabilitación Deportiva",
    description: "Recuperación de lesiones deportivas",
    image: "/rehabilitacion.jpg",
    //image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Terapia Manual",
    description: "Tratamientos personalizados",
    image: "/compu.jpg",
  },
  {
    title: "Entrenamiento Funcional",
    description: "Mejora tu rendimiento",
    image: "/entrena.jpg",
  },
]

export function WorkGallery() {
  return (
    <section id="trabajos" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
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
                <p className="text-muted-foreground">{work.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

