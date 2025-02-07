import {
  pgTable,
  varchar,
  integer,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";
import { UserRole } from "./user-role";
// import { relations } from "drizzle-orm";

export const UsersTable = pgTable("users", {
  id: uuid("user_id").primaryKey().defaultRandom(),
  username: varchar("username", { length: 128 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  age: integer("age").notNull(),
  hashedPassword: varchar("hashed_password").notNull(),
  // followers: uuid("author_id").notNull(),
  role: UserRole().default("user").notNull(),
  registeredAt: timestamp("registered_at").defaultNow(),
});

// export const usersRelations = relations(UsersTable, ({one}) => ({
//    invitee



// }))