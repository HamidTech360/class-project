import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import { mountStoreDevtool } from "simple-zustand-devtools";
import createAccountSlice from "./account";
import marketSlice from "./market";



export const useAccountWrapper = create<any>()(
    persist(
      (...a) => ({
        ...createAccountSlice(...a),
      }),
      {
        name: "app-account",
        storage: createJSONStorage(() => localStorage),
      }
    ),
    
);

export const useMarketWrapper = create<any>()(
  persist(
    (...b) => ({
      ...marketSlice(...b),
    }),
    {
      name: "app-market",
      storage: createJSONStorage(() => localStorage),
    }
  ),
  
);