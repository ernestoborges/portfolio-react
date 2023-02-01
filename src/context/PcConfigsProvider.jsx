import { createContext, useState } from "react"

const PcConfigsContext = createContext(null)

export function PcConfigsProvider({children}){
    const [volume, setVolume] = useState(3)
    return (
        <PcConfigsContext.Provider value={{volume, setVolume}}>
            {children}
        </PcConfigsContext.Provider>
    )
}

export default PcConfigsContext