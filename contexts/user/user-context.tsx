"use client";

import { UserDefinition } from "@/auth/definitions";
import React, { createContext, useContext } from "react";

const UserContext = createContext<UserDefinition>(null);

export const UserProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserDefinition;
}) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
