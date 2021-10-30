import React from 'react'
import SwitchTheme from './SwitchTheme'

const Footer = ({theme, setTheme}) => {
    return (
        <div>
            <h2>Footer Component</h2>
            <SwitchTheme theme={theme} setTheme={setTheme}/>
        </div>
    )
}

export default Footer
