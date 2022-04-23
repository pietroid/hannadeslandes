import * as React from "react"
import back_icon from '../images/back_icon.svg';
const BackButton = () => {
    return <a className="button round_button back_button" href={'https://www.google.com/'}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', height: '100%' }}>
            <img style={{ opacity: 0.66, height: '100%', }} src={back_icon} />
        </div>
    </a>
}

export default BackButton;