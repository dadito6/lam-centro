import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);  // Estado para controlar la animación

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Establecer que la animación solo se debe ejecutar una vez en el montaje
    setHasAnimated(true);
  }, []); // El arreglo vacío asegura que solo se ejecute una vez cuando el componente se monte

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between header-container">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="rounded-full overflow-hidden bg-blue-900 flex items-center justify-center">
            <Image
              src="/lam.png"
              alt="Logo LAM"
              width={50}
              height={50}
              className="h-8 w-8 lam-image"
            />
          </div>
          <span
            className={`text-2xl font-bold text-gray-800 title-lam ${hasAnimated ? 'animated' : ''}`}
          >
            Centro LAM
          </span>
        </Link>

        {/* Botón de menú (ícono de hamburguesa) */}
        <Link href="/menu" className="menu-button p-2 focus:outline-none transition duration-300 ease-in-out hover:bg-green-200 hover:text-6EEDED active:bg-green-300 active:text-6EEDED">
          {isMenuOpen ? <X size={36} className="text-6EEDED" /> : <Menu size={36} className="text-49EADB" />}
        </Link>
      </div>
    </header>
  );
}
