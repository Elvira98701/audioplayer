import { IState } from "./types";

export const state: IState = {
  audios: [],
  current: {},
  playing: false,
  repeating: false,
  volume: 0.5,
  audioContext: null,
  analyser: null,
};
