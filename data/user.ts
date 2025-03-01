'use server';

import { verifySession } from '@/auth/stateless-session';
import { db } from '@/drizzle/db';
import { UsersTable } from '@/drizzle/schemas/users';
import { eq } from 'drizzle-orm';
import { cache } from 'react';

export const getSessionUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await db.select().from(UsersTable).where(eq(UsersTable.id, session.userId));

    const user = data[0];

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      isAdmin: user.role === 'admin',
      avatarKey: user.avatarKey,
      registeredAt: user.registeredAt,
    };
  } catch {
    console.log('Failed to fetch user');
    return null;
  }
});

export const fetchGeneralUserDataByUsername = cache(async (username: string) => {
  try {
    const data = await db
      .select({
        id: UsersTable.id,
        username: UsersTable.username,
        email: UsersTable.email,
        avatarKey: UsersTable.avatarKey,
        registeredAt: UsersTable.registeredAt,
      })
      .from(UsersTable)
      .where(eq(UsersTable.username, username));

    if (data.length == 0) return null;

    return data[0];
  } catch {
    console.log('Failed to fetch general user data');
    return null;
  }
});
