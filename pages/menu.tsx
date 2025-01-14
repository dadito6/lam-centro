import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X, MessageCircle } from 'lucide-react';

export function MenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen w-screen bg-white" >
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="rounded-full overflow-hidden bg-blue-900 flex items-center justify-center">
              <Image
                src="/lam.png"
                alt="Logo LAM"
                width={50}
                height={50}
                className="h-8 w-8"
              />
            </div>
            <span className="text-2xl font-bold text-gray-800">LAM</span>
          </Link>

          {/* Botón de menú (ícono de hamburguesa) */}
          <button
  onClick={toggleMenu}
  className="p-2 focus:outline-none"
>
  {isMenuOpen ? <X size={36} className="text-gray-800" /> : <Menu size={36} className="text-gray-800" />}
</button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center mb-20">Menú</h1>
        
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col justify-center items-center mr-8 text-4xl font-bold md:text-3xl sm:text-2xl xs:text-xl">
                <Link href="/#trabajos" className="text-gray-800 hover:text-blue-600 mb-8">
                  Servicios
                </Link>
                <Link href="/#equipo" className="text-gray-800 hover:text-blue-600 mb-8">
                  Equipo
                </Link>
                <Link href="/" className="text-gray-800 hover:text-blue-600 mb-8">
                  Inicio
                </Link>
              </div>
              <div className="border-l border-gray-900 h-48 w-1 border-2 border-gray-900 " />
              <div className="flex flex-col justify-center items-center ml-8 text-4xl font-bold md:text-3xl sm:text-2xl xs:text-xl">
                <Link href="/especialidad/ortopedia" className="text-gray-800 hover:text-blue-600 mb-8">
                  Especialidad
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=2215256816&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-green-500 mb-8">
                  Contactanos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;