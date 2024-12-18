'use client';

import { login, registerUser } from '@/actions';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { name, email, password } = data;
    setErrorMessage('');

    const resp = await registerUser(name, email, password);
    if (!resp.ok) {
      setErrorMessage(resp.message ?? 'Miamiau maiau');
      return;
    }

    await login(email.toLowerCase(), password);

    window.location.replace('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {/* {errors.name && <span className="text-red-500 text-sm">* Name is required</span>} */}
      <label htmlFor="email">Name</label>
      <input
        className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
          'border-red-500': !!errors.name,
        })}
        type="text"
        autoFocus
        placeholder="Type your full name"
        {...register('name', { required: true })}
      />
      <label htmlFor="email">Email</label>
      <input
        className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
          'border-red-500': !!errors.email,
        })}
        type="email"
        placeholder="Type your email here"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="password">Password</label>
      <input
        className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
          'border-red-500': !!errors.password,
        })}
        type="password"
        placeholder="Type your password here"
        {...register('password', { required: true })}
      />

      <span className="text-red-500 text-sm mb-3">{errorMessage}</span>

      <button className="btn-primary">Create account</button>

      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Do you have an account? Login
      </Link>
    </form>
  );
}
