import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { IUserDetails } from "@/types";

const getUserDetials = async (): Promise<IUserDetails | undefined> => {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", session?.user?.id);

  if (error) {
    console.log(error);
    return;
  }

  if (!data) {
    return;
  }

  return data[0];
};

export default getUserDetials;
