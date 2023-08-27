'use server';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const addPost = async (formData: FormData) => {
  const content = formData.get('content');
  if (!content) return;

  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from('posts').insert({ content, user_id: user.id });
  
  revalidatePath('/');
};