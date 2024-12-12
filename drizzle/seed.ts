import 'dotenv/config';
import { db } from './db'
import { UsersTable } from './schemas/users';
import { AdvertisementsTable } from './schemas/advertisements';
import { eq } from 'drizzle-orm';
import { encode_password } from '@/lib/hash';

async function main() {

  const user: typeof UsersTable.$inferInsert = {
    username: 'testUserWithHashedPassword',
    email: 'testHash@test.com',
    age: 18,
    hashedPassword: await encode_password('test12345'),
    role: 'user',

  };
  await db.insert(UsersTable).values(user);

  const userIdResult = await db
  .select({ id: UsersTable.id })
  .from(UsersTable)
  .where(eq(UsersTable.email, 'testHash@test.com'))
  .execute();

  const userId = userIdResult[0].id;

  const advertisement: typeof AdvertisementsTable.$inferInsert = {

    authorId: userId,
    title: 'testAdOfHashedUser',
    description: 'testAdDescription',

  }

  await db.insert(AdvertisementsTable).values(advertisement)
}
main();
//npx tsx drizzle/seed.ts