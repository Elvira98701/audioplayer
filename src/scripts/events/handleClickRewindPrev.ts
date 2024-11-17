import { state } from "@scripts/helpers/state";
import { TrackType } from "@scripts/helpers/types";

export const handleClickRewindPrev = () => {
  const current = state.current as TrackType;
  const audio = current.audio as HTMLAudioElement;

  const newTime = Math.max(audio.currentTime - 10, 0);
  audio.currentTime = newTime;
};
