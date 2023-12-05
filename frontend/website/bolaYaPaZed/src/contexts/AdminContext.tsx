/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { createContext,useEffect} from "react";

// initial state
const initialState:any = {
    data:(localStorage.getItem("user")!==undefined)?JSON.parse(localStorage.getItem("user")):null
};


export const adminContext = createContext(initialState);


export const AdminContextProvider = ({children})=>{
    const [state,setUserData] = React.useState(initialState);

    useEffect(()=>{



        
    });

    return (
        <adminContext.Provider
            value={{
                userData:state.data,
                setUserData
            }}
        
        >
            {children}
        </adminContext.Provider>
    );

};