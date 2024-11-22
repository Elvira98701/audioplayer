import { state } from "@scripts/helpers/state";
import { IAudioTrack } from "@scripts/helpers/types";

export const pauseCurrentAudio = (): void => {
  const current = state.current as IAudioTrack;
  const audio = current.audio;

  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
};
