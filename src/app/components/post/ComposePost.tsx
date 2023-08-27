'use client';

/* eslint-disable @next/next/no-img-element */
import { ComposeButton } from './ComposeButton';
import { addPost } from '@/app/actions';
import { useRef } from 'react';

interface Props {
  userAvatarUrl: string;
}

export const ComposePost = ({ userAvatarUrl }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addPost(formData);
        formRef.current?.reset();
      }}
      className='flex flex-row p-3 border-b border-white/20'>
      <img
        alt='user avatar'
        className='rounded-full w-10 h-10 object-contain mr-4'
        src={userAvatarUrl}
      />
      <div className='flex flex-1 flex-col gap-y-4'>
        {/* <ComposeTextArea /> */}
        <textarea
          name='content'
          rows={4}
          className='w-full text-2xl bg-black placeholder-gray-500 p-2'
          placeholder='¡¿Whats happppppnd?!'
        />
        <ComposeButton />
      </div>
    </form>
  );
};
