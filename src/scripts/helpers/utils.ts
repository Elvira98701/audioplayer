const formatTime = (time: number): string | number =>
  time < 10 ? `0${time}` : time;

export const toMinAndSec = (
  duration: number | undefined
): string | undefined => {
  if (!duration) return;
  const minutes = formatTime(Math.floor(duration / 60));
  const seconds = formatTime(Math.floor(duration - Number(minutes) * 60));

  return `${minutes}:${seconds}`;
};

export const shuffle = (arr: any[]) => arr.sort(() => 0.5 - Math.random());
