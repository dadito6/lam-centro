import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TeamSection } from "@/components/team-section"
import { WorkGallery } from "@/components/work-gallery"
import { Button } from "@/components/ui/Button"
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        
        <section id="servicios" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-bold mb-2">Rehabilitación Deportiva</h3>
                <p className="text-muted-foreground">
                  Recuperación especializada para deportistas de todos los niveles.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-bold mb-2">Kinesiología</h3>
                <p className="text-muted-foreground">
                  Tratamientos personalizados para lesiones y dolencias.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-bold mb-2">Medicina Deportiva</h3>
                <p className="text-muted-foreground">
                  Atención médica especializada para deportistas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TeamSection />
        <WorkGallery />
        

        <section id="contacto" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
            <div className="max-w-2xl mx-auto grid gap-8">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-bold">Dirección</h3>
                  <p className="text-muted-foreground">📍 plaza 19 de noviembre e/ diag. 96 y 25 ( 44 y 25) La Plata Bs.As.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-bold">Teléfono</h3>
                  <p className="text-muted-foreground">+54 9 221 525-6816</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-muted-foreground">contacto@lamcentro.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-bold">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/lamcentro/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    @lamcentro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © 2024 LAM Centro de Rehabilitación. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

