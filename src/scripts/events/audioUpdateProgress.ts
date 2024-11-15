import { state } from "@scripts/helpers/state";
import { handleClickNext } from "./handleClickNext";
import { toMinAndSec } from "@scripts/helpers/utils";

export const audioUpdateProgress = ({
  audio,
  duration,
}: {
  audio: HTMLAudioElement;
  duration: number;
}): void => {
  const progressLine = document.querySelector("#progressLine");
  const timeline = document.querySelector("#timeline");

  if (!progressLine) return;

  const totalLength = progressLine.getTotalLength();
  progressLine.style.strokeDasharray = `${totalLength}px`;
  progressLine.style.strokeDashoffset = `${totalLength}px`;
  // timeline.textContent = "00:00";

  audio.addEventListener("timeupdate", ({ target }) => {
    const { currentTime } = target;
    const width = totalLength - currentTime * (totalLength / duration);

    progressLine.style.strokeDashoffset = `${width}px`;

    timeline.innerHTML = toMinAndSec(currentTime) ?? "00:00";
  });

  audio.addEventListener("ended", ({ target }) => {
    target.currentTime = 0;
    progressLine.style.strokeDashoffset = `${totalLength}px`;
    timeline.textContent = "00:00";

    state.repeating ? target.play() : handleClickNext();
  });
};
