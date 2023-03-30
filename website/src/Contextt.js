import { createContext, useState } from 'react';

export const MyContext = createContext(null);

export function MyContextProvider({children}) {
  const [showCards, setShowCards] = useState(false);

  return (
    <MyContext.Provider value={{
      showCards,
      setShowCards
      }}>
      {children}
    </MyContext.Provider>
  );
}