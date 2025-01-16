import { AppProps } from 'next/app';
import Head from 'next/head';
import '../globals.css'; // Asegúrate de importar el archivo de estilos

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
     <Head>
  <title>    LAM </title>
  <link rel="icon" href="/lam.png" />
</Head>
      <div className="background animated-gradient"> {/* Fondo animado */}
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;