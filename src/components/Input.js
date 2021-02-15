import React, { useState } from 'react'
import './Input.css'

import useDispatch from 'react-redux'
import saveTodo from '../features/todoSlice'
function Input() {

    const [input,setInput] = useState()
    const dispatch = useDispatch()

    const addToDo = ()=>{
        console.log(`adding todo ${input}`)
        dispatch(saveTodo({
            item : input,
            done: false,
            id: Date.now()
        }))
    }

    return (
        <div className='input'>
            <input type='text' value={input} onChange={(e)=> setInput(e)}/>
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export default Input
