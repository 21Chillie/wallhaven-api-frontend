import { create } from "zustand";
import type { WallhavenWallpaper } from "~/types/apiResponse.type";

type ModalWallpaperStore = {
  modalData?: WallhavenWallpaper;
};

export const useModalWallpaperStore = create<ModalWallpaperStore>()(() => ({
  modalData: undefined,
}));

export function setModalData(modalData: WallhavenWallpaper) {
  useModalWallpaperStore.setState(() => ({ modalData }));
}

export function clearModalData() {
  useModalWallpaperStore.setState(() => ({ modalData: undefined }));
}
