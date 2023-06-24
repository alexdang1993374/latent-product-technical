"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import Image from "next/image";

import useDrugSelector from "@/hooks/useDrugSelector";
import { IMedicationResult, TMedication } from "@/types";
import Medication from "./Medication";
import latentLogo from "../../public/latent.svg";

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

  if (medicationData.length === 0 && !loading) {
    return (
      <div className="w-full h-full flex justify-center items-center flex-col gap-16">
        <div>
          <Image
            src={latentLogo}
            alt="Latent Logo"
            width={334}
            height={64}
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xl">
            Building Medical Language Models to automate hospital operations,
            starting with insurance authorizations
          </p>
        </div>
      </div>
    );
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
