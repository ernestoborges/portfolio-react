import { useEffect, useState } from "react"

export function DateTime(){

    const [timer, setTimer] = useState(new Date());
    const day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
          clearInterval(timerID);
        };
    })

    function tick() {
        setTimer(new Date());
        console.log(timer);
    }

    function stringfyDigits(digits){
        const str = "" + digits;
        const pad = "00";
        return pad.substring(0, pad.length - str.length) + str;
    }
    return <div className="date-time">
    <div className="time">
        <div>
            {`${day[timer.getDay() - 1]}`}
        </div>
        <div>
            {`${stringfyDigits(timer.getHours())}`}
            <span className={timer.getSeconds() % 2 === 0 ? "transparent" : ""}>:</span>
            {`${stringfyDigits(timer.getMinutes())}`}
        </div>
    </div>
    <div className="date">
       {`${stringfyDigits(timer.getDate())}/${stringfyDigits(timer.getMonth())}/${timer.getFullYear()}`}
    </div>
</div>
}