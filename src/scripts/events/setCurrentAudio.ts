import { state } from "@scripts/helpers/state";
import { IAudioTrack } from "@scripts/helpers/types";
import { htmlElements } from "@scripts/helpers/htmlElements";
import { renderCarrentTrack } from "@scripts/models/renderCarrentTrack";
import { pauseCurrentAudio } from "./pauseCurrentAudio";
import { handlePlayer } from "./handlePlayer";
import { audioUpdateProgress } from "./audioUpdateProgress";
import { togglePlaying } from "./togglePlaying";

export const setCurrentAudio = (
  audioId: number,
  audios: IAudioTrack[]
): void => {
  const current = audios.find(({ id }) => id === audioId);

  if (!current) return;

  pauseCurrentAudio();

  state.current = current;

  renderCarrentTrack(current, htmlElements);
  if (current.audio) {
    current.audio.volume = state.volume;
    current.audio.currentTime = 0;
  }
  handlePlayer();
  audioUpdateProgress(current);

  setTimeout(() => {
    togglePlaying();
  }, 10);
};
