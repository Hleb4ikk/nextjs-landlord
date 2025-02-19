import { pgTable, varchar, integer, uuid, timestamp } from 'drizzle-orm/pg-core';
import { UserRole } from './user-role';
import { url } from 'inspector';
export const UsersTable = pgTable('users', {
  id: uuid('user_id').primaryKey().defaultRandom(),
  username: varchar('username', { length: 128 }).notNull(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  age: integer('age').notNull(),
  hashedPassword: varchar('hashed_password').notNull(),
  avatarPath: varchar('avatar_path', { length: 1024 }),
  role: UserRole().default('user').notNull(),
  registeredAt: timestamp('registered_at').defaultNow(),
});
