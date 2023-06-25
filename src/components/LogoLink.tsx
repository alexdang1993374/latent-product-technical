"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import latentLogo from "../../public/latent.svg";
import AccountIcon from "./AccountIcon";

const LogoLink = () => {
  const router = useRouter();
  const pathName = usePathname();

  const goHome = () => {
    if (pathName !== "/account") {
      return;
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-full md:w-20 h-10 flex items-center justify-between">
      <div
        className={pathName === "/account" ? "cursor-pointer" : ""}
        onClick={goHome}
      >
        <Image
          src={latentLogo}
          alt="Latent Logo"
          width={73}
          height={14}
          className="object-cover"
        />
      </div>

      <div className="flex md:hidden justify-end">
        <AccountIcon />
      </div>
    </div>
  );
};

export default LogoLink;
