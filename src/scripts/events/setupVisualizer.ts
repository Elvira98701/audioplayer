import { state } from "@scripts/helpers/state";
import { htmlElements } from "@scripts/helpers/htmlElements";
import { unlockAudioContext } from "./unlockAudioContext";

export const setupVisualizer = (
  audioElement: HTMLAudioElement & { sourceNode?: MediaElementAudioSourceNode },
  diameter: number = 304
): void => {
  if (!state.audioContext) {
    state.audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    unlockAudioContext(state.audioContext);
  }
  const { canvas } = htmlElements;
  if (!canvas) return;

  if (!audioElement.sourceNode) {
    audioElement.sourceNode =
      state.audioContext.createMediaElementSource(audioElement);
  }

  state.analyser = state.audioContext.createAnalyser();
  audioElement.sourceNode.connect(state.analyser);
  state.analyser.connect(state.audioContext.destination);

  state.analyser.fftSize = 256;
  const bufferLength = state.analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const radius = diameter / 2;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  function visualize(): void {
    if (!state.analyser) return;
    state.analyser.getByteFrequencyData(dataArray);
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fill();

    const sliceAngle = (2 * Math.PI) / bufferLength;

    ctx.strokeStyle = "rgb(224, 175, 110)";

    for (let i = 0; i < bufferLength; i++) {
      const normalizedValue = dataArray[i] / 255;
      const angle = i * sliceAngle;
      const amplitude = normalizedValue * radius * 0.7;

      const x1 = centerX + (radius + amplitude) * Math.cos(angle);
      const y1 = centerY + (radius + amplitude) * Math.sin(angle);
      const x2 = centerX + (radius + amplitude) * Math.cos(angle + Math.PI);
      const y2 = centerY + (radius + amplitude) * Math.sin(angle + Math.PI);
      const x3 = centerX + (radius + amplitude) * Math.cos(angle + Math.PI / 2);
      const y3 = centerY + (radius + amplitude) * Math.sin(angle + Math.PI / 2);
      const x4 =
        centerX + (radius + amplitude) * Math.cos(angle + (3 * Math.PI) / 2);
      const y4 =
        centerY + (radius + amplitude) * Math.sin(angle + (3 * Math.PI) / 2);

      ctx.beginPath();
      ctx.moveTo(
        centerX + radius * Math.cos(angle),
        centerY + radius * Math.sin(angle)
      );
      ctx.lineTo(x1, y1);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(
        centerX + radius * Math.cos(angle + Math.PI),
        centerY + radius * Math.sin(angle + Math.PI)
      );
      ctx.lineTo(x2, y2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(
        centerX + radius * Math.cos(angle + Math.PI / 2),
        centerY + radius * Math.sin(angle + Math.PI / 2)
      );
      ctx.lineTo(x3, y3);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(
        centerX + radius * Math.cos(angle + (3 * Math.PI) / 2),
        centerY + radius * Math.sin(angle + (3 * Math.PI) / 2)
      );
      ctx.lineTo(x4, y4);
      ctx.stroke();
    }

    requestAnimationFrame(visualize);
  }

  visualize();
};
