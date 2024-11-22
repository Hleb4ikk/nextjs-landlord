import 'dotenv/config';
import { db } from './db'
import { UsersTable } from './schemas/users';
import { AdvertisementsTable } from './schemas/advertisements';
import { eq } from 'drizzle-orm';

async function main() {

  const user: typeof UsersTable.$inferInsert = {
    username: 'testUser',
    email: 'test@test.com',
    age: 18,
    hashedPassword: "test12345",
    role: 'user',

  };
  await db.insert(UsersTable).values(user);

  const userIdResult = await db
  .select({ id: UsersTable.id })
  .from(UsersTable)
  .where(eq(UsersTable.email, 'test@test.com'))
  .execute();

  const userId = userIdResult[0].id;

  const advertisement: typeof AdvertisementsTable.$inferInsert = {

    authorId: userId,
    title: 'testAd',
    description: 'testAdDescription',

  }

  await db.insert(AdvertisementsTable).values(advertisement)

  // await db.insert(UsersTable).values(user);
  // console.log('New user created!');

//   const users = await db.select().from(usersTable);
//   console.log('Getting all users from the database: ', users)
  
//   const users: {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }[]
  

//   await db
//     .update(usersTable)
//     .set({
//       age: 31,
//     })
//     .where(eq(usersTable.email, user.email));
//   console.log('User info updated!')
  // await db.delete(UsersTable)
  // console.log('User deleted!')
}
main();
//npx tsx drizzle/seed.ts