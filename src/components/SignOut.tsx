"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const SignOut = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    router.push("/");

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
  };

  return (
    <div className="h-[50vh] flex justify-center items-center">
      <button
        onClick={handleLogout}
        className="rounded-full bg-gray-500 py-2 px-4"
      >
        Log out
      </button>
    </div>
  );
};

export default SignOut;
