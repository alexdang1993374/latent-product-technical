"use client";

import Image from "next/image";

import latentLogo from "../../public/latent.svg";
import AccountIcon from "./AccountIcon";

const LogoLink = () => {
  return (
    <div className="w-full md:w-20 h-10 flex items-center justify-between">
      <Image
        src={latentLogo}
        alt="Latent Logo"
        width={73}
        height={14}
        className="object-cover"
      />

      <div className="flex md:hidden justify-end">
        <AccountIcon />
      </div>
    </div>
  );
};

export default LogoLink;
