import { create } from "zustand";

type GlobalStoreState = {
  ports: number[];
  isRecording: boolean;
};

type GlobalStoreActions = {
  addPort: (port: number) => void;
  toggleRecording: () => void;
};

type GlobalStore = GlobalStoreActions & GlobalStoreState;

const useGlobalStore = create<GlobalStore>((set) => ({
  ports: [],
  isRecording: false,
  addPort: (port) => set((state) => ({ ports: [...state.ports, port] })),
  toggleRecording: () => set((state) => ({ isRecording: !state.isRecording })),
}));

export default useGlobalStore;
