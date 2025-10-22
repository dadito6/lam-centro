import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const handleClick = () => {
    console.log("Botón clicado");
    window.open("https://api.whatsapp.com/send/?phone=2215256816&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden hero-image-fade">
      {/* Imagen de fondo de ancho completo */}
      <div className="absolute inset-0">
        <Image
          src="/lam-afuera.jpg" // Reemplaza con la ruta de tu imagen
          alt="LAM Centro de Rehabilitación"
          fill
          rel='preload'
          className="object-cover opacity-90"
          priority
        />
        {/* Overlay oscuro para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenido superpuesto (centrado) */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl font-bold text-white max-w-2xl mb-8 md:text-7xl lg:text-8xl">
          Rehabilitación y Medicina Deportiva Especializada
        </h1>
        <p className="text-xl text-white/90 max-w-xl mb-10 md:text-2xl">
          Recuperá tu bienestar con nuestro equipo de profesionales especializados.
        </p>
        <Link
          href="https://api.whatsapp.com/send/?phone=2215256816&text&type=phone_number&app_absent=0"
          target="_blank"
          className="button text-white py-4 px-8 rounded-lg transition duration-300 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto mt-4 buton-programa"
        >
          Programa tu rehabilitación
        </Link>
      </div>
    </section>
  );
}