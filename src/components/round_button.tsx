import React, { useRef, useEffect } from 'react'
import '../components/buttons.css'

export const RoundButton = ({icon,text,href}) => {
    return (
        <a className = "button round_button" href={href}>
            <div style={{display:'flex',justifyContent:'flex-end',width:'100%',height:'100%'}}>
                <div style={{whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis-word',display:'flex', alignItems:'center', margin:5, width:'100%'}}>
                    <p>{text}</p>
                </div>
                <img style={{opacity:0.66, height:'100%'}} src={icon}/>
            </div>
        </a>
    )
}