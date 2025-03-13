import React, { createContext, useState } from 'react'
export const TierListContext = createContext();


const TierListProvider = ({ children }) => {

    const [times, setTimes] = useState([]);
    const [colaboradores, setColaboradores] = useState([]);

    return (
        <TierListContext.Provider
            value={{
                times, setTimes,
                colaboradores, setColaboradores
            }}
        >
            {children}
        </TierListContext.Provider>
    )
}

export default TierListProvider
