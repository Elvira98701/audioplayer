import { state } from "@scripts/helpers/state";
import { isAudioTrack } from "@scripts/helpers/utils";

export const handleClickRewindNext = (): void => {
  const { current } = state;

  if (!isAudioTrack(current)) {
    return;
  }
  const { audio, duration } = current;

  const newTime = Math.min(audio.currentTime + 10, duration);
  audio.currentTime = newTime;
};
