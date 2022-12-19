import "./style.css";
import { DateTime } from "./DateTime";
export function Taskbar(){
    const taskbarButtons = ["home", "about", "projects", "contact"]
    return <header>
        <div className="header-box">
            <div>Logo</div>
            <nav className="navbar">
                <ul>
                    {taskbarButtons.map(button => 
                        <li>
                            <img src={`/images/taskbar-icons/${button}.png`} alt="" />
                            <p>{button}</p>
                        </li>
                    )}
                </ul>
            </nav>
            <div className="notification-area">
                <div>
                    <img src="/images/taskbar-icons/volume.png" alt="" />
                </div>
                <div>
                    EN
                </div>
                <DateTime />
            </div>
        </div>
    </header>
}