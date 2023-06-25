"use client";

import { useUser } from "@/hooks/useUser";
import SignOut from "./SignOut";

const AccountContent = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="w-[200px]">
        <p>Sign in to see perscriptions</p>
      </div>
    );
  }

  return (
    <div>
      <SignOut />
    </div>
  );
};

export default AccountContent;
