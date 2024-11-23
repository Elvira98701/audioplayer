import { state } from "@scripts/helpers/state";
import { isAudioTrack } from "@scripts/helpers/utils";

export const handleClickRewindPrev = () => {
  const { current } = state;

  if (!isAudioTrack(current)) {
    return;
  }
  const { audio } = current;

  const newTime = Math.max(audio.currentTime - 10, 0);
  audio.currentTime = newTime;
};
