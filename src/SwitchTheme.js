import React from 'react'
import { useContext, MainContext } from 'react'


const SwitchTheme = () => {
    
    const {theme, setTheme} = useContext(MainContext)

    const changeTheme = () => {
    setTheme(theme==="light" ? "dark" : "light")
}
        
    return (
        <div>
            <button onClick={changeTheme}>Switch Theme</button>
        </div>
    )
}

    export default SwitchTheme;
