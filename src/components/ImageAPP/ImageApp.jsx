import Draggable from "react-draggable";
import "./styles.css"
export function ImageApp({order, file, openedFiles, setOpenedFiles}){
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
                className={`image-window ${file.minimized ? "hidden" : ""}`}
                onClick={()=>{
                    const newOrder = [...openedFiles]
                    const item = newOrder.splice(order, 1)[0];
                    newOrder.splice(newOrder.length, 0, item);
                    setOpenedFiles(newOrder);
                }}
            >
                <div className="image-window-box">
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
                                    {`${file.ref}`}
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
                            </div>
                        </header>
                        <section>
                            <div className="image-container">
                                <img src={`images/projects-preview/${file.ref}.png`} alt="" />
                            </div>
                            <div className="desc-container">
                                {file.content.map((paragraph, i)=>(
                                    <><p>{paragraph}</p><br/></>
                                ))}
                            </div>
                        </section>
                        <footer>
                            <div>
                            </div>  
                        </footer>
                    </div>
            </article>
        </Draggable>
    )
}