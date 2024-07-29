interface ISwiper {
  next: () => void;
  prev: () => void;
}

export default function carouselSwipe(direction: string, ref: ISwiper): void {
  if (direction == 'left') {
    ref.next();
  }

  if (direction == 'right') {
    ref.prev();
  }
}
