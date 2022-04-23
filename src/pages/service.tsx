import * as React from "react"
import '../components/global_style.css'
import { RoundButton } from "../components/round_button"
import whatsapp from '../images/whatsapp_logo.svg'
import instagram from '../images/instagram_logo.svg'
import Background from "../components/background"
import BackButton from "../components/back_button"
import mapaAstral from "../images/services/mapa_astral.png"
import ServicesCarousel from "../components/services_carousel"
import { Button } from "../components/button"
const ServicePage = () => {
    return <>
        <div className="contact_buttons">
            <RoundButton icon={instagram} text="@raiodeiansa" href="https://www.instagram.com/raiodeiansa/" />
            <RoundButton icon={whatsapp} text="(11) 99122-1246" href="https://wa.me/message/2CYPGMOMIGYXK1" />
        </div>

        <Background />

        <BackButton />

        <div className="header">
            <h1 className="header_text">Mapa Astral</h1>
        </div>
        <div className="global_wrapper">
            <div className="wrapper">
                <div className="content_box">
                    <h2 className="centered_text_mobile">Benefícios e objetivos</h2>
                    <div className="v_space" />
                    <p>Meu nome é Hanna Deslandes.<br /><br />

                        O incentivo ao avanço tecnológico, assim como a execução dos pontos do programa nos obriga à análise das condições financeiras e administrativas exigidas. Por outro lado, a complexidade dos estudos efetuados cumpre um papel essencial na formulação de alternativas às soluções ortodoxas.
                        <br /><br />
                        Caros amigos, a contínua expansão de nossa atividade promove a alavancagem dos conhecimentos estratégicos para atingir a excelência.</p>
                    <div className="v_space" />
                    <h2 className="centered_text_mobile">Benefícios e objetivos</h2>
                    <div className="v_space" />
                    <p>Meu nome é Hanna Deslandes.<br /><br />

                        O incentivo ao avanço tecnológico, assim como a execução dos pontos do programa nos obriga à análise das condições financeiras e administrativas exigidas. Por outro lado, a complexidade dos estudos efetuados cumpre um papel essencial na formulação de alternativas às soluções ortodoxas.
                        <br /><br />
                        Caros amigos, a contínua expansão de nossa atividade promove a alavancagem dos conhecimentos estratégicos para atingir a excelência.</p>
                    <div className="v_space" />
                </div>
                <img style={{ width: 450, height: 450, marginLeft: 100 }} src={mapaAstral} />

            </div>
        </div>


    </>
}

export default ServicePage