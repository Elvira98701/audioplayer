import { state } from "@scripts/helpers/state";
import { TrackType } from "@scripts/helpers/types";

export const handleClickLine = (event: MouseEvent) => {
  const current = state.current as TrackType;
  const audio = current.audio as HTMLAudioElement;
  const duration = current.duration as number;
  const line = event.currentTarget as SVGCircleElement;

  if (!line) {
    return;
  }

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
};
