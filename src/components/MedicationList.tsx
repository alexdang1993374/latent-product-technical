"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

import { removeDuplicates } from "@/helpers";
import useDrugSelector from "@/hooks/useDrugSelector";
import { useUser } from "@/hooks/useUser";
import useUserPrescriptions from "@/hooks/useUserPrescriptions";
import { IMedicationResult, TMedication } from "@/types";
import Default from "./Default";
import Medication from "./Medication";

const MedicationList = () => {
  const drugSelector = useDrugSelector();
  const [medicationData, setMedicationData] = useState<IMedicationResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  const { supabaseClient } = useSessionContext();
  const userPrescriptions = useUserPrescriptions();

  const medicationList: IMedicationResult[] = removeDuplicates(medicationData);

  useEffect(() => {
    if (drugSelector.selectedDrug) {
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

      fetchMedication(drugSelector.selectedDrug);

      return () => {
        isMounted = false;
      };
    }
  }, [drugSelector.selectedDrug]);

  useEffect(() => {
    if (!user || medicationData.length === 0 || loading) {
      return;
    }

    if (userPrescriptions.needsUpdate) {
      let isMounted = true;

      const fetchData = async () => {
        const { data, error } = await supabaseClient
          .from("perscriptions")
          .select("*")
          .eq("user_id", user.id);

        if (!error && data) {
          if (isMounted) {
            userPrescriptions.setUserPrescriptions(data);
            userPrescriptions.setNeedsUpdate(false);
          }
        }
      };

      fetchData();

      return () => {
        isMounted = false;
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, medicationData, userPrescriptions.needsUpdate, loading]);

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
