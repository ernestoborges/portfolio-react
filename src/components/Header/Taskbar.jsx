import "./styles.css";
import { DateTime } from "./DateTime";
import { useContext } from "react";
import OpenedFilesContext from "../../context/OpenedFilesProvider";
export function Taskbar(){
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext)
    return <header>
        <div className="header-box">
            <div>Ernesto Borges - PC</div>
            <nav className="navbar">
                <ul>
                    {openedFiles.map((file, i) => 
                        <li key={i}>
                            <img src={`/images/taskbar-icons/${file.name}.png`} alt="" />
                            <div className="filename-container">
                                <div>{file.name}</div>
                            </div>
                            <button onClick={() => setOpenedFiles(prev => prev.filter(item => item.name !== file.name))}>X</button>
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