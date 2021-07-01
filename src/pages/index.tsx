import * as React from "react"
import '../components/global_style.css'
import Logo  from "../components/logo"
import { Body } from "../components/text/body"
import { Header } from "../components/text/header"
import mapaAstral from '../images/mapa_astral.png'
const IndexPage = () => {
  return (
    <>
    <div style={{
      display:'flex',
      flex:1,
      marginTop:50,
      justifyContent:'center',
    }}>
    <Logo/>
    </div>

    <div style={{margin:150}}>
      
      <div style={{
        display:'flex',
        flex:1,
        justifyContent:'space-between',
      }}>
        
        
      <div style={{width:400}}>
        <Header>Precisa de ajuda?</Header>
      <div style={{height:40}}></div>
        <Body>Você está com problemas na sua vida? Você não consegue mais lidar com eles? Se consulte para entender os motivos dos seus problemas e para descobrir como pode resolvê-los.</Body>
      </div>
      <div style={{flexDirection:'column',display:'flex',alignItems:'center'}}>
        <Header>Mapa Astral</Header>
        <img src={mapaAstral} style={{width:450}}></img>
      </div>
      </div>
    </div>
    </>
  )
}

export default IndexPage