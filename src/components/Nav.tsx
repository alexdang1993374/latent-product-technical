"use client";

import { usePathname } from "next/navigation";

import AccountIcon from "./AccountIcon";
import DrugSelector from "./DrugSelector";
import HomeLink from "./HomeLink";
import LogoLink from "./LogoLink";

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between fixed top-0 z-2 px-24 py-5 gap-1 bg-black">
      <LogoLink />

      {pathName === "/account" ? <HomeLink /> : <DrugSelector />}

      <div className="hidden md:block">
        <AccountIcon />
      </div>
    </nav>
  );
};

export default Nav;
