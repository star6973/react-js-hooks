import { useState, useEffect } from 'react';

export const useClock = initialDate => {
    const [clock, setClock] = useState(initialDate);
    const tick = () => {
        setClock(new Date());
    }

    useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => {
        clearInterval(timerID);
      }
    }, []);
  
    return { clock };
}

// date 값을 그대로 return 해줄 경우 Object 타입이기 때문에 요소별로 나눠서 반환해줘야 한다.
function Clock() {
    const { clock }  = useClock(new Date());
    const hours = clock.getHours().toString().padStart(2, "0");
    const minutes = clock.getMinutes().toString().padStart(2, "0");
    const seconds = clock.getSeconds().toString().padStart(2, "0");

    return (
        <div className="Clock">
            <p>{ `${hours}:${minutes}:${seconds}` }</p>
        </div>
    )
}

export default Clock;