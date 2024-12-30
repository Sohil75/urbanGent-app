import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
            axios.get('/api/users')
            .then(response=>setUser(response.data.user))
            .catch(err=>console.log(err)
            );
        }
    },[]);

    const login=(token,user)=>{
        localStorage.setItem('token',token);
        setUser(user);
        axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
    };
    const logout=()=>{
        localStorage.removeItem('token');
        setUser(null);
        delete axios.defaults.headers.common["Authorization"];
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth =() =>React.useContext(AuthContext);