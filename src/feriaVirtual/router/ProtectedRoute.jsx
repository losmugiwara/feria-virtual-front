import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom";

export const ProtectedRoute = ({user, children}) => {


    const nav = useNavigate();

    useEffect(() => {
        if (user.active === false){
            nav('/crearcuenta');
        }
    },[])
    
    

    return children;

}
