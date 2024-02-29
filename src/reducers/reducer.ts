export let initialState = {
counterValue : 0
} 

export const reducer = (state:any,action:any)=>{
    switch(action.type){
        case 'increment':console.log("increment") 
                        return {...state, counterValue:state.counterValue+1}
        case 'decrement': console.log("decrement") 
                        return {...state, counterValue:state.counterValue-1}
        case 'reset': console.log("reset") 
                    return {...state,counterValue:initialState.counterValue}
    }

}