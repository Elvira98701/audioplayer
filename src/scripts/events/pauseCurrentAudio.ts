import { state } from "@scripts/helpers/state";

export const pauseCurrentAudio = (): void => {
  const {
    current: { audio },
  } = state;

  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
};
