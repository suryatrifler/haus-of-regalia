import { create } from "zustand";

type State = {
  open: (url: string) => void;
  close: () => void;
  url: string | null;
  isOpen: boolean;
};

export const useShareDialog = create<State>((set) => ({
  url: null,
  isOpen: false,
  open: (url) => set({ url, isOpen: true }),
  close: () => set({ url: null, isOpen: false }),
}));
