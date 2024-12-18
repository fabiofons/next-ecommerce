import NextAuth, { DefaultSession } from 'next-auth';
import { DateTime } from 'next-auth/providers/kakao';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified?: DateTime;
      role: string;
      image?: string;
    } & DefaultSession['user'];
  }
}
