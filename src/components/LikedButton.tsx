"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { uuid } from "uuidv4";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

interface ILikeButton {
  medicationName: string;
}

const LikeButton = ({ medicationName }: ILikeButton) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const authModal = useAuthModal();
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("perscriptions")
        .select("*")
        .eq("user_id", user.id)
        .eq("medication", medicationName)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    };

    fetchData();
  }, [medicationName, supabaseClient, user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from("perscriptions")
        .delete()
        .eq("user_id", user.id)
        .eq("medication", medicationName);

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(false);
      }
    } else {
      const { error } = await supabaseClient.from("perscriptions").insert({
        id: uuid(),
        medication: medicationName,
        user_id: user.id,
      });

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(true);
        toast.success("Added to prescriptions!");
      }
    }

    router.refresh();
  };

  return (
    <button
      className="hover:opacity-75 transition"
      onClick={(e) => handleLike(e)}
    >
      <Icon color={isLiked ? "#22c55e" : "#ffffff"} size={25} />
    </button>
  );
};

export default LikeButton;
