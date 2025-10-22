// components/WhatsAppButton.tsx
import Link from 'next/link';
import { MessageCircle } from 'lucide-react'; // Asegúrate de tener lucide-react instalado

export function WhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=2215256816&text=Hola,%20me%20interesa%20iniciar%20mi%20rehabilitación.&type=phone_number&app_absent=0";

  return (
    // Fijo en la esquina inferior derecha y z-index alto
    <div className="fixed bottom-6 right-6 z-[1000]"> 
      <Link href={whatsappUrl} target="_blank" passHref legacyBehavior>
        <a 
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full text-white shadow-xl 
                     transition-transform duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none"
          aria-label="Contactar por WhatsApp"
        >
          {/* El icono de mensaje de Lucide */}
          <MessageCircle size={32} className="fill-white stroke-0" />
        </a>
      </Link>
    </div>
  );
}