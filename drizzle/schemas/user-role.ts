import { pgEnum } from "drizzle-orm/pg-core";

export const UserRole = pgEnum("userRoles", ["admin", "user"])