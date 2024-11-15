import { state } from "@scripts/helpers/state";
import { setCurrentAudio } from "./setCurrentAudio";

export const handleClickItem = ({ target }): void => {
  const playerItem = target.closest(".player__item");

  if (!playerItem) {
    return;
  }

  const id = Number(playerItem.dataset.id);
  setCurrentAudio(id, state.audios);
};
