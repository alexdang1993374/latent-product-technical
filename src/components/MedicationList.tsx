"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import useDrugSelector from "@/hooks/useDrugSelector";
import { IMedicationResult, TMedication } from "@/types";
import Medication from "./Medication";

const MedicationList = () => {
  const drugSelector = useDrugSelector();
  const [medicationData, setMedicationData] = useState<IMedicationResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMedication = async (medication: TMedication) => {
      setLoading(true);
      const response = await axios.get(
        `https://api.fda.gov/drug/label.json?search=openfda.pharm_class_epc:%22{${medication}}%22&limit=100`
      );

      setMedicationData(response.data.results);
      setLoading(false);
    };

    if (drugSelector.selectedDrug) {
      fetchMedication(drugSelector.selectedDrug);
    }
  }, [drugSelector]);

  if (!medicationData) {
    return;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {medicationData.map((result: IMedicationResult, index: number) => (
        <Medication
          key={result.openfda.brand_name[0] + index}
          medication={result}
        />
      ))}
    </div>
  );
};

export default MedicationList;
