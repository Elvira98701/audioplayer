import { IAudioTrack } from "@scripts/helpers/types";
import { toMinAndSec } from "@scripts/helpers/utils";

const toHtmlTracks = (audio: IAudioTrack): string => {
  return `
            <li class="player__item" data-id="${audio.id}">
              <div class="player__left">
                  <svg
                    class="player__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40.55,110.58-52,36A8,8,0,0,1,104,164V92a8,8,0,0,1,12.55-6.58l52,36a8,8,0,0,1,0,13.16Z"
                  ></path>
                </svg>
                <span>${audio.group} - ${audio.track}</span>
              </div>
              <span>${toMinAndSec(audio.duration)}</span>
            </li>
    `;
};

export const renderAllTracks = (
  tracksList: HTMLUListElement,
  audio: IAudioTrack
) => {
  tracksList.innerHTML += toHtmlTracks(audio);
};
