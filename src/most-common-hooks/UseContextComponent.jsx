import React, {useContext} from 'react'
import {Context} from './Context'

export default function UseContextComponent(){
    const {count, hovered} = useContext(Context)
    const countStyles = {color: count >= 20 ? "hsl(0, 100%, 70%)" : count >= 10 ? "hsl(50, 100%, 70%)" : "hsl(123, 100%, 70%)"}
    return (
        <div>
            <h2>useContext</h2>
            <div className="hook-wrapper multi-line">
                <h3>The current useState count is <span style={countStyles}>{count}</span></h3>
                {hovered ? <h3>useEffect component <span className="italic-hovered">hovered</span></h3> : <h3>useEffect component <span className="italic-not-hovered">not hovered</span></h3>}
            </div>
        </div>
    )
}