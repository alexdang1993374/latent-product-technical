"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

import { removeDuplicates } from "@/helpers";
import useDrugSelector from "@/hooks/useDrugSelector";
import { IMedicationResult, TMedication } from "@/types";
import Default from "./Default";
import Medication from "./Medication";

const MedicationList = () => {
  const drugSelector = useDrugSelector();
  const [medicationData, setMedicationData] = useState<IMedicationResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const medicationList: IMedicationResult[] = removeDuplicates(medicationData);

  useEffect(() => {
    let isMounted = true;

    const fetchMedication = async (medication: TMedication) => {
      if (isMounted) {
        setLoading(true);
      }

      const response = await axios.get(
        `https://api.fda.gov/drug/label.json?search=openfda.pharm_class_epc:%22{${medication}}%22&limit=100`
      );

      if (isMounted) {
        setMedicationData(response.data.results);
        setLoading(false);
      }
    };

    if (drugSelector.selectedDrug) {
      fetchMedication(drugSelector.selectedDrug);
    }

    return () => {
      isMounted = false;
    };
  }, [drugSelector]);

  if (medicationData.length === 0 && !loading) {
    return <Default />;
  }

  if (loading) {
    return (
      <div className="w-full flex justify-center">
        <BounceLoader color="#ffffff" speedMultiplier={2} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 text-left">
      <p className="text-xl mb-4 font-bold">Click to see details</p>

      {medicationList.map((result: IMedicationResult, index: number) => (
        <Medication
          key={result.openfda.brand_name[0] + index}
          medication={result}
          isLast={index === medicationList.length - 1}
        />
      ))}
    </div>
  );
};

export default MedicationList;
