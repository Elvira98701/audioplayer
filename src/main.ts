import { renderAllTracks } from "@scripts/models/renderAllTracks";

import { state } from "@scripts/helpers/state";
import { tracks } from "@scripts/helpers/data";
import { htmlElements } from "@scripts/helpers/htmlElements";

import { setCurrentAudio } from "@scripts/events/setCurrentAudio";
import { handleClickItem } from "@scripts/events/handleClickItem";
import { handleRepeat } from "@scripts/events/handleRepeat";

import { TrackType } from "@scripts/helpers/types";

import "@styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
  const renderAudios = async (): Promise<PromiseSettledResult<TrackType>[]> => {
    const audioPromises = tracks.map((track: TrackType) => {
      const audio = new Audio(track.link);

      return new Promise<TrackType>((resolve) => {
        audio.addEventListener("loadeddata", () => {
          const newItem = { ...track, duration: audio.duration, audio };
          state.audios.push(newItem);
          if (htmlElements.tracksList) {
            renderAllTracks(htmlElements.tracksList, newItem);
          }
          resolve(newItem);
        });
      });
    });

    return Promise.allSettled(audioPromises);
  };

  const init = async () => {
    const audioPromises = await renderAudios();
    Promise.all(audioPromises).then(() => {
      if (state.audios.length > 0 && state.audios[0].id) {
        setCurrentAudio(state.audios[0].id, state.audios);
      }
    });

    htmlElements.tracksList?.addEventListener("click", handleClickItem);
    htmlElements.repeatButton?.addEventListener("click", handleRepeat);
  };

  init();
});
