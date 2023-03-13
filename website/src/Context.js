import React, { createContext, useState } from 'react';

// const Context = createContext(['', () => {}]);
export const Context = createContext();

// useState


function NameProvider({children}) {

    const [state,setState] = useState([])
    
    return (
        <Context.Provider value={{state,setState}}>
            {children}
        </Context.Provider>
    )
}

export default NameProvider;