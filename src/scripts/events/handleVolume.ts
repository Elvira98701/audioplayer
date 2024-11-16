import { state } from "@scripts/helpers/state";
import { TrackType } from "@scripts/helpers/types";

export const handleVolume = (event: Event) => {
  const current = state.current as TrackType;
  const eventTarget = event.target as HTMLInputElement;
  const value = Number(eventTarget.value);
  state.volume = value;

  if (!current.audio) return;

  current.audio.volume = value;
};
