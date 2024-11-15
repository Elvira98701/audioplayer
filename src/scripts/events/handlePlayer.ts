import { htmlElements } from "@scripts/helpers/htmlElements";
import { handleClickNext } from "./handleClickNext";
import { handleClickPlay } from "./handleClickPlay";
import { handleClickPrev } from "./handleClickPrev";

export const handlePlayer = (): void => {
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");

  nextButton?.addEventListener("click", handleClickNext);
  prevButton?.addEventListener("click", handleClickPrev);
  htmlElements.playButton?.addEventListener("click", handleClickPlay);
};
