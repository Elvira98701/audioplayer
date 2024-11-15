import { state } from "@scripts/helpers/state";

export const handleRepeat = ({ currentTarget }): void => {
  const { repeating } = state;
  currentTarget.classList.toggle("active", !repeating);
  state.repeating = !repeating;
};
