import "./styles.css"
import { useNavigate } from "react-router-dom"
export function UserPopup({setIsPopupOn}){
    const navigate = useNavigate();
    return (
        <div className="user-popup-container">
            <article className="user-popup-box">
                <header>
                    <h2>Web Dev Account</h2>
                    <button onClick={()=>setIsPopupOn(false)}>X</button>
                </header>
                <section>
                    <div className="profile-pic-container">
                        <div className="profile-pic-wrapper">
                            <img src="/images/profile/profile-pic.png" alt=""/>
                        </div>
                    </div>
                    <ul>
                        <li><span>Name: </span><span>Ernesto Borges</span></li>
                        <li><span>Birth: </span><span>02/11/1995</span></li>
                        <li><span>Account Created: </span><span>April, 2022</span></li>
                    </ul>
                </section>
                <footer>
                    <button onClick={()=>{
                        setIsPopupOn(false);
                        navigate("/")
                        }
                        }
                    >RESTART PC</button>
                </footer>
            </article>
        </div>
        
    )
}