import { htmlElements } from "@scripts/helpers/htmlElements";

export const handleCloseMenu = (): void => {
  htmlElements.playerBlock?.classList.remove("isActive");
};
