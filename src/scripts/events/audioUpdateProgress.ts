import { state } from "@scripts/helpers/state";
import { toMinAndSec } from "@scripts/helpers/utils";
import { TrackType } from "@scripts/helpers/types";
import { handleClickNext } from "./handleClickNext";

export const audioUpdateProgress = (current: TrackType): void => {
  const audio = current.audio as HTMLAudioElement;
  const duration = current.duration as number;
  const progressLine: SVGCircleElement | null =
    document.querySelector("#progressLine");
  const line: SVGCircleElement | null = document.querySelector("#line");
  const timeline: HTMLSpanElement | null = document.querySelector("#timeline");

  if (!progressLine || !line) return;

  const totalLength = progressLine.getTotalLength();
  progressLine.style.strokeDasharray = `${totalLength}px`;
  progressLine.style.strokeDashoffset = `${totalLength}px`;

  audio.addEventListener("timeupdate", (event: Event) => {
    const audioTarget = event.target as HTMLAudioElement;
    const currentTime = audioTarget.currentTime;
    const width = totalLength - currentTime * (totalLength / duration);

    progressLine.style.strokeDashoffset = `${width}px`;

    if (timeline) {
      timeline.innerHTML = toMinAndSec(currentTime) ?? "00:00";
    }
  });

  audio.addEventListener("ended", (event: Event) => {
    const audioTarget = event.target as HTMLAudioElement;
    audioTarget.currentTime = 0;
    progressLine.style.strokeDashoffset = `${totalLength}px`;

    if (timeline) {
      timeline.textContent = "00:00";
    }

    state.repeating ? audioTarget.play() : handleClickNext();
  });

  line.addEventListener("click", (event: MouseEvent) => {
    const circle = line.getBoundingClientRect();
    const centerX = circle.left + circle.width / 2;
    const centerY = circle.top + circle.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    let angle = Math.atan2(dy, dx);
    angle = (angle * 180) / Math.PI;
    angle = (angle + 360) % 360;

    const normalizedAngle = (angle + 90) % 360;
    const newTime = (normalizedAngle / 360) * duration;

    audio.currentTime = newTime;

    const width = totalLength - newTime * (totalLength / duration);
    progressLine.style.strokeDashoffset = `${width}px`;

    if (timeline) {
      timeline.innerHTML = toMinAndSec(newTime) ?? "00:00";
    }
  });
};
