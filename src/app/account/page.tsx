import AccountIcon from "@/components/AccountIcon";
import HomeLink from "@/components/HomeLink";
import LogoLink from "@/components/LogoLink";
import SignOut from "@/components/SignOut";

const AccountPage = () => {
  return (
    <>
      <nav className="w-full flex flex-col md:flex-row items-center justify-between fixed top-0 z-2 px-24 py-5 gap-1 bg-black">
        <LogoLink />

        <HomeLink />

        <AccountIcon />
      </nav>

      <SignOut />
    </>
  );
};

export default AccountPage;
