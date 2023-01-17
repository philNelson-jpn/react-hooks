import React, {useState, useEffect, useRef} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [count, setCount] = useState(0)
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

    function enter(){
        setHovered(true)
    }

    function leave(){
        setHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)

        return () => {
            ref.current.removeEventListener("mouseenter", enter)
            ref.current.removeEventListener("mouseleave", leave)
        }
    }, [])

    return (
        <Context.Provider value={{count, increment, decrement, ref, hovered, enter, leave}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}