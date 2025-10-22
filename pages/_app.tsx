import { AppProps } from 'next/app';
import Head from 'next/head';
import SiteHeader from '@/components/site-header'; 
import { WhatsAppButton } from '@/components/wpp-boton'; 
import '../globals.css'; 
import SiteFooter from "@/components/site-footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 🚨 CAMBIO CLAVE: Usamos 'flex flex-col' y 'min-h-screen' en el contenedor exterior.
    <div className="min-h-screen flex flex-col">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <title>LAM | Centro de Rehabilitación</title>
        <link rel="icon" href="/lam.png" />
      </Head>
      
      {/* 🚨 Header siempre arriba */}
      <SiteHeader /> 
      
      {/* 🚨 El wrapper del contenido DEBE usar 'flex-grow' para ocupar el espacio central restante */}
      <div className="flex-grow background animated-gradient">
        <Component {...pageProps} />
      </div>
      
      {/* Footer se adhiere al final del contenido/ventana */}
      <SiteFooter />
      
      {/* Botón flotante siempre visible, fuera de la estructura flexbox de la página */}
      <WhatsAppButton />
      
    </div>
  );
}

export default MyApp;
