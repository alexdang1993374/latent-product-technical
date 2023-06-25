import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { IPerscription } from "@/types";

const getPerscriptions = async (): Promise<IPerscription[]> => {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("perscriptions")
    .select("*")
    .eq("user_id", session?.user?.id)
    .order("created_at", { ascending: true });

  if (error) {
    console.log(error);
    return [];
  }

  if (!data) {
    return [];
  }

  return data;
};

export default getPerscriptions;
