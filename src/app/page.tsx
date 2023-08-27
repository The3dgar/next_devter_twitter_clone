import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { AuthButtonServer } from './components/auth';
import { ComposePost, PostsList } from './components/post';
import { Database } from './types/database';
import { IPost } from './types/IPost';

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false });

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <section className='max-w-[800px] w-full mx-auto border-l border-r border-white/30 min-h-screen'>
        <ComposePost userAvatarUrl={session.user.user_metadata.avatar_url} />
        <PostsList posts={posts as IPost[]} />
      </section>
      <AuthButtonServer />
    </main>
  );
}
