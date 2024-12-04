import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { MessageCircle } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
        <div className=" rounded-full overflow-hidden bg-blue-900 flex items-center justify-center">
        <Image 
            src="/lam.png" // Ruta al ícono SVG
            alt="Logo LAM" 
            width={50} // Ajusta el tamaño según sea necesario
            height={50} // Ajusta el tamaño según sea necesario
            
            className="h-8 w-8" // Ajusta el tamaño en Tailwind CSS
          />
        </div>
        
          <span className="text-2xl font-bold #00BFAE">LAM</span>
       
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#servicios" className="text-sm font-medium hover:text-blue-600">
            Servicios
          </Link>
          <Link href="#equipo" className="text-sm font-medium hover:text-blue-600">
            Equipo
          </Link>
          <Link href="#trabajos" className="text-sm font-medium hover:text-blue-600">
            Trabajos
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-blue-600">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a 
            href="https://wa.me/+XXXXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="mr-2 h-4 w-4" />
              Pedir Turno
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}

