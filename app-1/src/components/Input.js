import React from 'react'

function InputField(props) {

    return (
        <div>
            <input placeholder="placeholder text" onChange={(e) => props.handleInputChange(e.target.value)}></input>
        </div>
    )
}

export default InputField