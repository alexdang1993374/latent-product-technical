import getUserDetials from "@/actions/getUserDetails";
import SignOut from "./SignOut";

const getUser = async () => {
  const data = await getUserDetials();

  return data;
};

const AccountContent = async () => {
  const user = await getUser();

  if (!user) {
    return (
      <div className="w-[200px]">
        <p>Sign in to see perscriptions</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div>Welcome {user.full_name}</div>

      <SignOut />
    </div>
  );
};

export default AccountContent;
