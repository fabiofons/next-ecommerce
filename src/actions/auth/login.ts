'use server';

import { AuthError } from 'next-auth';
import { signIn } from '@/auth.config';
import { sleep } from '@/utils';
// ...

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    console.log({ formData: Object.fromEntries(formData) });
    await sleep(2);
    await signIn('credentials', formData);
  } catch (error) {
    return 'Invalid credentials.';
  }
}
