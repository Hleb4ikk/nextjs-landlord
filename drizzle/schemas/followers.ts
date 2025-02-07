import { pgTable, uuid } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";

export const FollowersTable = pgTable("followers", {
    user_id: uuid("user_id").notNull().references(() => UsersTable.id),
    follower_id: uuid("follower_id").notNull().references(() => UsersTable.id),
});