import React, { useEffect } from 'react';

export const useBeforeLeave = (onBefore) => {
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) { onBefore(); }
  }
  
  useEffect(() => {
    document.addEventListener("mouseleave", handle);

    return () => {
      document.removeEventListener("mouseleave", handle);
    }
  }, []);

  if (typeof onBefore !== "function") {
    return;
  }
};

function BeforeLeave() {
  const begForLife = () => console.log("Plz dont leave");
  useBeforeLeave(begForLife);
  return (
    <></>
  );
}

export default BeforeLeave;