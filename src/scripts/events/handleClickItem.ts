import { state } from "@scripts/helpers/state";
import { setCurrentAudio } from "./setCurrentAudio";

export const handleClickItem = (event: Event): void => {
  const element = event.target as HTMLElement | null;

  if (!element) {
    return;
  }

  const playerItem: HTMLLIElement | null = element.closest(".player__item");

  if (!playerItem) {
    return;
  }

  const id = Number(playerItem.dataset.id);
  setCurrentAudio(id, state.audios);
};
