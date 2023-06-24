import { TMedication } from "@/types";
import { create } from "zustand";

interface IDrugSelectorStore {
  selectedDrug: TMedication | undefined;
  setSelectedDrug: (drug: TMedication) => void;
}

const useDrugSelector = create<IDrugSelectorStore>((set) => ({
  selectedDrug: undefined,
  setSelectedDrug: (drug) => set({ selectedDrug: drug }),
}));

export default useDrugSelector;
