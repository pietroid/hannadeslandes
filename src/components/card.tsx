import React, { useRef, useEffect } from 'react'
import '../components/buttons.css'

export const Card = (props) => {
    return (
        <a className = "button card" href={'http://www.google.com/'}>
            {props.children}
        </a>
    )
}