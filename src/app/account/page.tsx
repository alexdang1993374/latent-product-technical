import getUserDetials from "@/actions/getUserDetails";
import PerscriptionsTable from "@/components/PerscriptionsTable";
import SignOut from "@/components/SignOut";

const getUser = async () => {
  const data = await getUserDetials();

  return data;
};

const AccountPage = async () => {
  const user = await getUser();

  if (!user) {
    return (
      <div className="w-[200px] h-[50vh] flex items-center">
        <p>Sign in to see perscriptions</p>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full h-full flex flex-col gap-5">
        {user.full_name && (
          <div className="text-center">Welcome {user.full_name}</div>
        )}

        <PerscriptionsTable />

        <SignOut />
      </div>
    </div>
  );
};

export default AccountPage;
