import { useEffect, useRef } from 'react';

const useDraggingScroll = ({ disableScroll }: { disableScroll?: boolean } = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (disableScroll || !ref.current) return;

    const slider = ref.current;

    let isDragging = false;
    let initialPosition: number;
    let scrollLeft: number;
    let activateSnapping: NodeJS.Timeout;

    const enableSnapScroll = () => (slider.style.scrollSnapType = 'x mandatory');
    const disableSnapScroll = () => (slider.style.scrollSnapType = 'none');

    const handleMouseDown = (event: MouseEvent) => {
      clearTimeout(activateSnapping);
      isDragging = true;

      initialPosition = event.clientX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      disableSnapScroll();
    };

    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault();

      if (!isDragging) return;

      const currentPosition = event.clientX - slider.offsetLeft;
      const step = (currentPosition - initialPosition) * 2;

      slider.scrollTo({
        left: scrollLeft - step
      });
    };

    const handleMouseUp = () => {
      isDragging = false;

      const previousPosition = slider.scrollLeft;
      enableSnapScroll();

      const currentPosition = slider.scrollLeft;
      disableSnapScroll();

      slider.scrollLeft = previousPosition;
      slider.scrollTo({
        left: currentPosition,
        behavior: 'smooth'
      });

      activateSnapping = setTimeout(enableSnapScroll, 500);
    };

    const handleMouseLeave = () => {
      isDragging = false;
    };

    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);

    return () => {
      clearTimeout(activateSnapping);
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
    };
  }, [disableScroll]);

  return ref;
};

export default useDraggingScroll;
