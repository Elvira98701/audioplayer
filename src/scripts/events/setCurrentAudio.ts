import { state } from "@scripts/helpers/state";
import { IAudioTrack } from "@scripts/helpers/types";
import { htmlElements } from "@scripts/helpers/htmlElements";
import { renderCarrentTrack } from "@scripts/models/renderCarrentTrack";
import { pauseCurrentAudio } from "./pauseCurrentAudio";
import { audioUpdateProgress } from "./audioUpdateProgress";
import { togglePlaying } from "./togglePlaying";
import { activeAudio } from "./activeAudio";
import { setColors } from "./setColors";

export const setCurrentAudio = (
  audioId: number,
  audios: IAudioTrack[]
): void => {
  const current = audios.find(({ id }) => id === audioId);

  if (!current) return;

  pauseCurrentAudio();

  state.current = current;

  renderCarrentTrack(current, htmlElements);
  if (current.audio) {
    current.audio.volume = state.volume;
    current.audio.currentTime = 0;
  }

  audioUpdateProgress(current);
  activeAudio();
  setColors();

  if (state.audioContext && state.analyser) {
    const audio = current.audio as HTMLAudioElement & {
      sourceNode?: MediaElementAudioSourceNode;
    };
    if (!audio.sourceNode) {
      audio.sourceNode = state.audioContext.createMediaElementSource(audio);
      audio.sourceNode.connect(state.analyser);
    }
  }

  setTimeout(() => {
    togglePlaying();
  }, 20);
};
