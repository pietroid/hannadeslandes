import * as React from "react"
import '../components/global_style.css'
//import '../components/global_style_2.css'
import logoImage from '../images/logo.svg'
import hanna from '../images/hanna.jpg'

import whatsapp from '../images/whatsapp_logo.svg'
import instagram from '../images/instagram_logo.svg'

import ServicesCarousel from "../components/services_carousel"
import Background from "../components/background"
import { Button } from "../components/button"
import { RoundButton } from "../components/round_button"
/*const IndexPage = () => {
  return (
  <div>
  <div style={{backgroundColor:'red', width:300,height:300, margin:30}}/><div style={{backgroundColor:'red', width:300,height:300, margin:30}}/>
  <div style={{backgroundColor:'red', width:300,height:300, margin:30}}/><div style={{backgroundColor:'red', width:300,height:300, margin:30}}/>
  </div>
  );
}*/

const IndexPage = () => {
  return (
    <>
<div className="contact_buttons">
    <RoundButton icon={instagram} text="@raiodeiansa"/>
    <RoundButton icon={whatsapp} text="(11) 99122-1246"/>
</div>
<Background/>
    <div style={{height:'100vh'}}>
    <div className="header">
      <img className="logo" src={logoImage}/>
    </div>
    
      
    <div className="wrapper">
      <div style={{width:0}}>
    <p style={{whiteSpace: 'nowrap',
    overflow: 'hidden',textOverflow: 'ellipsis-word'}}>TEXTOTEXTOTEXTO</p>
    </div>
        
        <div className="centered_wrapper">
          <h1 className="centered_text_mobile">Precisa de ajuda?</h1>
          <div className="v_space"/>
          <p id="intro_text">Você está com problemas na sua vida? Você não consegue mais lidar com eles? Se consulte para entender os motivos dos seus problemas e para descobrir como pode resolvê-los.</p>
          <div className="v_space"/>
          <Button text="saber mais"/>
          <div className="v_space"/>
        </div>
        
        <div className="center_spacing"/>

        <ServicesCarousel/>
      
      </div>
    </div>
    <div className="wrapper">
      <div className="centered_wrapper">
          <h1 className="centered_text_mobile">Quem sou eu</h1>
          <div className="v_space"/>
          <p id="intro_text">Meu nome é Hanna Deslandes. <br/><br/>
O incentivo ao avanço tecnológico, assim como a execução dos pontos do programa nos obriga à análise das condições financeiras e administrativas exigidas. Por outro lado, a complexidade dos estudos efetuados cumpre um papel essencial na formulação de alternativas às soluções ortodoxas. <br/><br/>
Caros amigos, a contínua expansão de nossa atividade promove a alavancagem dos conhecimentos estratégicos para atingir a excelência.</p>
      </div>

      <div className="center_spacing"/>

      <div className="centered_wrapper">
          <div className="service_image_wrapper">
            <img src={hanna} className="box round shadow"/>
          </div>
      </div>
    </div>

    </>
  )
}

export default IndexPage