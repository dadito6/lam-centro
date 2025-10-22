import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5492215256816";
  const initialMessage = "Hola, me interesa iniciar mi rehabilitación.";

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
    initialMessage
  )}&type=phone_number&app_absent=0`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] group">
      {/* Botón principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full text-white shadow-2xl 
          bg-green-500 hover:bg-green-600 
          transition-all duration-300 hover:scale-110 focus:outline-none 
          focus:ring-4 focus:ring-green-300
          animate-bounce-slow
        "
        aria-label="Abrir chat de WhatsApp para contactar"
        style={{ willChange: 'transform' }}
      >
        {/* Icono */}
        <MessageCircle size={32} strokeWidth={2.5} className="stroke-white md:w-10 md:h-10" />
      </a>

      {/* Tooltip (mensaje flotante al hacer hover) */}
      <div
        className="
          absolute right-20 md:right-24 bottom-1/2 translate-y-1/2 
          opacity-0 group-hover:opacity-100 pointer-events-none
          bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-xl
          transition-opacity duration-300 whitespace-nowrap
        "
      >
        ¡Escribinos!
      </div>
    </div>
  );
}