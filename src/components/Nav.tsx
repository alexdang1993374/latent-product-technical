"use client";

import { usePathname } from "next/navigation";

import AccountIcon from "./AccountIcon";
import DrugSelector from "./DrugSelector";
import HomeLink from "./HomeLink";
import LogoLink from "./LogoLink";

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav
      className={
        "w-full flex items-center justify-between fixed top-0 z-2 px-12 md:px-24 py-5 gap-1 bg-black " +
        (pathName === "/account" ? "flex-row" : "flex-col md:flex-row")
      }
    >
      <LogoLink />

      {pathName === "/account" ? <HomeLink /> : <DrugSelector />}

      <div className={pathName === "/account" ? "block" : "hidden md:block"}>
        <AccountIcon />
      </div>
    </nav>
  );
};

export default Nav;
