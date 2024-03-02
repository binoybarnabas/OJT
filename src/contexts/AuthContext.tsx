'use client'

import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

interface IUser {
    username: string;
    isAuthenticated: boolean;
    userData: {};
  }

interface IAuthContext{
    user:{username:string,isAuthenticated:boolean,userData:{}},
    signIn:(email:string,password:string)=>void,
    signOut:()=>void,
}

const userData = {username:"Admin",department:"travel"};

export const AuthContext = createContext<IAuthContext>(
    {
        user:{username:"",isAuthenticated:false,userData:{}},
        signIn:()=>{},
        signOut:()=>{},
    }
);

export const AuthProvider = ({children} : PropsWithChildren<{}>)=>{
    const router = useRouter()
    const [user, setUser] = useState<IUser>(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : { username: "", isAuthenticated: false, userData: {} };
        } else {
            return { username: "", isAuthenticated: false, userData: {} };
        }
    });
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    const signIn = (email:string,password:string)=>{
        if(email==='admin@gmail.com' && password == '123'){
            setUser({username:email,isAuthenticated:true,userData:userData})
            localStorage.setItem('user', JSON.stringify({ username: email, isAuthenticated: true, userData: userData }));
            router.push('/home')
        }
    }
    
    const signOut = () =>{
        setUser({username:"",isAuthenticated:false,userData:{}})
        localStorage.removeItem('user');
        router.push('/login')
    }

    return(
        <AuthContext.Provider value={{user,signIn,signOut}}>
            {children}
        </AuthContext.Provider>
    )


}
