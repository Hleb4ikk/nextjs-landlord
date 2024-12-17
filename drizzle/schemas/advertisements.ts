import { UsersTable } from './users';
import { pgTable, timestamp, varchar, uuid } from 'drizzle-orm/pg-core';

export const AdvertisementsTable = pgTable("advertisements", {

    id: uuid("advertisement_id").primaryKey().defaultRandom(),
    authorId: uuid("author_id").notNull().references(()=> UsersTable.id),
    title: varchar("title", {length: 255}).notNull(),
    description: varchar("description", {length: 1024}).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
})