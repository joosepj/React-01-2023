import { createContext, useState } from "react";

const AuthContext = createContext(null);


export const AuthContextProvider = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(checkIfTokenExists());

    function checkIfTokenExists() {
        if(sessionStorage.getItem("token") === null) {
            return false;
        } else {
            return true;
        }
    }


    return (
        <AuthContext.Provider value ={{
            isLoggedIn: isLoggedIn,
            setLoggedIn: setLoggedIn
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;