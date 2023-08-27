'use client';
import {
  createClientComponentClient,
  type Session,
} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';

import { GitHubIcon } from './Icons';

interface Props {
  session: Session | undefined;
}

export const AuthButton = ({ session }: Props) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header>
      {!session ? (
        <button
          type='button'
          onClick={handleSignIn}
          className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2'>
          <GitHubIcon />
          Sign in with Github
        </button>
      ) : (
        <Button onClick={handleSignOut}>Sign Out</Button>
      )}
    </header>
  );
};
