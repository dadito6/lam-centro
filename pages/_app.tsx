import { AppProps } from 'next/app';
import '../styles/globals.css'; // Asegúrate de que esta línea esté presente
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;