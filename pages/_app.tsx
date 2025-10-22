import { AppProps } from 'next/app';
import Head from 'next/head';
// 🚨 IMPORTAMOS EL HEADER Y EL BOTÓN DE WHATSAPP
import  SiteHeader  from '@/components/site-header'; 
import { WhatsAppButton } from '@/components/wpp-boton'; 
import '../globals.css'; // Asegúrate de importar el archivo de estilos

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
     <Head>
       <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
       <title>LAM | Centro de Rehabilitación</title>
       <link rel="icon" href="/lam.png" />
     </Head>
      <div className="background animated-gradient">
        {/* 🚨 AGREGAMOS EL HEADER AQUÍ PARA QUE ENVUELVA TODAS LAS PÁGINAS */}
        <SiteHeader /> 
        
        {/* El componente de la página actual (Home, Especialidad, etc.) */}
        <Component {...pageProps} />
        
        {/* El botón flotante de WhatsApp siempre visible */}
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default MyApp;
