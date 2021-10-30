import React from 'react'
import { useContext, MainContext } from 'react'

const Header = () => {
    const { theme } = useContext(MainContext)
        
    return (
        <div>
            <h2>Current Theme:{theme} </h2>
        </div>
    )
}

export default Header
