import { useState, useEffect } from "react";

export const useTimer = initTime => {
    const calcTimeLeft = () => {
        const diff = +new Date(initTime) - +new Date();
        let tm = {days: 0, hours: 0, minutes: 0, seconds: 0};

        if (diff > 0) {
            tm = {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            };
        }

        return tm
    }
    const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

    useEffect(() => {
        const timerID = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);

        return () => {
            clearInterval(timerID);
        }
    }, [])

    return { ...timeLeft };
};

function Timer() {
    const { days, hours, minutes, seconds } = useTimer("2021-08-11 17:20:00");
    const totTimeLeft = days + hours + minutes + seconds;
    const timerForm = `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    const timeOutForm = "00:00:00:00";

    return (
        <div className="Timer"> 
            { totTimeLeft !== 0 ? timerForm : timeOutForm }
        </div>
    )
}

export default Timer;