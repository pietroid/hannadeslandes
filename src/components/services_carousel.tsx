import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { underscoreToReadableText } from "../utils/string_utils";

import '../components/animation.css'
import { Card } from "./card";

interface ServicesCarouselState {
  serviceNumber: number;
}

export class ServicesCarousel extends React.Component<{},ServicesCarouselState> {
    imageWrapperRef;
    services = [
        {name:'Mapa Astral', filename:'mapa_astral.png'},
        {name:'Sinastria Amorosa', filename:'sinastria_amorosa.png'},
        {name:'Alinhamento dos Chakras', filename:'alinhamento_dos_chakras.png'},
        {name:'Mahadasha', filename:'mahadasha.png'},
        {name:'Oráculo', filename:'oraculo.png'},
    ]
    images = [];
    imagePath = '../images/services/'
    constructor(props){
        super(props);
        this.state = {
            serviceNumber:0
        };
        this.imageWrapperRef = React.createRef();
       setInterval(() => this.triggerAnimationOut(),6000);
    }
    
    triggerAnimationOut = () => {
      console.log('starting fadeout');
      const wrapper = this.imageWrapperRef.current;
      wrapper.classList.toggle('image-gone');
      setTimeout(() => this.changeState(), 500);
    }
    
    changeState = () => {
      console.log('starting trnasition');
      this.setState((prevState) => ({ serviceNumber: (prevState.serviceNumber +1) % 5 }));
      
    }

    triggerAnimationIn = () => {
      console.log('starting fadein');
      const wrapper = this.imageWrapperRef.current;
      wrapper.classList.toggle('image-gone');
    }

    componentDidUpdate(){
      this.triggerAnimationIn();
    }
    render() {
      return (
      <StaticQuery
          query={graphql`
          query ServicesImage {
            allFile(filter:{relativeDirectory:{eq:"services"}}) {
              edges{
                node{
                  id
                  name
                  childImageSharp{
                    gatsbyImageData(
                      width: 900
                      placeholder: NONE
                    )
                  }
                }
              }
            }
          }
          `}
          render={ (data) => {
            const services = data.allFile.edges.map(item => ({
              name: underscoreToReadableText(item.node.name),
              image: getImage(item.node),
            }));
            const currentService = services[this.state.serviceNumber];
            return (
                <div className="centered_wrapper">
                    <div ref={this.imageWrapperRef} className="service_image_wrapper">
                      <h1 className="centered_text">{currentService.name}</h1>
                      <GatsbyImage loading="eager" image={currentService.image} alt='bla' />
                    </div>
                </div>
            )
          }
        }
        /> );
  }
}
export default ServicesCarousel;