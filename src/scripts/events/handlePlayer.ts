import { htmlElements } from "@scripts/helpers/htmlElements";
import { handleClickNext } from "./handleClickNext";
import { handleClickPlay } from "./handleClickPlay";
import { handleClickPrev } from "./handleClickPrev";
import { handleClickRewindPrev } from "./handleClickRewindPrev";
import { handleClickRewindNext } from "./handleClickRewindNext";
import { handleClickLine } from "./handleClickLine";

export const handlePlayer = (): void => {
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");

  nextButton?.addEventListener("click", handleClickNext);
  prevButton?.addEventListener("click", handleClickPrev);
  htmlElements.playButton?.addEventListener("click", handleClickPlay);
  htmlElements.rewindPrev?.addEventListener("click", handleClickRewindPrev);
  htmlElements.rewindNext?.addEventListener("click", handleClickRewindNext);
  htmlElements.line?.addEventListener("click", handleClickLine);
};
