'use client'

import { PropsWithChildren, createContext, useReducer, useState } from "react";
import { initialState,reducer } from "@/reducers/reducer";

interface ICounterContext{
state:{counterValue:number},
updateCount:(updateType:string)=>void
}

export const CounterContext = createContext<ICounterContext>({
    state:{counterValue:0},
    updateCount:()=>{}
});

export const CounterProvider = ({children}:PropsWithChildren<{}>)=>{
    
    const [state,dispatch] = useReducer(reducer, initialState);

    const updateCount =(updateType:string)=>{
        console.log("inside update count")
        console.log(state)
        dispatch({type:updateType})
    }
    
    return (
        <CounterContext.Provider value={{state,updateCount}}>
            {children}  
        </CounterContext.Provider>
    )   

}
