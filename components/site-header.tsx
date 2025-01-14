import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X, MessageCircle } from 'lucide-react';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
              className="h-8 w-8 lam-image"
            />
          </div>
          <span className="text-2xl font-bold text-gray-800">Centro LAM</span>
        </Link>

        {/* Botón de menú (ícono de hamburguesa) */}
        <Link href="/menu" className="menu-button p-2 focus:outline-none transition duration-300 ease-in-out hover:bg-green-200 hover:text-6EEDED active:bg-green-300 active:text-6EEDED">
  {isMenuOpen ? <X size={36} className="text-6EEDED" /> : <Menu size={36} className="text-49EADB" />}
</Link>
      </div>
    </header>
  );
}