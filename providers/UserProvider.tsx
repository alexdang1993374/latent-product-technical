"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { ReactNode } from "react";

interface IUserProvider {
  children: ReactNode;
}

const UserProvider = ({ children }: IUserProvider) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
