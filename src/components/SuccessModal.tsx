// components/SuccessModal.tsx
'use client';

import { useRouter } from 'next/navigation';
import { CircleCheck } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

type Props = {
  message?: string;
};

export const SuccessModal: React.FC<Props> = ({ message = 'Your application has been updated successfully' }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 0); // Trigger fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
      aria-live="assertive"
      role="alert"
    >
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg text-center">
        <CircleCheck className="h-12 w-12 text-green-500 mx-auto" />
        <h2 className="mt-4 text-xl font-semibold text-gray-900">Success!</h2>
        <p className="mt-2 text-gray-600">{message}</p>
        <div className="mt-6">
          <Button
            onClick={() => router.push('/login')}
            className="rounded-full bg-indigo-600 px-8 py-2 text-white hover:bg-indigo-500"
          >
            Return to Login
          </Button>
        </div>
      </div>
    </div>
  );
};
