import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";
import { setCurrentAudio } from "./setCurrentAudio";

export const handleClickNext = (): void => {
  const { current } = state;

  const currentItem = document.querySelector(`[data-id="${current.id}"]`);

  if (!currentItem) return;

  const next = currentItem.nextElementSibling?.dataset;
  const first = htmlElements.tracksList?.firstElementChild?.dataset;

  let itemId = next?.id || first?.id;

  if (!itemId) return;

  itemId = Number(itemId);
  setCurrentAudio(itemId, state.audios);
};
