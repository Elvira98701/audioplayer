import { state } from "@scripts/helpers/state";
import { isAudioTrack } from "@scripts/helpers/utils";

export const handleClickPlay = (event: Event): void => {
  const { current, playing, audioContext } = state;

  if (audioContext) {
    audioContext.resume().then(() => {
      console.log("Playback resumed successfully");
    });
  }

  if (!isAudioTrack(current)) {
    return;
  }
  const { audio } = current;
  const currentTarget = event.currentTarget as HTMLButtonElement;

  if (audio) {
    !playing ? audio.play() : audio.pause();
  }

  state.playing = !playing;

  if (!event.target) return;

  currentTarget.classList.toggle("playing", !playing);
};
