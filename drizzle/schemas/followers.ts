import { pgTable, uuid } from 'drizzle-orm/pg-core';
import { UsersTable } from './users';
import { primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
export const FollowersTable = pgTable(
  'followers',
  {
    user_id: uuid('user_id')
      .notNull()
      .references(() => UsersTable.id),
    follower_id: uuid('follower_id')
      .notNull()
      .references(() => UsersTable.id),
  },
  (table) => [primaryKey({ columns: [table.user_id, table.follower_id] })],
);

export const FollowersRelations = relations(FollowersTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [FollowersTable.user_id],
    references: [UsersTable.id],
  }),
  follower: one(UsersTable, {
    fields: [FollowersTable.follower_id],
    references: [UsersTable.id],
  }),
}));
