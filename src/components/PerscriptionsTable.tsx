import getPerscriptions from "@/actions/getPerscriptions";
import LikedButton from "./LikedButton";

const getPerscriptionList = async () => {
  const data = await getPerscriptions();

  return data;
};

const PerscriptionsTable = async () => {
  const perscriptions = await getPerscriptionList();

  return (
    <div className="flex flex-col w-[350px] md:w-[600px]">
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
                    Your Prescriptions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {perscriptions.map((perscription) => (
                  <tr key={perscription.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex justify-between items-center">
                      <div className="w-[250px] md:w-[500px]">
                        <p className="truncate">{perscription.medication}</p>
                      </div>

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
  );
};

export default PerscriptionsTable;
