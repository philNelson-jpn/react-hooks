import React, {useContext} from 'react'
import {Context} from './Context'

export default function Effect(){
    const {ref, hovered} = useContext(Context)
    return (
        <div>
            <h2>useEffect</h2>
            <div className="hook-wrapper effect-hook" ref={ref}>
                {hovered ? <h1>WOWOWOW</h1> : <h3>Hover me</h3>}
            </div>
        </div>
)}