import { htmlElements } from "@scripts/helpers/htmlElements";

export const handleOpenMenu = (): void => {
  htmlElements.playerBlock?.classList.add("isActive");
};
