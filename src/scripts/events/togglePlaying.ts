import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";

export const togglePlaying = (): void => {
  const { playing, current } = state;
  const { audio } = current;

  playing ? audio.play() : audio.pause();

  htmlElements.playButton.classList.toggle("playing", playing);
};
