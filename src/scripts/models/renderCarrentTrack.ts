import { HtmlElementsType, TrackType } from "@scripts/helpers/types";
import { toMinAndSec } from "@scripts/helpers/utils";

export const renderCarrentTrack = (
  current: TrackType,
  htmlElements: HtmlElementsType
): void => {
  const { genre, group, track, image, timelineEnd } = htmlElements;
  if (!genre || !group || !track || !image || !timelineEnd) {
    return;
  }
  genre.textContent = current.genre;
  group.textContent = current.group;
  track.textContent = current.track;
  timelineEnd.textContent = String(toMinAndSec(current.duration));
  image.src = current.image;
};