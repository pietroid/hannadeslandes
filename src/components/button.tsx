import React, { useRef, useEffect } from 'react'
import '../components/buttons.css'

export const Button = ({text}) => {
    return (
        <div className = "button">
            <p style={{userSelect: 'none'}}>{text}</p>
        </div>
    )
}