import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";
import { isAudioTrack } from "@scripts/helpers/utils";

export const activeAudio = () => {
  const { current } = state;

  if (!isAudioTrack(current)) {
    return;
  }

  const { id } = current;
  const activeElement = htmlElements.tracksList?.querySelector(
    `[data-id="${id}"]`
  );

  const allTracksElements = htmlElements.tracksList?.children;

  if (!allTracksElements) {
    return;
  }

  for (const trackElement of allTracksElements) {
    trackElement.classList.remove("active-track");
  }

  activeElement?.classList.add("active-track");
};
