import {MainContext, useContext} from "./context"


const Header = () => {
   const {theme} = useContext(MainContext)
        
    return (
        <div>
            <h2>Current Theme:{theme} </h2>
        </div>
    )
}

export default Header
