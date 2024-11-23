import { state } from "@scripts/helpers/state";
import { isAudioTrack } from "@scripts/helpers/utils";

export const pauseCurrentAudio = (): void => {
  const { current } = state;

  if (!isAudioTrack(current)) {
    return;
  }
  const { audio } = current;

  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
};
