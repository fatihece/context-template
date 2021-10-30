import React from 'react'
import SwitchTheme from './SwitchTheme'
import { MainContext, useContext } from './context'

const Footer = () => {
    const {seTheme} = useContext(MainContext)
    return (
        <div>
            <h2>Footer Component</h2>
            <SwitchTheme />
        </div>
    )
}

export default Footer
