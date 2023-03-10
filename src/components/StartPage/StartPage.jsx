import "./styles.css"
import {useNavigate} from "react-router-dom"
import { DateTime } from "../Header/DateTime";
import { useContext, useState } from "react";
import { useEffect } from "react";
import PcConfigsContext from "../../context/PcConfigsProvider";

export function StartPage(){
    const navigate = useNavigate();
    const [isUserSelected, setIsUserSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const loadingBricks = [0,0,0,0,0,0,0,0,0,0];
    
    const volume = useContext(PcConfigsContext).volume;
    
    let loginAudio = new Audio("/audios/login.mp3");

    useEffect(()=>{
        loginAudio.volume = volume / 3;
        loginAudio.play();
    },[])

    function loading(){
        setTimeout(()=>navigate("/pc"), 4000)
    }

    return (
        <article className="start-page">
            <header>
                <DateTime />
            </header>
            {
                isLoading 
                ? 
                    <section className="welcome-box">
                        <h2>Welcome to my PC</h2>
                        <div className="loading-window">
                            <div className="loading-bar">
                                {
                                    loadingBricks.map((brick, i)=> (
                                        <div key={i} className="loading-brick"></div>
                                    ))
                                }
                                <div className="loading-wall"></div>
                            </div>
                            loading...
                        </div>
                    </section>
                :   <section className="login-window">
                        <h2>Select User</h2>
                        <ul className="user-list"> 
                            <li className={`user ${isUserSelected ? "user-selected" : ""}`} onClick={()=>setIsUserSelected(!isUserSelected)}>
                                <img src="/images/profile/profile-pic.png" alt=""/>
                                <span>Ernesto Borges</span>
                            </li>
                        </ul>
                        <button onClick={()=>{setIsLoading(true);loading()}} disabled={!isUserSelected}>Enter</button>
                    </section>
            }
            <footer>
                Portfolio
            </footer>
        </article>

    )
}