import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";
import { TrackType } from "@scripts/helpers/types";
import { setCurrentAudio } from "./setCurrentAudio";

export const handleClickPrev = (): void => {
  const current = state.current as TrackType;

  const currentItem = document.querySelector<HTMLLIElement>(
    `[data-id="${current.id}"]`
  );

  if (!currentItem) {
    console.warn("Error: Current item not found.");
    return;
  }

  const prevItem = currentItem.previousElementSibling as HTMLLIElement | null;
  const lastItem = htmlElements.tracksList
    ?.lastElementChild as HTMLLIElement | null;

  let prevItemId: string | undefined;

  if (prevItem) {
    prevItemId = prevItem.dataset.id;
  } else {
    prevItemId = lastItem?.dataset.id;
  }

  if (!prevItemId) {
    console.warn("Error: No prev item found.");
    return;
  }

  const parsedId = Number(prevItemId);

  if (isNaN(parsedId)) {
    console.warn(`Error: Invalid data-id value: "${prevItemId}".`);
    return;
  }
  setCurrentAudio(parsedId, state.audios);
};
