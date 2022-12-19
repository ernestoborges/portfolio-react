import "./style.css";
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
                <div className="date-time">
                    <div className="time">
                        mon 10:10am
                    </div>
                    <div className="date">
                        01/01/2021
                    </div>
                </div>
            </div>
        </div>
    </header>
}