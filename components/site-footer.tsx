import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SiteFooter = () => (
  <footer className="bg-gray-900 text-white mt-0 mb-0 pt-12 pb-6 border-t-4 border-agua">
    
    {/* CONTENIDO PRINCIPAL */}
    <div className="container mx-auto px-6">
      
      {/* GRID DE 2 COLUMNAS EN DESKTOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        
        {/* COLUMNA IZQUIERDA: LOGO Y REDES */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-6">
            <Image
              src="/lam.png"
              alt="Logo LAM"
              width={55}
              height={55}
              className="mr-3 rounded-full"
            />
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white">
              Centro LAM
            </h2>
          </div>

          <p className="text-base font-semibold text-gray-400 mb-3 uppercase tracking-wide">
            Seguinos
          </p>
          <Link
            href="https://www.instagram.com/lamcentro/"
            target="_blank"
            className="text-agua hover:text-white transition duration-300 transform hover:scale-110"
            aria-label="Síguenos en Instagram"
          >
            <Instagram size={36} />
          </Link>
        </div>

        {/* COLUMNA DERECHA: CONTACTO */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-bold uppercase text-agua tracking-wide mb-2">
            Contacto
          </h3>

          {/* HORARIOS */}
          <div className="flex items-start">
            <Clock size={24} className="text-agua mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-base leading-relaxed">
                <span className="font-semibold text-white">
                  Lunes, Miércoles y Viernes: 08:00 a 20:00hs
                </span>
              </p>
              <p className="text-base leading-relaxed mt-1">
                <span className="font-semibold text-white">
                  Martes y Jueves: 10:00 a 20:00hs
                </span>
              </p>
            </div>
          </div>

          {/* TELÉFONO */}
          <div className="flex items-center">
            <Phone size={24} className="text-agua mr-3 flex-shrink-0" />
            <p className="text-base">
              <strong className="text-white">Recepción:</strong> +54 2215256816
            </p>
          </div>

          {/* UBICACIÓN */}
          <div className="flex items-start">
            <MapPin size={24} className="text-agua mr-3 flex-shrink-0 mt-1" />
            <p className="text-base text-white leading-snug">
              Plaza 19 de Noviembre e/ Diag. 96 y 25, La Plata, Bs.As.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* COPYRIGHT */}
    <div className="mt-8 border-t border-gray-700 pt-4 text-center">
      <p className="text-sm text-gray-500 tracking-wide">
        © {new Date().getFullYear()} Centro LAM — Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default SiteFooter;