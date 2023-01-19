import "./styles.css"
import { FolderPathIcon } from "../Icons/FolderPath/FolderPath"
import { useState } from "react"

export function FolderWindowPaths({path, selectedPath, setSelectedPath}){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li>
            <div 
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPath(path.name);
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
                        path.children.map((path, index) => (
                            <FolderWindowPaths key={index} path={path} selectedPath={selectedPath} setSelectedPath={setSelectedPath}/>
                        ))
                    }
                </ul>
                : ""
            }
        </li>
                           
    )
}