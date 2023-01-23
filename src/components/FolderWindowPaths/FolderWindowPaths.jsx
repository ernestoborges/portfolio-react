import "./styles.css"
import { FolderPathIcon } from "../Icons/FolderPath/FolderPath"
import { useEffect, useState } from "react"

export function FolderWindowPaths({path, selectedPath, parent, setSelectedPath, setFolderState}){
    const [isOpen, setIsOpen] = useState(false);
    const [fullPath, setFullPath] = useState("");

    useEffect(()=>{
        setFullPath(parent ? parent+"/"+path.name : path.name);
    },[parent, path.name])
    useEffect(()=>{
        if(path.name === "Desktop"){
            setIsOpen(true);
        }
    },[path.name])

    return (
        <li>
            <div 
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPath(path.name);
                    setFolderState(fullPath);
                }}
                style={selectedPath === path.name ? {backgroundColor: "rgba(220, 210, 197, 0.6)"} : {}}
            >
                <div
                    className="path-arrow-container"
                    onClick={
                        (e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }}
                >
                    <img 
                        className="path-arrow" 
                        src="images/misc-icons/path-arrow.png" 
                        alt=""
                        style={{transform: `rotate(${isOpen ? "-45deg" : "-135deg"})`}}
                    />
                </div>
                <FolderPathIcon/>
                {path.name}
            </div>
            {path.children && isOpen ? 
                <ul>
                    {
                        path.children.map((child, index) => (
                            <FolderWindowPaths key={index} path={child} parent={fullPath} selectedPath={selectedPath} setSelectedPath={setSelectedPath} setFolderState={setFolderState}/>
                        ))
                    }
                </ul>
                : ""
            }
        </li>
                           
    )
}