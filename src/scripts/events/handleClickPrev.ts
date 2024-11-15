import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";
import { setCurrentAudio } from "./setCurrentAudio";

export const handleClickPrev = (): void => {
  const { current } = state;

  const currentItem = document.querySelector(`[data-id="${current.id}"]`);
  const prev = currentItem.previousElementSibling?.dataset;
  const last = htmlElements.tracksList.lastElementChild?.dataset;

  let itemId = prev?.id || last?.id;

  if (!itemId) return;

  itemId = Number(itemId);
  setCurrentAudio(itemId, state.audios);
};
