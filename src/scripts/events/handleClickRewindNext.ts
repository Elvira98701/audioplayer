import { state } from "@scripts/helpers/state";
import { IAudioTrack } from "@scripts/helpers/types";

export const handleClickRewindNext = () => {
  const current = state.current as IAudioTrack;
  const audio = current.audio as HTMLAudioElement;
  const duration = current.duration as number;

  const newTime = Math.min(audio.currentTime + 10, duration);
  audio.currentTime = newTime;
};
