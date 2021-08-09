import { useRef } from 'react';

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };

  return { element, triggerFull, exitFull };
}

function FullScreen() {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="50%" />
        <button onClick={exitFull}>Exit FullScreen</button>
        <button onClick={triggerFull}>Make FullScreen</button>
      </div>
    </>
  );
}

export default FullScreen;