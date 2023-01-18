import "./styles.css";
import { DateTime } from "./DateTime";
import { useContext } from "react";
import OpenedFilesContext from "../../context/OpenedFilesProvider";
export function Taskbar(){
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext)

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
            <div>Ernesto Borges - PC</div>
            <nav className="navbar">
                <ul>
                    {openedFiles.map((file, i) => 
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