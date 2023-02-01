import "./styles.css";
import { DateTime } from "./DateTime";
import { useContext, useEffect, useState } from "react";
import OpenedFilesContext from "../../context/OpenedFilesProvider";
import UserPopupContext from "../../context/UserPopupProvider";
import PcConfigsContext from "../../context/PcConfigsProvider";
export function Taskbar(){
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    const setIsPopupOn = useContext(UserPopupContext).setIsPopupOn;
    const {volume, setVolume} = useContext(PcConfigsContext);
    const [newOpenedFiles, setNewOpenedFiles] = useState([]);
    useEffect(()=>{
        setNewOpenedFiles([...openedFiles]);
    }, [openedFiles])

    function handleMinimizationToggle(file){
        const newList = openedFiles.map( item => {
            if(item.index === file.index){
                const updatedItem = {
                    ...item,
                    minimized: item.minimized ? false : true
                };
                return updatedItem;
            }
            return item;
        });
        setOpenedFiles(newList);
        
    }
    function handleCloseButton(event, file){
        event.stopPropagation();
        setOpenedFiles(prev => prev.filter(item => item.name !== file.name));
    }
    return <header>
        <div className="header-box">
            <div className="user-icon" onClick={()=>setIsPopupOn(true)}>
                <img src="images/taskbar-icons/user.svg" alt=""/>
                <span>Ernesto Borges - PC</span>
            </div>
            <nav className="navbar">
                <ul>
                    {newOpenedFiles.sort((a, b) => a.index - b.index).map((file, i) => 
                        <li key={i} onClick={() => handleMinimizationToggle(file)}>
                            <img src={`/images/taskbar-icons/${file.name}.png`} alt="" />
                            <div className="filename-container">
                                <div>{file.name}</div>
                            </div>
                            <button onClick={(event) => handleCloseButton(event, file)}>X</button>
                        </li>
                    )}
                </ul>
            </nav>
            <div className="notification-area">
                <div onClick={()=>setVolume(volume === 3 ? 0 : volume + 1)}>
                    <img src={`/images/taskbar-icons/volume${volume}.png`} alt="" />
                </div>
                <div>
                    EN
                </div>
                <DateTime />
            </div>
        </div>
    </header>
}