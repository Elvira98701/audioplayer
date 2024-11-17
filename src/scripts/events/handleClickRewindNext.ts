import { state } from "@scripts/helpers/state";
import { TrackType } from "@scripts/helpers/types";

export const handleClickRewindNext = () => {
  const current = state.current as TrackType;
  const audio = current.audio as HTMLAudioElement;
  const duration = current.duration as number;

  const newTime = Math.min(audio.currentTime + 10, duration);
  audio.currentTime = newTime;
};
