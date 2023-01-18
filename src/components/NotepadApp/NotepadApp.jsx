import Draggable from "react-draggable";

export function NotepadApp({file, openedFiles, setOpenedFiles}){

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

    function handleMinimizeButton(){

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
            <article id="drag-point" className={`folder-window ${file.minimized ? "hidden" : ""}`}>
            <div className="folder-window-box">
                    <header>
                        <div id="drag-point" className="title">
                            <h2>
                                <div className="title-icon">
                                <div></div>
                                <div></div>
                                </div>
                                {file.name}
                            </h2>
                            <div className="button-container">
                                <button onClick={()=>handleMinimizeButton()}>-</button>
                                <button onClick={()=>setOpenedFiles(prev => prev.filter(item => item.name !== file.name))}>X</button>
                            </div>
                        </div>
                        <div className="subtitle">
                            <button
                                className="option-button"
                            >
                                File
                            </button>
                        </div>
                    </header>
                    <section>
                        text
                    </section>
                    <footer>{`utf-8`}</footer>
                </div>
            </article>
        </Draggable>
    )
}