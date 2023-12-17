import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";








const PrivateRoute = ({children}) => {
    const {currentUser} = useContext(AuthContext)

    if(currentUser){

        return children


    }
    
        return  <Navigate to="/" replace={true} />



 
}

export default PrivateRoute













