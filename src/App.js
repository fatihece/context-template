import React from 'react'
import Footer from './Footer'
import Header from './Header'

const App = () => {
    const[theme, setTheme] = React.useState("light")
    return (
        <div>
            <h2 style={{ color: "red" }}>Learning context </h2>
            <hr/>
            <Header theme={theme} setTheme={ setTheme}/>
            <Footer theme={theme} setTheme={ setTheme}/>
        </div>
    )
}

export default App
