import Head from 'next/head';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; 
import SiteFooter from '@/components/site-footer';

// Define the types for the ContactInfo component's props
interface ContactInfoProps {
  icon: React.ReactNode; // Use React.ReactNode for the icon component
  label: string;
  value: string;
  link?: string; // The '?' makes the link prop optional
}


// 1. Componente Auxiliar: Información de Contacto
const ContactInfo = ({ icon, label, value, link }:ContactInfoProps) => (
  <div className="flex items-start mb-6">
    <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-lg font-semibold text-gray-800">{label}</p>
      {link ? (
        <Link href={link} className="text-gray-600 hover:text-blue-600 transition">
          {value}
        </Link>
      ) : (
        <p className="text-gray-600">{value}</p>
      )}
    </div>
  </div>
);



// 3. Componente de Página Principal (DEBE SER EXPORTADO POR DEFECTO)
export default function Contactanos() {
  const entradaImageUrl = "/lam-afuera.jpg"; 

  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex flex-col">
      <Head>
        <title>Contáctanos | CENTRO LAM</title>
      </Head>
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Contáctanos
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Rellena el formulario o utiliza nuestros canales directos.
        </p>

        <div className="flex flex-wrap lg:flex-nowrap gap-12 bg-white p-6 md:p-10 rounded-xl shadow-lg border border-gray-100">
          
          {/* Columna de Información Directa */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Información Directa</h2>

            {/* IMAGEN DE LA ENTRADA */}
            <div className="relative h-64 md:h-72 w-full mb-8 rounded-lg overflow-hidden shadow-md">
                <Image
                    src={entradaImageUrl} 
                    alt="Entrada del Centro LAM"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                />
            </div>
            
            {/* Detalles de Contacto */}
            <ContactInfo 
              icon={<Phone size={24} />} 
              label="Recepción" 
              value="+54 2215256816" 
              link="tel:+542215256816"
            />
            {/* ... otros ContactInfo ... */}
            
            <ContactInfo 
              icon={<MapPin size={24} />} 
              label="Ubicación" 
              value="Plaza 19 de Noviembre, La Plata" 
              link="https://www.google.com/maps/search/Centro+LAM+Kinesiologia+Y+Entrenamiento"
            />

            <ContactInfo 
              icon={<Instagram size={24} />} 
              label="Redes Sociales" 
              value="@lamcentro" 
              link="https://www.instagram.com/lamcentro/"
            />
          </div>

          {/* Columna de Formulario de Contacto */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Envíanos un Mensaje</h2>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nombre Completo" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <input 
                type="tel" 
                placeholder="Teléfono" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <textarea 
                placeholder="Tu Mensaje..." 
                rows={4} 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </main>
      

    </div>
  );
}