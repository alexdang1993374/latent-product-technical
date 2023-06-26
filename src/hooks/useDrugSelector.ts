import { TMedication } from "@/types";
import { create } from "zustand";

interface IDrugSelectorStore {
  selectedDrug: TMedication | undefined;
  setSelectedDrug: (selectedDrug: TMedication) => void;
}

const useDrugSelector = create<IDrugSelectorStore>((set) => ({
  selectedDrug: undefined,
  setSelectedDrug: (selectedDrug) => set({ selectedDrug }),
}));

export default useDrugSelector;
