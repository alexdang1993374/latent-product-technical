"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

const AccountIcon = () => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    return (
      <div onClick={authModal.onOpen} className="cursor-pointer">
        Sign in
      </div>
    );
  }

  return (
    <AccountCircleIcon
      fontSize="large"
      onClick={() => router.push("/account")}
      className="cursor-pointer"
    />
  );
};

export default AccountIcon;
