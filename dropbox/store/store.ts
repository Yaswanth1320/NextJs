import { create } from 'zustand';

interface AppState {
  isDeleteModelOpen: boolean;
  setIsDeleteModelOpen: (open: boolean) => void;

  isRenameModelOpen: boolean;
  setIsRenameModelOpen: (open: boolean) => void;

  fileId: string | null;
  setFileId: (fileId: string) => void;

  fileName: string;
  setFileName: (fileName: string) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  fileId: null,
  setFileId: (fileId: string) => set((state) => ({ fileId })),

  fileName: "",
  setFileName: (fileName: string) => set((state) => ({ fileName })),

  isDeleteModelOpen: false,
  setIsDeleteModelOpen: (open) => set((state) => ({ isDeleteModelOpen: open })),

  isRenameModelOpen: false,
  setIsRenameModelOpen: (open) => set((state) => ({ isRenameModelOpen: open })),
}));