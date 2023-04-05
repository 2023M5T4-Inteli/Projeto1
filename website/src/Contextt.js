import React, { createContext, useState } from 'react';

// const Context = createContext(['', () => {}]);
export const MyContext = createContext(null);

// useState

export function MyContextProvider({children}) {
// const [state,setState] = useState([])
const [showCards, setShowCards] = useState(false);

return (
    <MyContext.Provider value={{showCards,setShowCards}}>
        {children}
    </MyContext.Provider>
)
}

