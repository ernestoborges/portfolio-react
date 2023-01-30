import "./styles.css"
import {useNavigate} from "react-router-dom"
import { DateTime } from "../Header/DateTime";
import { useState } from "react";

export function StartPage(){
    const navigate = useNavigate();
    const [isUserSelected, setIsUserSelected] = useState(false);
    return (
        <article className="start-page">
            <header>
                <DateTime />
            </header>
            <section className="login-window">
                <h2>Select User</h2>
                <ul className="user-list"> 
                    <li className={`user ${isUserSelected ? "user-selected" : ""}`} onClick={()=>setIsUserSelected(!isUserSelected)}>
                        <img src="/images/profile/profile-pic.png" alt=""/>
                        <span>Ernesto Borges</span>
                    </li>
                </ul>
                <button onClick={()=>navigate("/pc")} disabled={!isUserSelected}>Enter</button>
            </section>
            <footer>
                Portfolio
            </footer>
        </article>

    )
}