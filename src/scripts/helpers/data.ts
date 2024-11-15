import { TrackType } from "./types";

import track1 from "@assets/audio/track1.mp3";
import track2 from "@assets/audio/track2.mp3";
import track3 from "@assets/audio/track3.mp3";
import track4 from "@assets/audio/track4.mp3";
import track5 from "@assets/audio/track5.mp3";
import track6 from "@assets/audio/track6.mp3";
import track7 from "@assets/audio/track7.mp3";
import track8 from "@assets/audio/track8.mp3";
import track9 from "@assets/audio/track9.mp3";

import image1 from "@assets/images/track1.jpg";
import image2 from "@assets/images/track2.jpg";
import image3 from "@assets/images/track3.jpg";
import image4 from "@assets/images/track4.jpg";
import image5 from "@assets/images/track5.jpg";
import image6 from "@assets/images/track6.jpg";
import image7 from "@assets/images/track7.jpg";
import image8 from "@assets/images/track8.jpg";
import image9 from "@assets/images/track9.jpg";

export const tracks: TrackType[] = [
  {
    id: 1,
    group: "Justin Bieber, DJ Snake",
    track: "Let Me Love You",
    link: track1,
    image: image1,
    genre: "tropical house",
  },
  {
    id: 2,
    group: "Eminem",
    track: "Mockingbird ",
    link: track2,
    image: image2,
    genre: "rap",
  },
  {
    id: 3,
    group: "Eminem",
    track: "The Real Slim Shady",
    link: track3,
    image: image3,
    genre: "rap",
  },
  {
    id: 4,
    group: "Rammstein",
    track: "Mutter",
    link: track4,
    image: image4,
    genre: "rock",
  },
  {
    id: 5,
    group: "Evanescence",
    track: "Bring Me To Life",
    link: track5,
    image: image5,
    genre: "alternative rock",
  },
  {
    id: 6,
    group: "Imagine Dragons",
    track: "Thunder",
    link: track6,
    image: image6,
    genre: "electro pop",
  },
  {
    id: 7,
    group: "Hafex & Rahima Azim",
    track: "Intihask",
    link: track7,
    image: image7,
    genre: "pop",
  },
  {
    id: 8,
    group: "Melisa & Tommo",
    track: "I m alone",
    link: track8,
    image: image8,
    genre: "pop",
  },
  {
    id: 9,
    group: "Linkin Park",
    track: "Numb",
    link: track9,
    image: image9,
    genre: "rock",
  },
];
