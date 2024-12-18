import { auth } from '@/auth.config';
import { Title } from '@/components';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  return (
    <div className="flex flex-col min-h-dvh py-2">
      <Title title="Profile" />
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
      <h2 className="text-3xl font-bold">{session.user.role}</h2>
    </div>
  );
}
