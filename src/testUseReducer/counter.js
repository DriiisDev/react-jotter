import React, {useReducer} from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const Counter = () =>{
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            <h1>counter - {count}</h1>

            <button onClick={()=>dispatch({type:'increment'})}>increment</button>

            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>

            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </>
    );

}

export default Counter;