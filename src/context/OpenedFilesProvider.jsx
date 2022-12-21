import { createContext, useState } from "react"

const OpenedFilesContext = createContext(null)

export function OpenedFilesProvider({children}){
    const [openedFiles, setOpenedFiles] = useState([])
    return (
        <OpenedFilesContext.Provider value={{openedFiles, setOpenedFiles}}>
            {children}
        </OpenedFilesContext.Provider>
    )
}

export default OpenedFilesContext