import "./styles.css"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

export function ShutDownPage(){
    const navigate = useNavigate();
    const [dots, setDots] = useState(["."])
    
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
          clearInterval(timerID);
        };
    })

    function tick() {
        setDots(dots.length === 3 ? [] : (prev)=> [...prev, "."]);
    }

    useEffect(()=>{
        setTimeout(()=>navigate("/"), 4000)
    },[])

    return (
        <article className="shutdown-page">
            <section>
                <h2>Shutting Down{dots.map(dot => ".")}</h2>
            </section>
        </article>

    )
}