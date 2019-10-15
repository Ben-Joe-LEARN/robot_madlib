import React from 'react'

const Robot = ({name, func, input}) => (
    <div>
        <h1>{name}</h1>
        <p>{func(input)}</p>
    </div>
)

// const Robot = (props) => (
//     <div>
//         <h1>{props.name}</h1>
//         <p>{props.func(props.input)}</p>
//     </div>
// )

export default Robot
