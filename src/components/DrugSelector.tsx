"use client";

import useDrugSelector from "@/hooks/useDrugSelector";
import Button from "./Button";
import { drugs } from "@/constants/drugs";

const DrugSelector = () => {
  const drugSelector = useDrugSelector();

  return (
    <div className="w-full flex flex-row items-center justify-between gap-2">
      {drugs.map((drug) => (
        <Button
          key={drug.name}
          onClick={() => drugSelector.setSelectedDrug(drug.query)}
        >
          {drug.name}
        </Button>
      ))}
    </div>
  );
};

export default DrugSelector;
