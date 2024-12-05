// components/hero-section.tsx
import Image from 'next/image'; // Asegúrate de que esta línea esté presente
import { Button } from "@/components/ui/Button";
export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
      <Image
          src="/kinesio.jpg" // Reemplaza con la ruta de tu imagen
          alt="LAM Centro de Rehabilitación"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40" />
      </div>
      <div className="relative h-full container flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
          Rehabilitación y Medicina Deportiva Especializada
        </h1>
        <p className="mt-4 text-xl text-white/90 max-w-xl">
          Recuperá tu bienestar con nuestro equipo de profesionales especializados
        </p>
        <div className="mt-8">
          <a 
            href="https://api.whatsapp.com/send/?phone=2215256816&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
          >
           <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Agenda tu consulta
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

