import { state } from "@scripts/helpers/state";
import { TrackType } from "@scripts/helpers/types";

export const pauseCurrentAudio = (): void => {
  const current = state.current as TrackType;
  const audio = current.audio;

  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
};
