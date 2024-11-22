import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";
import { IAudioTrack } from "@scripts/helpers/types";
import { setCurrentAudio } from "./setCurrentAudio";

export const handleClickNext = (): void => {
  const current = state.current as IAudioTrack;

  const currentItem = document.querySelector<HTMLLIElement>(
    `[data-id="${current.id}"]`
  );

  if (!currentItem) {
    console.warn("Error: Current item not found.");
    return;
  }

  const nextItem = currentItem.nextElementSibling as HTMLLIElement | null;
  const firstItem = htmlElements.tracksList
    ?.firstElementChild as HTMLLIElement | null;

  let nextItemId: string | undefined;

  if (nextItem) {
    nextItemId = nextItem.dataset.id;
  } else {
    nextItemId = firstItem?.dataset.id;
  }

  if (!nextItemId) {
    console.warn("Error: No next item found.");
    return;
  }

  const parsedId = Number(nextItemId);

  if (isNaN(parsedId)) {
    console.warn(`Error: Invalid data-id value: "${nextItemId}".`);
    return;
  }
  setCurrentAudio(parsedId, state.audios);
};
