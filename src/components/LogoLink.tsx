"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import latentLogo from "../../public/latent.svg";

const LogoLink = () => {
  const router = useRouter();
  return (
    <div
      className="w-20 h-10 flex items-center cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        src={latentLogo}
        alt="Latent Logo"
        width={73}
        height={14}
        className="object-cover"
      />
    </div>
  );
};

export default LogoLink;
