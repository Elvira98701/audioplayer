import { htmlElements } from "@scripts/helpers/htmlElements";
import { shuffle } from "@scripts/helpers/utils";

export const handleShuffle = (): void => {
  let children, shuffled;

  if (htmlElements.tracksList) {
    children = htmlElements.tracksList.children;
  }

  if (children) {
    shuffled = shuffle([...children]);
  }

  if (!htmlElements.tracksList) return;

  htmlElements.tracksList.innerHTML = "";

  if (shuffled) {
    shuffled.forEach((item) => htmlElements?.tracksList?.append(item));
  }
};
