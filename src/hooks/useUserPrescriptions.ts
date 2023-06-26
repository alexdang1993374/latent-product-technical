import { create } from "zustand";

import { IPerscription } from "@/types";

interface IUserPrescriptionsStore {
  userPrescriptions: IPerscription[];
  setUserPrescriptions: (userPrescriptions: IPerscription[]) => void;
  needsUpdate: boolean;
  setNeedsUpdate: (needsUpdate: boolean) => void;
}

const useUserPrescriptions = create<IUserPrescriptionsStore>((set) => ({
  userPrescriptions: [],
  setUserPrescriptions: (userPrescriptions) => set({ userPrescriptions }),
  needsUpdate: true,
  setNeedsUpdate: (needsUpdate) => set({ needsUpdate }),
}));

export default useUserPrescriptions;
