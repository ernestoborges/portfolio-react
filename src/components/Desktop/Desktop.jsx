import "./styles.css"
import { useState, useContext } from "react"
import OpenedFilesContext from "../../context/OpenedFilesProvider";
import { FolderWindow } from "../FolderWindow/FolderWindow"
import { NotepadApp } from "../NotepadApp/NotepadApp";
import { TableApp } from "../TableApp/TableApp";
import { ImageApp } from "../ImageAPP/ImageApp";

export function Desktop(){
    const [folderState, setFolderState] = useState("closed")
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext)

    function handleFileClick(name){
        setFolderState(name)
        if(openedFiles.filter(e => e.name === "Archives").length === 0){
            setOpenedFiles((prev)=> [
                ...prev,
                {
                    name: "Archives",
                    minimized: false,
                    type: "folder",
                    index: prev.length > 0 ? prev[prev.length-1].index + 1 : 0,
                    position: prev.length > 0 
                        ? {
                            x: prev[prev.length-1].position.x + 40,
                            y: prev[prev.length-1].position.y + 60
                        }
                        : {x: 10, y: 60}
                } 
            ])
        }
    }
    return <main>
        <div className="desktop-icon" onClick={()=>{handleFileClick("Desktop/About")}}>
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>About</p>
        </div>
        <div className="desktop-icon" onClick={()=>{handleFileClick("Desktop/Projects")}}>
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>Projects</p>
        </div>
        <div className="desktop-icon" onClick={()=>{handleFileClick("Desktop/Contact")}}>
            <div className="icon-container">
                <img src="images/desktop-icons/folder.png" alt="" />
            </div>
            <p>Contact</p>
        </div>
        {/* <AboultTxt className={openedFiles?.about. === "closed" ? "hidden" : ""}></AboultTxt>  */}
        {
            openedFiles.map((file, i) => {
                switch(file.type){
                    case "folder":
                        return <FolderWindow key={i} order={i} file={file} folderState={folderState} openedFiles={openedFiles} setFolderState={setFolderState} />
                    case "txt":
                        return <NotepadApp key={i} order={i} file={file} openedFiles={openedFiles} setOpenedFiles={setOpenedFiles} />
                    case "table":
                        return <TableApp key={i} order={i} file={file} openedFiles={openedFiles} setOpenedFiles={setOpenedFiles} />
                    case "png":
                        return <ImageApp key={i} order={i} file={file} openedFiles={openedFiles} setOpenedFiles={setOpenedFiles} />
                    default:
                        return <></>;
                }
            })
        }
    </main>
}