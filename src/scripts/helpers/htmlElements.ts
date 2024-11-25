import { IHtmlElements } from "./types";

export const htmlElements: IHtmlElements = {
  tracksList: document.querySelector("#tracksList"),
  genre: document.querySelector("#genre"),
  group: document.querySelector("#group"),
  track: document.querySelector("#track"),
  image: document.querySelector("#image"),
  playButton: document.querySelector("#play"),
  shuffleButton: document.querySelector("#shuffle"),
  repeatButton: document.querySelector("#repeat"),
  volume: document.querySelector("#volume"),
  timelineEnd: document.querySelector("#timelineEnd"),
  closeButton: document.querySelector("#closeButton"),
  openButton: document.querySelector("#openButton"),
  playerBlock: document.querySelector(".player__block"),
  rewindPrev: document.querySelector("#rewindPrev"),
  rewindNext: document.querySelector("#rewindNext"),
  progressLine: document.querySelector("#progressLine"),
  line: document.querySelector("#line"),
  canvas: document.querySelector("#visualizer"),
};
