import React from 'react'
import {MainContext, useContext} from "./context"



const Footer = () => {
    const changeTheme = () => {
       setTheme(theme === "light" ? "dark" : "light")
    }
    
    const {setTheme, theme} = useContext(MainContext)
    return (
        <div>
            <h2>Footer Component</h2>
             <button onClick={changeTheme}>Switch theme</button>
        </div>
    )
}

export default Footer
