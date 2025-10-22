import { AppProps } from 'next/app';
import Head from 'next/head';
import SiteHeader from '@/components/site-header';
import { WhatsAppButton } from '@/components/wpp-boton';
import '../globals.css';
import SiteFooter from "@/components/site-footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen flex flex-col gpu-accelerated">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
          <title>LAM | Centro de Rehabilitación</title>
          <link rel="icon" href="/lam.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        </Head>
        
        {/* Header siempre arriba */}
        <SiteHeader />
        
        {/* Contenido principal con scroll optimizado */}
        <main className="flex-grow background animated-gradient">
          <Component {...pageProps} />
        </main>
        
        {/* Footer al final */}
        <SiteFooter />
      </div>
      
      {/* Botón flotante de WhatsApp - FUERA del contenedor flex */}
      <WhatsAppButton />
    </>
  );
}

export default MyApp;