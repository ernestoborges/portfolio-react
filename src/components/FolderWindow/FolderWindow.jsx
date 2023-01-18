import "./styles.css"
import { foldersData } from "../../db/foldersData"
import { useContext, useEffect, useRef, useState } from "react"
import OpenedFilesContext from "../../context/OpenedFilesProvider";
import Draggable from "react-draggable"

export function FolderWindow({file, folderState, setFolderState}){

    const windowsRef = useRef();
    const [folder, setFolder] = useState();
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext)
    // const setOpenedFiles = useContext(OpenedFilesContext).setOpenedFiles

    useEffect(()=>{
        setFolder(foldersData.filter(item => item.name === folderState)[0])
    }, [folderState])

    function handleFileClick(file){
        switch(file.type){
            case "folder":
                setFolderState(`${folder?.name}/${file.name}`)
                break;
            case "file":
                if(openedFiles.filter(e => e.name === file.name.split(".")[0]).length === 0){
                    setOpenedFiles((prev)=> [
                        ...prev,
                        {
                            name: file.name.split(".")[0],
                            minimized: false,
                            type: file.name.split(".")[1].toLowerCase(),
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
                console.log("file")
                break;
            case "link":
                window.open(file.link)
                console.log("link")
                break;
            default:
                break;
        }
    }

    return (
        <Draggable bounds="parent" handle="#drag-point">
            <article className={`folder-window`}>
                <div className="folder-window-box">
                    <header>
                        <div id="drag-point" className="title">
                            <h2>
                                <div className="title-icon">
                                <div></div>
                                <div></div>
                                </div>
                                {`/desktop/${folder?.name}`}
                            </h2>
                            <div className="button-container">
                                <button>-</button>
                                <button onClick={()=>setOpenedFiles(prev => prev.filter(item => item.name !== file.name))}>X</button>
                            </div>
                        </div>
                        <div className="subtitle">
                            <button
                                className="back-button"
                                disabled={!folder?.name.includes("/")}
                                onClick={
                                    ()=> setFolderState(folder?.name.split("/").filter((item, i, arr) => arr.length !== i+1).join("/"))
                                }
                            >
                                <img className="back-button-img" src="images/misc-icons/arrow.png" alt=""/>
                            </button>
                        </div>
                    </header>
                    <section>
                        <ul>
                            {
                                folder?.files.map((file, index) => (
                                    <li  
                                        key={index}
                                        onClick = { () => handleFileClick(file) }
                                    >
                                        <div className="icon-container">
                                            <img src={`images/desktop-icons/${file.icon}.png`} alt="" />
                                        </div>
                                        <p>{file.name}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    <footer>{`${folder?.files.length} item${folder?.files.length === 1 ? "" : "s"} |`}</footer>
                </div>
            </article>
        </Draggable>
    )
}