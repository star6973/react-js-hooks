import { useEffect, useRef } from 'react';

export const useFadeIn = (duration=1, delay=0) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;

      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  return { ref: element, style: { opacity: 0 } };
}

function FadeIn() {
  const fadeInH1 = useFadeIn(1, 2);

  return (
    <>
      <h1 {...fadeInH1}>Hello</h1>
    </>
  );
}

export default FadeIn;