import { TMedication } from "@/types";
import axios from "axios";

const fetchMedication = async (medication: TMedication) => {
  const response = await axios.get(
    `https://api.fda.gov/drug/label.json?search=openfda.pharm_class_epc:%22{${medication}}%22&limit=100`
  );

  return response.data.results;
};

interface MedicationListProps {
  medication: TMedication;
}

const MedicationList = async ({ medication }: MedicationListProps) => {
  const data = await fetchMedication(medication);
  return (
    <div>
      {data.map((result: any, index: any) => (
        <div key={"medication" + index}>
          <div>{result.openfda.brand_name[0]}</div>
        </div>
      ))}
    </div>
  );
};

export default MedicationList;
