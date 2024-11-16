import { state } from "@scripts/helpers/state";

export const handleRepeat = (event: Event): void => {
  const { repeating } = state;
  const currentTarget = event?.currentTarget as HTMLButtonElement;
  currentTarget.classList.toggle("active", !repeating);
  state.repeating = !repeating;
};
