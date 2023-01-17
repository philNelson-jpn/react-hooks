import React, {useState, useContext} from "react"
import {Context} from './Context'

export default function State(){
    const {count, increment, decrement} = useContext(Context)
    console.log(count)
    return (
        <div>
            <h2>useState</h2>
            <div className="hook-wrapper">
                
                <button className="state-decrement-button" onClick={decrement}>ー</button>
                <span className="state-span">{count}</span>
                <button className="state-increment-button" onClick={increment}>＋</button>
            </div>
        </div>
)}