export interface ITrack {
  id: number;
  group: string;
  track: string;
  link: string;
  image: string;
  genre: string;
}

export interface IAudioTrack extends ITrack {
  duration: number;
  audio: HTMLAudioElement;
}

export interface IState {
  audios: IAudioTrack[];
  current: IAudioTrack | {};
  playing: boolean;
  repeating: boolean;
  volume: number;
  audioContext: AudioContext | null;
  analyser: AnalyserNode | null;
}

export interface IHtmlElements {
  tracksList: HTMLUListElement | null;
  genre: HTMLSpanElement | null;
  group: HTMLHeadingElement | null;
  track: HTMLHeadingElement | null;
  image: HTMLImageElement | null;
  playButton: HTMLButtonElement | null;
  shuffleButton: HTMLButtonElement | null;
  repeatButton: HTMLButtonElement | null;
  volume: HTMLInputElement | null;
  timelineEnd: HTMLSpanElement | null;
  closeButton: HTMLButtonElement | null;
  openButton: HTMLButtonElement | null;
  playerBlock: HTMLDivElement | null;
  rewindPrev: HTMLButtonElement | null;
  rewindNext: HTMLButtonElement | null;
  progressLine: SVGCircleElement | null;
  line: SVGCircleElement | null;
  canvas: HTMLCanvasElement | null;
  preloader: HTMLDivElement | null;
}
