import { htmlElements } from "@scripts/helpers/htmlElements";

export const handleCloseMenu = () => {
  htmlElements.playerBlock?.classList.remove("isActive");
};
