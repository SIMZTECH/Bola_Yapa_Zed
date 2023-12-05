/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext,useEffect,useReducer } from "react";


// inial state
const initialState = {
    user:(localStorage.getItem("user")!==undefined)?JSON.parse(localStorage.getItem("user")):null,
    role:localStorage.getItem("role")||null,
    token:localStorage.getItem("token")||null
}

// create contexts
export const authContext = createContext(initialState);

// create reducer
const authReducer = (state:any,action:any)=>{
    switch (action.type) {
      case "LOGIN_START":
        return {
          user:null,
          role: null,
          token: null,
        };
      case "LOGIN_SUCCESS":
        return {
          user:action.payload.user,
          role:action.payload.role,
          token:action.payload.token,
        };
      case "LOGOUT":
        return {
          user: null,
          role: null,
          token: null,
        };
     default:
        return state;
    }
};

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(authReducer,initialState);

    // store in local storage
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user));
        localStorage.setItem("token",state.token);
        localStorage.setItem("role",state.role);
    },[state]);

    return (
      <authContext.Provider
        value={{ 
            user: state.user, 
            token: state.token, 
            role: state.role,
            dispatch
       }}>

        {children}
      </authContext.Provider>
    );

};