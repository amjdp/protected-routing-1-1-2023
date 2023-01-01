import SecurityContext from "./SecurityContext";
import { useState } from "react";


const SecurityProvider = (props)=>{
    const[isLogin, setIsLogin] = useState(false);

    return (<SecurityContext.Provider
    value={
        { login:(username,password)=>{
            if(username === "admin@admin.com" && password === "admin"){
                setIsLogin(true);
            }
        },
            isLogin: isLogin,
            logout:()=>{setIsLogin(false)}
    }} >
    {props.children}
    </SecurityContext.Provider> )
}

export default SecurityProvider;