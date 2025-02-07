import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle/migrations",
  schema: [
    "./drizzle/schemas/users.ts",
    "./drizzle/schemas/advertisements.ts",
    "./drizzle/schemas/ad-images.ts",
    "./drizzle/schemas/user-role.ts",
    "./drizzle/schemas/followers.ts",
  ],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
