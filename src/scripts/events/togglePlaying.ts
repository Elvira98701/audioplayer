import { htmlElements } from "@scripts/helpers/htmlElements";
import { state } from "@scripts/helpers/state";
import { TrackType } from "@scripts/helpers/types";

export const togglePlaying = (): void => {
  const playing = state.playing;
  const current = state.current as TrackType;
  const audio = current.audio;

  if (audio) {
    playing ? audio.play() : audio.pause();
  }

  if (htmlElements.playButton) {
    htmlElements.playButton.classList.toggle("playing", playing);
  }
};