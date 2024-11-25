export const unlockAudioContext = (audioCtx: AudioContext) => {
  if (audioCtx.state !== "suspended") return;
  const body = document.body;
  const events = ["touchstart", "touchend", "mousedown", "keydown"];
  events.forEach((event) => body.addEventListener(event, unlock, false));

  function unlock() {
    audioCtx.resume().then(clean);
  }

  function clean() {
    events.forEach((event) => body.removeEventListener(event, unlock));
  }
};
