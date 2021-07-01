import * as React from "react"
import '../components/global_style.css'

import mapaAstral from '../images/mapa_astral.png'
import logoImage from '../images/logo.svg'

const IndexPage = () => {
  return (
    <>
    <div className="header">
      <img className="logo" src={logoImage}/>
    </div>
      <div className="wrapper">
        <div className="centered_wrapper">
          <h1 className="centered_text_mobile">Precisa de ajuda?</h1>
          <div className="v_space"/>
          <p id="intro_text">Você está com problemas na sua vida? Você não consegue mais lidar com eles? Se consulte para entender os motivos dos seus problemas e para descobrir como pode resolvê-los.</p>
        </div>
        <div class = "center_spacing"/>
        <div className="centered_wrapper">
          <h1 className="centered_text" >Mapa Astral</h1>
          <div className="service_image_wrapper">
            <img src={mapaAstral} className="box"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage