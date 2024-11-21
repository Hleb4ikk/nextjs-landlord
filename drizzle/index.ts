import 'dotenv/config';
import { db } from './db'
// import { eq } from 'drizzle-orm';
import { UsersTable } from './schemas/users';

async function main() {

  // const user: typeof UsersTable.$inferInsert = {
  //   username: 'hlebor',
  //   email: 'hlebor2006@mail.ru',
  //   age: 18,
  //   hashedPassword: "03012006"
  // };

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
  await db.delete(UsersTable)
  console.log('User deleted!')
}
main();
//npx tsx drizzle/index.ts