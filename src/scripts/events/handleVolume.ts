import { state } from "@scripts/helpers/state";
import { isAudioTrack } from "@scripts/helpers/utils";

export const handleVolume = (event: Event) => {
  const { current } = state;

  if (!isAudioTrack(current)) {
    return;
  }
  const eventTarget = event.target as HTMLInputElement;
  const value = Number(eventTarget.value);
  state.volume = value;

  if (!current.audio) return;

  current.audio.volume = value;
};
