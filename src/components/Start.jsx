import React, { useRef } from 'react'

const Start = ({setUserName}) => {

    const inputRef = useRef();

    const handleClick=()=>{
        inputRef.current.value && setUserName(inputRef.current.value)
    }
    return (
        <div className="start">
            <input placeholder="Ingresa Tu Nombre" className="startInput" ref={inputRef}/>
            <button className="startButton" onClick={handleClick}>Iniciar el Juego</button>
        </div>
    )
}

export default Start