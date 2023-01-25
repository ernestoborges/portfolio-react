import Draggable from "react-draggable";
import "./styles.css"
import {useState} from "react";
export function TableApp({order, file, openedFiles, setOpenedFiles}){

    const [extraRows, setExtraRows] = useState(3);
    const [extraColumns, setExtraColumns] = useState(1);
    const [crescentItemOrder, setCrescentItemOrder] = useState(1);
    const [crescentNameOrder, setCrescentNameOrder] = useState(1);
    const [crescentRatingOrder, setCrescentRatingOrder] = useState(-1);
    const [skills, setSkills] = useState(
        [
            {
                index: 1,
                icon: "html.png",
                name: "HTML",
                link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
                rating: 4, 
            },
            {
                index: 2,
                icon: "css.png",
                name: "CSS",
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                rating: 4, 
            },
            {
                index: 3,
                icon: "javascript.png",
                name: "JavaScript",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                rating: 4, 
            },
            {
                index: 4,
                icon: "node.png",
                name: "NodeJS",
                link: "https://nodejs.org/en/docs/",
                rating: 2, 
            },
            {
                index: 5,
                icon: "mongodb.png",
                name: "MongoDB",
                link: "https://www.mongodb.com/docs/",
                rating: 2, 
            },
            {
                index: 6,
                icon: "react.png",
                name: "ReactJS",
                link: "https://reactjs.org/docs/getting-started.html",
                rating: 3, 
            },
            {
                index: 7,
                icon: "git.png",
                name: "Git",
                link: "https://git-scm.com/doc",
                rating: 2, 
            },
            {
                index: 8,
                icon: "github.png",
                name: "GitHub",
                link: "https://docs.github.com/pt",
                rating: 2, 
            },
        ]
    );


    const alphabet = ("ABCDEFGHIJKLMNOPQRSTUXWXYZ").split("");

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
                className={`table-window ${file.minimized ? "hidden" : ""}`}
                onClick={()=>{
                    const newOrder = [...openedFiles]
                    const item = newOrder.splice(order, 1)[0];
                    newOrder.splice(newOrder.length, 0, item);
                    setOpenedFiles(newOrder);
                }}
            >
                <div className="table-window-box">
                        <header>
                            <div id="drag-point" className="title">
                                <h2>
                                    <div className="title-icon">
                                        <div>
                                            <div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    {`${file.name} - Table`}
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
                            <ul className="skills-table">
                                <li className="skill-item" style={{gridTemplateColumns:`3rem 18rem 28rem 18rem repeat(${extraColumns},10rem)`}}>
                                    <div className="column-n row-n"><span> </span></div>
                                    {
                                        [...Array(3 + extraColumns)].map((skill, index) => (
                                            <div key={index} className="column-n">{alphabet[index]}</div>
                                        ))
                                    }
                                </li>
                                <li className="skill-item" style={{gridTemplateColumns:`3rem 18rem 28rem 18rem repeat(${extraColumns},10rem)`}}>
                                    <div className="row-n"><span>1</span></div>
                                    <div className="header icon" onClick={()=>{
                                        setSkills(
                                            skills.sort(
                                                (a,b) => (a.index > b.index) 
                                                ? crescentItemOrder 
                                                : ((b.index > a.index) 
                                                    ? crescentItemOrder * (-1) 
                                                    : 0)
                                                )
                                            )
                                        setCrescentItemOrder(crescentItemOrder * (-1))
                                    }}>Skill</div>
                                    <div className="header name" onClick={()=>{
                                        setSkills(
                                            skills.sort(
                                                (a,b) => (a.name > b.name) 
                                                ? crescentNameOrder 
                                                : ((b.name > a.name) 
                                                    ? crescentNameOrder * (-1) 
                                                    : 0)
                                                )
                                            )
                                        setCrescentNameOrder(crescentNameOrder * (-1))
                                    }}>Name</div>
                                    <div className="header rating" onClick={()=>{
                                        setSkills(
                                            skills.sort(
                                                (a,b) => (a.rating > b.rating) 
                                                ? crescentRatingOrder 
                                                : ((b.rating > a.rating) 
                                                    ? crescentRatingOrder * (-1) 
                                                    : 0)
                                                )
                                            )
                                        setCrescentRatingOrder(crescentRatingOrder * (-1))
                                    }}>Rating</div>
                                    {
                                        [...Array(extraColumns)].map((col, index)=>(
                                            <div key={index} className="empty"></div>
                                        ))
                                    }
                                </li>
                                {
                                    skills.concat([...Array(extraRows)]).map((skill, index) => (
                                        <li key={index} className="skill-item" style={{gridTemplateColumns:`3rem 18rem 28rem 18rem repeat(${extraColumns},10rem)`}}>
                                            <div className="row-n"><span>{index + 2}</span></div>
                                            <div className={`${index < skills.length ? "element" : "empty"} icon`}>{skill?.icon ? <img src={`images/skills-icons/${skill.icon}`} alt=""></img> : <div></div> }</div>
                                            <div className={`${index < skills.length ? "element" : "empty"} name`}>{skill?.name ? <a href={skill.link} target="_blank" rel="noreferrer">{skill.name}</a> : ""}</div>
                                            <div className={`${index < skills.length ? "element" : "empty"} rating`}>{skill?.rating ? skill.rating+"/5" : ""}</div>
                                            {
                                                [...Array(extraColumns)].map((col, index)=>(
                                                    <div key={index} className="empty"></div>
                                                ))
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                        <footer>
                            <div>
                                <span>READY</span>
                                <span>NUM</span>
                                <span>{`ROWS ${9 + extraRows}`}</span>
                                <span>{`COLUMNS ${3 + extraColumns}`}</span>
                            </div>  
                        </footer>
                    </div>
            </article>
        </Draggable>
    )
}