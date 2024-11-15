import { state } from "@scripts/helpers/state";

export const handleClickPlay = (event: Event): void => {
  const { playing, current } = state;
  const { audio } = current;

  !playing ? audio.play() : audio.pause();

  state.playing = !playing;

  if (!event.target) return;

  event.currentTarget.classList.toggle("playing", !playing);
};
