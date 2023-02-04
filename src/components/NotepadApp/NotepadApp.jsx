import Draggable from "react-draggable";
import "./styles.css"
export function NotepadApp({order, file, openedFiles, setOpenedFiles}){

    function handleWindowPositionState(event, dragElement){
        const newList = openedFiles.map( item => {
            if(item.index === file.index){
                const updatedItem = {
                    ...item,
                    position: {
                        x: dragElement.x,
                        y: dragElement.y
                    }
                };
                return updatedItem;
            }
            return item;
        });
        setOpenedFiles(newList);
    }

    function handleMinimizeButton(e){
        e.stopPropagation();
        const newList = openedFiles.map( item => {
            if(item.index === file.index){
                const updatedItem = {
                    ...item,
                    minimized: true
                };
                return updatedItem;
            }
            return item;
        });
        setOpenedFiles(newList);
    }
    return (
        <Draggable 
            bounds="parent" 
            handle="#drag-point" 
            onStop={handleWindowPositionState}
            position={file.position}
        >
            <article 
                className={`notepad-window ${file.minimized ? "hidden" : ""}`}
                onClick={()=>{
                    const newOrder = [...openedFiles]
                    const item = newOrder.splice(order, 1)[0];
                    newOrder.splice(newOrder.length, 0, item);
                    setOpenedFiles(newOrder);
                }}
            >
                <div className="notepad-window-box">
                        <header>
                            <div id="drag-point" className="title">
                                <h2>
                                    <div className="title-icon">
                                        <div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    {`${file.name} - Notepad`}
                                </h2>
                                <div className="button-container">
                                    <button onClick={(e)=>handleMinimizeButton(e)}>-</button>
                                    <button onClick={(e)=>{
                                        e.stopPropagation();
                                        setOpenedFiles(prev => prev.filter(item => item.name !== file.name))
                                        }}>X</button>
                                </div>
                            </div>
                            <div className="subtitle">
                                <button className="option-button">File</button>
                                <button className="option-button">Edit</button>
                                <button className="option-button">View</button>
                            </div>
                        </header>
                        <section>
                            {file.content.map((paragraph,i) => <p key={i}>{paragraph}</p> )}
                        </section>
                        <footer>
                            <div>
                                <span>{`Cha ${file.content.join(" ").length + file.content.length - 1}`}</span>
                                <span>{`Wrd ${file.content.join(" ").split(" ").length}`}</span>
                                <span>utf-8</span>
                            </div>  
                        </footer>
                    </div>
            </article>
        </Draggable>
    )
}