import "./styles.css"
import { FolderWindow } from "../FolderWindow/FolderWindow"
import { NotepadApp } from "../NotepadApp/NotepadApp";
import { useState, useContext } from "react"
import OpenedFilesContext from "../../context/OpenedFilesProvider";

export function Desktop(){
    const [folderState, setFolderState] = useState("closed")
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext)
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
        {/* <AboultTxt className={openedFiles?.about. === "closed" ? "hidden" : ""}></AboultTxt>  */}
        {
            openedFiles.map((file, i) => {
                switch(file.type){
                    case "txt":
                        return <NotepadApp key={i} file={file} openedFiles={openedFiles} setOpenedFiles={setOpenedFiles} />
                    {/* case "table":
                        return <TableApp /> */}
                    default:
                        break;
                }
            })
        }
    </main>
}