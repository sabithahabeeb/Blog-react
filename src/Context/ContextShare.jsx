import React, { createContext, useState } from 'react'
export const shareBLogDetailsContext = createContext()
export const shareDarkLightContext = createContext()

function ContextShare({ children }) {
    const [blogDetails, setBlogDetails] = useState({})
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
        <>
            <shareBLogDetailsContext.Provider value={{ blogDetails, setBlogDetails }}>
                <shareDarkLightContext.Provider value={{isDarkMode, setIsDarkMode}}>
                    {children}
                </shareDarkLightContext.Provider>

            </shareBLogDetailsContext.Provider>
        </>
    )
}

export default ContextShare