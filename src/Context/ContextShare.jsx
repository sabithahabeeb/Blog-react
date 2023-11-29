import React, { createContext, useState } from 'react'
export const shareBLogDetailsContext = createContext()

function ContextShare({ children }) {
    const [blogDetails,setBlogDetails] = useState({})
    return (
        <>
            <shareBLogDetailsContext.Provider value={{blogDetails,setBlogDetails}}>
                {children}
            </shareBLogDetailsContext.Provider>
        </>
    )
}

export default ContextShare