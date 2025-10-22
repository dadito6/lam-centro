import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const SiteFooter = () => (
    <footer className="bg-gray-900 py-12 md:py-20 text-white footer-container">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
            
            {/* COLUMNA 1: CONTACTO Y HORARIOS */}
            <div className="text-base md:text-lg mb-12 md:w-full">
              <h3 className="text-xl font-bold mb-6 uppercase text-blue-400">CONTÁCTANOS</h3>
              
              {/* HORARIOS */}
              <div className="flex flex-col items-center mb-6">
                  <Clock size={20} className="text-blue-400 mb-2" />
                  <p className="mb-1 font-open-sans text-base">Lunes, Miércoles y Viernes: 08:00 A 20:00hs</p>
                  <p className="mb-4 font-open-sans text-base">Martes y Jueves: 10:00 am - 20:00hs</p>
              </div>
              
              {/* TELÉFONO */}
              <div className="flex items-center justify-center mb-6">
                  <Phone size={20} className="text-blue-400 mr-2" />
                  <p className="font-open-sans text-base">
                      <strong className="text-white">Recepcion:</strong> +54 2215256816
                  </p>
              </div>

              {/* UBICACIÓN */}
              <div className="flex items-center justify-center">
                  <MapPin size={20} className="text-blue-400 mr-2" />
                  <p className="text-base text-gray-400">
                      Plaza 19 de Noviembre e/ Diag. 96 y 25 (44 y 25) La Plata Bs.As.
                  </p>
              </div>
            </div>
            
            {/* COLUMNA 2: LOGO y RRSS */}
            <div className="w-full flex flex-col items-center justify-center mt-8 pt-4">
              
              {/* LOGO Y TÍTULO */}
              <div className="flex items-center mb-6">
                  <Image
                      src="/lam.png"
                      alt="Logo LAM"
                      width={60}
                      height={60}
                      className="h-10 w-10 mr-3"
                  />
                  <h2 className="text-2xl font-bold text-white uppercase">CENTRO LAM</h2>
              </div>
              
              {/* TÍTULO "SÍGUENOS" */}
              <p className="text-lg font-semibold text-gray-500 mb-3 uppercase">Síguenos</p>

              {/* ENLACE DE REDES SOCIALES */}
              <Link 
                  href="https://www.instagram.com/lamcentro/"
                  target="_blank"
                  className="flex items-center text-white hover:text-blue-400 transition duration-300 text-base"
                  aria-label="Síguenos en Instagram"
              >
                  <Instagram size={28} className="text-white hover:text-blue-400 transition" />
              </Link>
            </div>
        </div>

        {/* SECCIÓN INFERIOR: Derechos de autor */}
        <div className="container mx-auto px-6 mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Centro LAM. Todos los derechos reservados.</p>
        </div>
    </footer>
);
export default SiteFooter;