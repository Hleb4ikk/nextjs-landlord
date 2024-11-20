import { pgTable, varchar, integer, uuid, timestamp } from 'drizzle-orm/pg-core';

export const UsersTable = pgTable("users", {

    id: uuid("user_id").primaryKey().defaultRandom(),
    username: varchar("username", {length: 128}).notNull(),
    email: varchar("email", {length: 256}).notNull(),
    age: integer("age").notNull(),
    hashedPassword: varchar("hashed_password", {length: 100}).notNull(),
    registeredAt: timestamp("registered_at").defaultNow(),
})