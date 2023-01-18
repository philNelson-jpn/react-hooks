import React, {useContext} from 'react'
import {Context} from './Context'

export default function UseContextComponent(){
    const {count, hovered} = useContext(Context)

    return (
        <div>
            <h2>useContext</h2>
            <div className="hook-wrapper multi-line">
                <h3>The current useState count is {count}</h3>
                {hovered ? <h3>You <span className="italic">have hovered</span> over the useEffect component</h3> : <h3>You are <span className="italic">not hovering</span> over the useEffect component.</h3>}
            </div>
        </div>
    )
}