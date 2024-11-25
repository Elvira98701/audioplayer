export const setColors = (): void => {
  const colors = ["#46655f", "#1c092a", "#496d79", "#a06641", "#560319"];

  const root = document.documentElement;
  root.style.setProperty(
    "--color-accent",
    colors[Math.floor(Math.random() * colors.length)]
  );
};
