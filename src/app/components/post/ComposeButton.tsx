'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export const ComposeButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end'>
      {pending ? '...' : 'Post'}
    </button>
  );
};
