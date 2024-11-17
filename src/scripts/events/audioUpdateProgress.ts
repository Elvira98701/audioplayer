import { state } from "@scripts/helpers/state";
import { toMinAndSec } from "@scripts/helpers/utils";
import { TrackType } from "@scripts/helpers/types";
import { handleClickNext } from "./handleClickNext";
import { htmlElements } from "@scripts/helpers/htmlElements";

export const audioUpdateProgress = (current: TrackType): void => {
  const audio = current.audio as HTMLAudioElement;
  const duration = current.duration as number;
  const progressLine = htmlElements.progressLine;
  const timeline: HTMLSpanElement | null = document.querySelector("#timeline");

  if (!progressLine) return;

  const totalLength = progressLine.getTotalLength();
  progressLine.style.strokeDasharray = `${totalLength}px`;
  progressLine.style.strokeDashoffset = `${totalLength}px`;

  audio?.addEventListener("timeupdate", (event: Event) => {
    const audioTarget = event.target as HTMLAudioElement;
    const currentTime = audioTarget.currentTime;
    const width = totalLength - currentTime * (totalLength / duration);

    progressLine.style.strokeDashoffset = `${width}px`;

    if (timeline) {
      timeline.innerHTML = toMinAndSec(currentTime) ?? "00:00";
    }
  });

  audio?.addEventListener("ended", (event: Event) => {
    const audioTarget = event.target as HTMLAudioElement;
    audioTarget.currentTime = 0;
    progressLine.style.strokeDashoffset = `${totalLength}px`;

    if (timeline) {
      timeline.textContent = "00:00";
    }

    state.repeating ? audioTarget.play() : handleClickNext();
  });
};
