import getPerscriptions from "@/actions/getPerscriptions";
import getUserDetials from "@/actions/getUserDetails";
import LikedButton from "./LikedButton";
import SignOut from "./SignOut";

const getUser = async () => {
  const data = await getUserDetials();

  return data;
};

const getPerscriptionList = async () => {
  const data = await getPerscriptions();

  return data;
};

const AccountContent = async () => {
  const user = await getUser();
  const perscriptions = await getPerscriptionList();

  if (!user) {
    return (
      <div className="w-[200px]">
        <p>Sign in to see perscriptions</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-5">
      {user.full_name && (
        <div className="text-center">Welcome {user.full_name}</div>
      )}

      <div className="flex flex-col min-w-[350px]">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider text-center"
                    >
                      Your Perscriptions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {perscriptions.map((perscription) => (
                    <tr key={perscription.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex justify-between items-center">
                        {perscription.medication}

                        <LikedButton medicationName={perscription.medication} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <SignOut />
    </div>
  );
};

export default AccountContent;
