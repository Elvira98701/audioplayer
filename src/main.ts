import { renderAllTracks } from "@scripts/models/renderAllTracks";

import { state } from "@scripts/helpers/state";
import { tracks } from "@scripts/helpers/data";
import { htmlElements } from "@scripts/helpers/htmlElements";
import { IAudioTrack } from "@scripts/helpers/types";

import { setCurrentAudio } from "@scripts/events/setCurrentAudio";
import { hidePreloader } from "@scripts/events/hidePreloader";
import { bindEventListeners } from "@scripts/events/bindEventListeners";

import "@styles/index.scss";

const loadAudios = async (): Promise<PromiseSettledResult<IAudioTrack>[]> => {
  const audioPromises = tracks.map((track) => {
    const audio = new Audio(track.link);
    audio.preload = "metadata";

    return new Promise<IAudioTrack>((resolve, reject) => {
      audio.addEventListener("loadedmetadata", () => {
        const newItem: IAudioTrack = {
          ...track,
          duration: audio.duration,
          audio,
        };
        state.audios.push(newItem);
        resolve(newItem);
      });

      audio.onerror = () =>
        reject(new Error(`Track loading error: ${track.track}`));
    });
  });

  return Promise.allSettled(audioPromises);
};

const init = async () => {
  try {
    const audioPromises = await loadAudios();

    const failedTracks = audioPromises.filter(
      (result) => result.status === "rejected"
    );
    if (failedTracks.length > 0) {
      console.warn(
        "Track loading errors:",
        failedTracks.map((result) => result.reason)
      );
    }

    const successfulAudios = audioPromises
      .filter(
        (result): result is PromiseFulfilledResult<IAudioTrack> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value);

    if (htmlElements.tracksList) {
      successfulAudios.forEach((audio) =>
        renderAllTracks(htmlElements.tracksList!, audio)
      );
    }

    if (successfulAudios.length > 0 && successfulAudios[0].id) {
      setCurrentAudio(successfulAudios[0].id, successfulAudios);
    }
    hidePreloader();
    bindEventListeners();
  } catch (error) {
    console.error("Error during initialization:", error);
  }
};

htmlElements.startButton?.addEventListener(
  "click",
  async (event) => {
    const currentTarget = event.currentTarget as HTMLButtonElement;
    currentTarget.style.display = "none";

    const preloaderImage: HTMLImageElement | null =
      document.querySelector(".preloader__image");
    if (preloaderImage) {
      preloaderImage.style.display = "block";
    }

    await init();
  },
  { once: true }
);
