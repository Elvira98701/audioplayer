import { state } from "@scripts/helpers/state";
import { IAudioTrack } from "@scripts/helpers/types";

export const handleClickRewindPrev = () => {
  const current = state.current as IAudioTrack;
  const audio = current.audio as HTMLAudioElement;

  const newTime = Math.max(audio.currentTime - 10, 0);
  audio.currentTime = newTime;
};
