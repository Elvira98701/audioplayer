import { state } from "@scripts/helpers/state";
import { isAudioTrack } from "@scripts/helpers/utils";
import { setupVisualizer } from "./setupVisualizer";

export const handleCreateAudioContext = () => {
  const { current } = state;
  if (!isAudioTrack(current)) return;
  const { audio } = current;

  setupVisualizer(audio);
};
