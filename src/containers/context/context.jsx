import { createContext } from "react";


export default createContext({
    color: 1,
    power: 1,
    count: 1,
    setColor: () => Promise.resolve(null),
    setPower: () => Promise.resolve(null),
    setCount: () => Promise.resolve(null),
})