import React, { useRef, useEffect } from 'react'
import '../components/buttons.css'

export const Button = ({text, href}) => {
    return (
        <a className = "button" href={href}>
            <p style={{userSelect: 'none', fontWeight:400}}>{text}</p>
        </a>
    )
}