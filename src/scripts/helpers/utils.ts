import { IAudioTrack } from "./types";

const formatTime = (time: number): string =>
  time < 10 ? `0${time}` : `${time}`;

export const toMinAndSec = (duration: number): string => {
  const minutes = formatTime(Math.floor(duration / 60));
  const seconds = formatTime(Math.floor(duration - Number(minutes) * 60));

  return `${minutes}:${seconds}`;
};

export const shuffle = (arr: any[]) => arr.sort(() => 0.5 - Math.random());

export const isAudioTrack = (obj: any): obj is IAudioTrack => {
  return (
    obj &&
    typeof obj === "object" &&
    Object.keys(obj).length > 0 &&
    "audio" in obj
  );
};
