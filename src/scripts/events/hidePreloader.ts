import { htmlElements } from "@scripts/helpers/htmlElements";

export const hidePreloader = () => {
  htmlElements.preloader?.classList.add("hide");

  htmlElements.preloader?.addEventListener("animationend", (event) => {
    const currentTarget = event.currentTarget as HTMLDivElement;
    currentTarget.style.display = "none";
  });
};
