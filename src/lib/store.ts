import { create } from "zustand";

type GlobalStoreState = {
  ports: number[];
};

type GlobalStoreActions = {
  addPort: (port: number) => void;
};

type GlobalStore = GlobalStoreActions & GlobalStoreState;

const useGlobalStore = create<GlobalStore>((set) => ({
  ports: [],
  addPort: (port) => set((state) => ({ ports: [...state.ports, port] })),
}));

export default useGlobalStore;
