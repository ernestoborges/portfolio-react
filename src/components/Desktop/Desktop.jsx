import "./styles.css"
import { FolderWindow } from "../FolderWindow/FolderWindow"

export function Desktop(){
    return <main>
        <div className="desktop-icon">
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>About</p>
        </div>
        <div className="desktop-icon">
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>Projects</p>
        </div>
        <div className="desktop-icon">
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>Contact</p>
        </div>
        <FolderWindow className="" />

    </main>
}