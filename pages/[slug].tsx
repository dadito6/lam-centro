import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{slug}</h1>
      {/* Contenido de la página */}
    </div>
  );
};

export default Page;