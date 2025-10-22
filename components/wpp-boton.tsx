import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5492215256816";
  const initialMessage = "Hola, me interesa iniciar mi rehabilitación.";

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
    initialMessage
  )}&type=phone_number&app_absent=0`;

  return (
    <div className="fixed bottom-6 right-6 z-[1000] group">
      {/* Botón principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center w-20 h-20 rounded-full text-white shadow-xl 
          bg-green-600 hover:bg-green-700 
          transition-all duration-300 hover:scale-110 focus:outline-none 
          focus:ring-4 focus:ring-green-300
        "
        aria-label="Abrir chat de WhatsApp para contactar"
      >
        {/* Icono más grande */}
        <MessageCircle size={40} strokeWidth={2} className="stroke-white" />
      </a>

      {/* Tooltip (mensaje flotante al hacer hover) */}
      <div
        className="
          absolute right-24 bottom-1/2 translate-y-1/2 
          opacity-0 group-hover:opacity-100 
          bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg
          transition-opacity duration-300
        "
      >
        Escribinos
      </div>
    </div>
  );
}
