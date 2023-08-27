'use client';

import { useRef, useEffect } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export const ComposeTextArea = () => {
  const { pending } = useFormStatus();

  const alreadySent = useRef(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textAreaRef.current) return;
    if (!pending && alreadySent.current) {
      alreadySent.current = false;
      textAreaRef.current.value = '';
      return;
    }
  }, [pending]);

  return (
    <textarea
      ref={textAreaRef}
      name='content'
      rows={4}
      className='w-full text-2xl bg-black placeholder-gray-500 p-2'
      placeholder='¡¿Whats happppppnd?!'
    />
  );
};
