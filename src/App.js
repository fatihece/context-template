import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {MainContext, useContext} from "./context"

const App = () => {
    const [theme, setTheme] = React.useState("light")
    
    React.useEffect(() => {
        document.body.className = theme
    }, [theme])

    const data = {
        theme,
        setTheme
    }

    return (
        <MainContext.Provider value={data}>
            <h2 style={{ color: "red" }}>Learning context </h2>
            <hr/>
            <Header />
            <Footer />
        </MainContext.Provider>
    )
}

export default App
