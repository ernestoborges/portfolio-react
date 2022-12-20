import "./styles.css"
export function FolderWindow({className}){
    return <article className={`folder-window ${className}`}>
        <div className="folder-window-box">
            <header>
                <div className="title">
                    <h2>title - X</h2>
                    <div className="button-container">
                        <button>-</button>
                        <button>X</button>
                    </div>
                </div>
                <div className="subtitle">
                    aio
                </div>
            </header>
            <section>content</section>
            <footer>foooooter</footer>
        </div>
    </article>
}