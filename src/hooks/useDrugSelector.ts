import { TMedication } from "@/types";
import { create } from "zustand";

interface IDrugSelectorStore {
  selectedDrug: TMedication | null;
  setSelectedDrug: (drug: TMedication) => void;
}

const useDrugSelector = create<IDrugSelectorStore>((set) => ({
  selectedDrug: null,
  setSelectedDrug: (drug) => set({ selectedDrug: drug }),
}));

export default useDrugSelector;
