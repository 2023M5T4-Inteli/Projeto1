import React, { createContext, useState } from 'react';

// const Context = createContext(['', () => {}]);
export const NotificationsContext = createContext();

// useState

export function NotificationsProvider({children}) {
const [state,setState] = useState([])

return (
    <NotificationsContext.Provider value={{state,setState}}>
        {children}
    </NotificationsContext.Provider>
)
}

