"use server";

import { verifySession } from "@/auth/stateless-session";
import { db } from "@/drizzle/db";
import { UsersTable } from "@/drizzle/schemas/users";
import { eq } from "drizzle-orm";
import { cache } from "react";

export const getUser = cache(async () => {
  
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.id, session.userId));

    const user = data[0];

    return {
      username: user.username,
      email: user.email,
      isAdmin: user.role === "admin",
    };
  } catch {
    console.log("Failed to fetch user");
    return null;
  }
});
