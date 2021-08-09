import { useEffect, useRef } from "react";

export const useHover = onHover => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }, []);

    if (typeof onHover !== "function") {
        return;
    }

    return element;
}

function Hover() {
    const sayHello = () => console.log("say hello");
    const title = useHover(sayHello);
  
    return (
      <>
        <h1 ref={title}>Hi</h1>
      </>
    );
  }
  
  export default Hover;