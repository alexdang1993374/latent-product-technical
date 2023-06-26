"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUserPrescriptions from "@/hooks/useUserPrescriptions";

interface ILikeButton {
  medicationName: string;
  fromPrescriptionList?: boolean;
}

const LikeButton = ({ medicationName, fromPrescriptionList }: ILikeButton) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const authModal = useAuthModal();
  const { user } = useUser();
  const userPrescriptions = useUserPrescriptions();

  const [isLiked, setIsLiked] = useState(fromPrescriptionList || false);

  useEffect(() => {
    if (!user?.id || fromPrescriptionList) {
      return;
    }

    const fetchPrescriptions = () => {
      for (let prescription of userPrescriptions.userPrescriptions) {
        if (prescription.medication === medicationName) {
          setIsLiked(true);
          return;
        }
      }
    };

    fetchPrescriptions();
  }, [
    medicationName,
    user?.id,
    userPrescriptions.userPrescriptions,
    fromPrescriptionList,
  ]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      userPrescriptions.setNeedsUpdate(true);
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
      userPrescriptions.setNeedsUpdate(true);
      const { error } = await supabaseClient.from("perscriptions").insert({
        id: uuidv4(),
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
