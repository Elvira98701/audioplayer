import { IHtmlElements } from "./types";

export const htmlElements: IHtmlElements = {
  tracksList: null,
  genre: null,
  group: null,
  track: null,
  image: null,
  playButton: null,
  shuffleButton: null,
  repeatButton: null,
  volume: null,
  timelineEnd: null,
  closeButton: null,
  openButton: null,
  playerBlock: null,
  rewindPrev: null,
  rewindNext: null,
  progressLine: null,
  line: null,
  canvas: null,
  preloader: null,
  startButton: null,
};

document.addEventListener("DOMContentLoaded", () => {
  htmlElements.tracksList = document.querySelector("#tracksList");
  htmlElements.genre = document.querySelector("#genre");
  htmlElements.group = document.querySelector("#group");
  htmlElements.track = document.querySelector("#track");
  htmlElements.image = document.querySelector("#image");
  htmlElements.playButton = document.querySelector("#play");
  htmlElements.shuffleButton = document.querySelector("#shuffle");
  htmlElements.repeatButton = document.querySelector("#repeat");
  htmlElements.volume = document.querySelector("#volume");
  htmlElements.timelineEnd = document.querySelector("#timelineEnd");
  htmlElements.closeButton = document.querySelector("#closeButton");
  htmlElements.openButton = document.querySelector("#openButton");
  htmlElements.playerBlock = document.querySelector(".player__block");
  htmlElements.rewindPrev = document.querySelector("#rewindPrev");
  htmlElements.rewindNext = document.querySelector("#rewindNext");
  htmlElements.progressLine = document.querySelector("#progressLine");
  htmlElements.line = document.querySelector("#line");
  htmlElements.canvas = document.querySelector("#visualizer");
  htmlElements.preloader = document.querySelector("#preloader");
  htmlElements.startButton = document.querySelector("#startButton");
});
