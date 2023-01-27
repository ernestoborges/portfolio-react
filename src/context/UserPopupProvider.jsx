import { createContext, useState } from "react"

const UserPopupContext = createContext(null)

export function UserPopupProvider({children}){
    const [isPopupOn, setIsPopupOn] = useState(false);
    return (
        <UserPopupContext.Provider value={{isPopupOn, setIsPopupOn}}>
            {children}
        </UserPopupContext.Provider>
    )
}

export default UserPopupContext