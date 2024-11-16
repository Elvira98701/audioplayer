import { state } from "@scripts/helpers/state";
import { pauseCurrentAudio } from "./pauseCurrentAudio";
import { renderCarrentTrack } from "@scripts/models/renderCarrentTrack";
import { handlePlayer } from "./handlePlayer";
import { audioUpdateProgress } from "./audioUpdateProgress";
import { togglePlaying } from "./togglePlaying";
import { TrackType } from "@scripts/helpers/types";
import { htmlElements } from "@scripts/helpers/htmlElements";

export const setCurrentAudio = (audioId: number, audios: TrackType[]): void => {
  const current = audios.find(({ id }) => id === audioId);

  if (!current) return;

  pauseCurrentAudio();

  state.current = current;

  renderCarrentTrack(current, htmlElements);
  current.audio.volume = state.volume;
  handlePlayer();
  audioUpdateProgress(current);

  setTimeout(() => {
    togglePlaying();
  }, 10);
};
