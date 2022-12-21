import "./styles.css";
import { DateTime } from "./DateTime";
import { useContext } from "react";
import OpenedFilesContext from "../../context/OpenedFilesProvider";
export function Taskbar(){
    const openedFiles = useContext(OpenedFilesContext).openedFiles
    return <header>
        <div className="header-box">
            <div>Logo</div>
            <nav className="navbar">
                <ul>
                    {openedFiles.map((file, i) => 
                        <li key={i}>
                            <img src={`/images/taskbar-icons/${file.name}.png`} alt="" />
                            <p>{file.name}</p>
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