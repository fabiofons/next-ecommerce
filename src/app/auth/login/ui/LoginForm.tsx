'use client';

import { authenticate } from '@/actions';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useActionState, useEffect } from 'react';
import { IoWarningOutline } from 'react-icons/io5';

export const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(authenticate, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state === 'Success') {
      // router.replace('/');
      // router.refresh();
      window.location.href = '/';
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
        placeholder="Type your email"
        required
      />

      <label htmlFor="email">Password</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
        placeholder="Type your password"
        required
      />

      <LoginButton isPending={isPending} />
      <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
        {state === 'CredentialsSignin' && (
          <>
            <IoWarningOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">Invalid credentials.</p>
          </>
        )}
      </div>

      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Create a new account
      </Link>
    </form>
  );
};

function LoginButton({ isPending }: { isPending: boolean }) {
  return (
    <button
      type="submit"
      className={clsx({
        'btn-primary': !isPending,
        'btn-disabled': isPending,
      })}
      aria-disabled={isPending}
    >
      Log in
    </button>
  );
}
