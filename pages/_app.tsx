import { AppProps } from 'next/app';
import Head from 'next/head'; // Importa el componente Head
import '../styles/globals.css'; // Asegúrate de que esta línea esté presente

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Centro LAM</title> {/* Título de la página */}
        <link rel="icon" href="/lam.png" sizes="32x32" /> {/* Ruta al ícono (favicon) */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;