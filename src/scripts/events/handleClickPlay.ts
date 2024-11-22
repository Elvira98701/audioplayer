import { state } from "@scripts/helpers/state";
import { IAudioTrack } from "@scripts/helpers/types";

export const handleClickPlay = (event: Event): void => {
  const playing = state.playing;
  const current = state.current as IAudioTrack;
  const audio = current.audio;
  const currentTarget = event.currentTarget as HTMLButtonElement;

  if (audio) {
    !playing ? audio.play() : audio.pause();
  }

  state.playing = !playing;

  if (!event.target) return;

  currentTarget.classList.toggle("playing", !playing);
};
