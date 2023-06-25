"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import AccountIcon from "./AccountIcon";
import DrugSelector from "./DrugSelector";
import HomeLink from "./HomeLink";
import LogoLink from "./LogoLink";

const Nav = () => {
  const pathName = usePathname();
  const isAccountsPage = pathName === "/account";
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between fixed top-0 z-10 px-12 md:px-24 py-4 gap-1 ${
        isAccountsPage ? "flex-row" : "flex-col md:flex-row"
      } ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <LogoLink />

      {isAccountsPage ? <HomeLink /> : <DrugSelector />}

      <div className={isAccountsPage ? "block" : "hidden md:block"}>
        <AccountIcon />
      </div>
    </nav>
  );
};

export default Nav;
