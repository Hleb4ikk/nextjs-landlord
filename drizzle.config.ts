import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle/migrations",
  schema: [
    "./drizzle/schemas/users.ts",
    "./drizzle/schemas/advertisements.ts",
    "./drizzle/schemas/ad-images.ts",
  ],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
