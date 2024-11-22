import { renderAllTracks } from "@scripts/models/renderAllTracks";

import { state } from "@scripts/helpers/state";
import { tracks } from "@scripts/helpers/data";
import { htmlElements } from "@scripts/helpers/htmlElements";
import { IAudioTrack } from "@scripts/helpers/types";

import { setCurrentAudio } from "@scripts/events/setCurrentAudio";
import { handleClickItem } from "@scripts/events/handleClickItem";
import { handleRepeat } from "@scripts/events/handleRepeat";
import { handleShuffle } from "@scripts/events/handleShuffle";
import { handleVolume } from "@scripts/events/handleVolume";
import { handleOpenMenu } from "@scripts/events/handleOpenMenu";
import { handleCloseMenu } from "@scripts/events/handleCloseMenu";

import "@styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
  const renderAudios = async (): Promise<
    PromiseSettledResult<IAudioTrack>[]
  > => {
    const audioPromises = tracks.map((track) => {
      const audio = new Audio(track.link);

      return new Promise<IAudioTrack>((resolve, reject) => {
        audio.addEventListener("loadeddata", () => {
          const newItem = { ...track, duration: audio.duration, audio };
          state.audios.push(newItem);

          if (htmlElements.tracksList) {
            renderAllTracks(htmlElements.tracksList, newItem);
          }
          resolve(newItem);
        });
        audio.onerror = () => reject(`Track loading error: ${track.track}`);
      });
    });

    return Promise.allSettled(audioPromises);
  };

  const init = async () => {
    const audioPromises = await renderAudios();

    const failedTracks = audioPromises.filter(
      (result) => result.status === "rejected"
    );

    if (failedTracks.length > 0) {
      console.warn("Tracks loading errors:", failedTracks);
    }

    const successfulAudios = audioPromises
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);

    if (successfulAudios.length > 0 && successfulAudios[0].id) {
      setCurrentAudio(successfulAudios[0].id, successfulAudios);
    }

    htmlElements.tracksList?.addEventListener("click", handleClickItem);
    htmlElements.repeatButton?.addEventListener("click", handleRepeat);
    htmlElements.shuffleButton?.addEventListener("click", handleShuffle);
    htmlElements.volume?.addEventListener("input", handleVolume);
    htmlElements.openButton?.addEventListener("click", handleOpenMenu);
    htmlElements.closeButton?.addEventListener("click", handleCloseMenu);
  };

  init();
});
