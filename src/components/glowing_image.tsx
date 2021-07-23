import React from 'react'
import glowingBorder from '../images/image_glow_border.png'

export const GlowingImage = ({image}) => {
    return (
        <div style={{width:'100%'}}>
            <div style={{position:'relative',width:'100%',paddingBottom:'100%'}}>
                <img style={{borderRadius:'50%',position:'absolute', left:'17.5%', top:'17%',width:'65%', height:'65%', backgroundColor:'yellow'}} src={image}/>
                <img style={{position:'absolute', width:'100%', height:'100%'}} src={glowingBorder}/>
            </div>
        </div>
    )
}