import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";
import { setCurrentAudio } from "./setCurrentAudio";
import { isAudioTrack } from "@scripts/helpers/utils";

export const handleClickPrev = (): void => {
  const { current } = state;

  if (!isAudioTrack(current)) {
    return;
  }

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
