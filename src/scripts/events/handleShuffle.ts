import { htmlElements } from "@scripts/helpers/htmlElements";
import { shuffle } from "@scripts/helpers/utils";

export const handleShuffle = (): void => {
  const { children } = htmlElements.tracksList;
  const shuffled = shuffle([...children]);

  if (!htmlElements.tracksList) return;

  htmlElements.tracksList.innerHTML = "";
  shuffled.forEach((item) => htmlElements?.tracksList?.append(item));
};
