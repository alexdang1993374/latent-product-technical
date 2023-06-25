"use client";

import { transformString } from "@/helpers";
import useDrugSelector from "@/hooks/useDrugSelector";
import { MenuItem } from "@/types";
import Dropdown from "./Dropdown";

const DrugSelector = () => {
  const drugSelector = useDrugSelector();

  const sortOptions: MenuItem[] = [
    {
      label: "Tumor Necrosis Factor Blocker",
      onClick: () =>
        drugSelector.setSelectedDrug("Tumor+Necrosis+Factor+Blocker"),
    },
    {
      label: "Thiazide Diuretic",
      onClick: () => drugSelector.setSelectedDrug("Thiazide+Diuretic"),
    },
    {
      label: "Nonsteroidal Anti-inflammatory Drug",
      onClick: () =>
        drugSelector.setSelectedDrug("nonsteroidal+anti-inflammatory+drug"),
    },
  ];

  return (
    <div className="mt-2 md:mt-0">
      <Dropdown
        menuItems={sortOptions}
        buttonLabel={
          drugSelector.selectedDrug
            ? transformString(drugSelector.selectedDrug)
            : "Select a medication type"
        }
      />
    </div>
  );
};

export default DrugSelector;
