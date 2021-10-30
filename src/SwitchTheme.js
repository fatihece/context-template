import React from 'react'

const SwitchTheme = ({theme, setTheme}) => {

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
