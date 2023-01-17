import "./styles.css"
import { FolderWindow } from "../FolderWindow/FolderWindow"
import { useState } from "react"

export function Desktop(){
    const [folderState, setFolderState] = useState("closed")
    return <main>
        <div className="desktop-icon" onClick={()=>{setFolderState("about")}}>
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>About</p>
        </div>
        <div className="desktop-icon" onClick={()=>{setFolderState("projects")}}>
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>Projects</p>
        </div>
        <div className="desktop-icon" onClick={()=>{setFolderState("contact")}}>
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>Contact</p>
        </div>
        <FolderWindow className={folderState === "closed" ? "hidden" : ""} folderState={folderState} setFolderState={setFolderState} />
        
    </main>
}