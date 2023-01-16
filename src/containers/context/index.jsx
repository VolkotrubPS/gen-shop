import React, {useState} from "react";
import Context from "./context";


function ContextProvider({children}){
    const [color, setColor] = useState(1);
    const [power, setPower] = useState(1);
    const [count, setCount] = useState(1);

    const providedValue = {
        color,
        power,
        count,
        setColor,
        setPower,
        setCount,
    }
    return <Context.Provider value = {providedValue}>{children}</Context.Provider>
}

export default ContextProvider
