import { htmlElements } from "@scripts/helpers/htmlElements";
import { handleClickItem } from "./handleClickItem";
import { handleRepeat } from "./handleRepeat";
import { handleShuffle } from "./handleShuffle";
import { handleVolume } from "./handleVolume";
import { handleOpenMenu } from "./handleOpenMenu";
import { handleCloseMenu } from "./handleCloseMenu";
import { handleCreateAudioContext } from "./handleCreateAudioContext";
import { handleClickNext } from "./handleClickNext";
import { handleClickPrev } from "./handleClickPrev";
import { handleClickPlay } from "./handleClickPlay";
import { handleClickRewindPrev } from "./handleClickRewindPrev";
import { handleClickRewindNext } from "./handleClickRewindNext";
import { handleClickLine } from "./handleClickLine";

export const bindEventListeners = () => {
  htmlElements.tracksList?.addEventListener("click", handleClickItem);
  htmlElements.repeatButton?.addEventListener("click", handleRepeat);
  htmlElements.shuffleButton?.addEventListener("click", handleShuffle);
  htmlElements.volume?.addEventListener("input", handleVolume);
  htmlElements.openButton?.addEventListener("click", handleOpenMenu);
  htmlElements.closeButton?.addEventListener("click", handleCloseMenu);
  htmlElements.playButton?.addEventListener("click", handleCreateAudioContext, {
    once: true,
  });

  htmlElements.nextButton?.addEventListener("click", handleClickNext);
  htmlElements.prevButton?.addEventListener("click", handleClickPrev);
  htmlElements.playButton?.addEventListener("click", handleClickPlay);
  htmlElements.rewindPrev?.addEventListener("click", handleClickRewindPrev);
  htmlElements.rewindNext?.addEventListener("click", handleClickRewindNext);
  htmlElements.line?.addEventListener("click", handleClickLine);
};
