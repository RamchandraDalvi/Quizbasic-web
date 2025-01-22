import { useRef } from 'react'
import './Start.css'

export default function Start({setUsername}) {
    const inputRef = useRef();

    const handleClick=()=>{
        inputRef.current.value && setUsername(inputRef.current.value);
    }

    return (
        <div className="start">
            <input type="text" placeholder='Enter Name' className="start-input" ref={inputRef}/>
            <button className="btn-start" onClick={handleClick}>Start</button>
        </div>
    )
}
