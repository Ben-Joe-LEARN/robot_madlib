import React from 'react'

const Form = ({name, handleChange, value}) => (
    <form onSubmit={e => e.preventDefault()}>
        <label>
            Say :
            <input type="text" name={name} onChange={handleChange} value={value}/>
        </label>
    </form>
)

export default Form