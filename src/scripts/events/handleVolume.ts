import { state } from "@scripts/helpers/state";

export const handleVolume = (event: Event) => {
  const { current } = state;
  state.volume = event.target.value;

  if (!current.audio) return;

  current.audio.volume = event.target.value;
};
