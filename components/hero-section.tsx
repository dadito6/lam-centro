import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const handleClick = () => {
    console.log("Botón clicado");
    window.open("https://api.whatsapp.com/send/?phone=2215256816&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden hero-image-fade">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/lam-afuera.jpg" // Reemplaza con la ruta de tu imagen
          alt="LAM Centro de Rehabilitación"
          fill
          rel='preload'
          className="object-cover opacity-90" /* Reducir opacidad de la imagen */
          priority
        />
        {/* Overlay oscuro para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenido superpuesto */}
      <div className="relative container flex flex-col justify-center items-center text-center py-28">
        <h1 className="text-6xl font-bold text-white max-w-2xl mb-12">
          Rehabilitación y Medicina Deportiva Especializada
        </h1>
        <p className="text-2xl text-white/90 max-w-xl mb-16">
          Recuperá tu bienestar con nuestro equipo de profesionales especializados.
        </p>
        <Link
          href="https://api.whatsapp.com/send/?phone=2215256816&text&type=phone_number&app_absent=0"
          target="_blank"
          className=" button  text-white py-4 px-6 rounded-lg hover:bg-slate-800 transition w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto mt-6 buton-programa"
        >
          Programa tu rehabilitación
        </Link>
      </div>
    </section>
  );
}