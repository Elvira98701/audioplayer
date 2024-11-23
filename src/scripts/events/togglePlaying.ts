import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";
import { isAudioTrack } from "@scripts/helpers/utils";

export const togglePlaying = (): void => {
  const { current, playing } = state;

  if (!isAudioTrack(current)) {
    return;
  }
  const { audio } = current;

  if (audio) {
    playing ? audio.play() : audio.pause();
  }

  if (htmlElements.playButton) {
    htmlElements.playButton.classList.toggle("playing", playing);
  }
};
