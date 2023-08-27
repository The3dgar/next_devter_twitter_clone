import { AuthButtonServer } from '../components/auth';

export default async function Login() {

  return (
    <section className='grid place-content-center min-h-screen'>
      <h1 className='text-xl font-bold mb-4 text-center'>Iniciar Sesión</h1>
      <AuthButtonServer/>
    </section>
  );
}