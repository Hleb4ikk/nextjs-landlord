import { pgTable, varchar, integer, uuid, timestamp } from 'drizzle-orm/pg-core';
import { UserRole } from './user-role';
import { relations } from 'drizzle-orm';
import { FollowersTable } from './followers';
export const UsersTable = pgTable('users', {
  id: uuid('user_id').primaryKey().defaultRandom(),
  username: varchar('username', { length: 128 }).notNull(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  age: integer('age').notNull(),
  hashedPassword: varchar('hashed_password').notNull(),
  role: UserRole().default('user').notNull(),
  registeredAt: timestamp('registered_at').defaultNow(),
});

export const UsersRelations = relations(UsersTable, ({ many }) => ({
  followers: many(FollowersTable, { relationName: 'user_followers' }),
  following: many(FollowersTable, { relationName: 'user_following' }),
}));
