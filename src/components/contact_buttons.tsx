import React from "react"
import { RoundButton } from "./round_button"

import whatsapp from '../images/whatsapp_logo.svg'
import instagram from '../images/instagram_logo.svg'

export const ContactButtons = () =>{
    return (
        <div className="contact_buttons">
          <RoundButton icon={instagram} text="@raiodeiansa" href="https://www.instagram.com/raiodeiansa/"/>
          <RoundButton icon={whatsapp} text="(11) 99122-1246" href="https://wa.me/message/2CYPGMOMIGYXK1"/>
        </div>
    )
}