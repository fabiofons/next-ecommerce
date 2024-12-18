import { titleFonts } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';
import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function () {
  const session = await auth();

  if (session?.user) {
    redirect('/');
  }

  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFonts.className} text-4xl mb-5`}>Log in</h1>
      <LoginForm />
    </div>
  );
}
