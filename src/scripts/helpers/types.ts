export interface TrackType {
  id: number;
  group: string;
  track: string;
  link: string;
  image: string;
  genre: string;
  duration?: number;
  audio?: HTMLAudioElement;
}

export interface StateType {
  audios: TrackType[];
  current: TrackType | {};
  playing: boolean;
  repeating: boolean;
  volume: number;
}

export interface HtmlElementsType {
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
}
