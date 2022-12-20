import "./styles.css"
import { foldersData } from "../../db/foldersData"
import { useEffect, useState } from "react"
export function FolderWindow({className, folderState, setFolderState}){

    const [folder, setFolder] = useState();

    useEffect(()=>{
        setFolder(foldersData.filter(item => item.name === folderState)[0])
    }, [folderState])

    return <article className={`folder-window ${className}`}>
        <div className="folder-window-box">
            <header>
                <div className="title">
                    <h2>
                        <div className="title-icon">
                          <div></div>
                          <div></div>
                        </div>
                        {`/desktop/${folder?.name}`}
                    </h2>
                    <div className="button-container">
                        <button>-</button>
                        <button onClick={()=>{setFolderState("closed")}}>X</button>
                    </div>
                </div>
                <div className="subtitle">
                    aio
                </div>
            </header>
            <section>
                <ul>
                    {folder?.files.map(file => <li>
                        <div className="icon-container">
                            <img src={`images/desktop-icons/${file.icon}.png`} alt="" />
                        </div>
                        <p>{file.name}</p>
                    </li>)}
                </ul>
            </section>
            <footer>foooooter</footer>
        </div>
    </article>
}