import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { underscoreToReadableText } from "../utils/string_utils";

import '../components/animation.css'
import { Card } from "./card";

interface FeedbacksCarouselState {
    feedbackNumber: number;
}

export class FeedbacksCarousel extends React.Component<{}, FeedbacksCarouselState> {
    imageWrapperRef;
    feedbacks = [
        'f1.png',
        'f2.png',
        'f3.png',
        'f4.png',
        'f5.png',
    ]
    images = [];
    imagePath = '../images/feedbacks/'
    constructor(props) {
        super(props);
        this.state = {
            feedbackNumber: 0
        };
        this.imageWrapperRef = React.createRef();
        setInterval(() => this.triggerAnimationOut(), 8000);
    }

    triggerAnimationOut = () => {
        const wrapper = this.imageWrapperRef.current;
        wrapper.classList.toggle('image-gone');
        setTimeout(() => this.changeState(), 500);
    }

    changeState = () => {
        this.setState((prevState) => ({ feedbackNumber: (prevState.feedbackNumber + 1) % 5 }));

    }

    triggerAnimationIn = () => {
        const wrapper = this.imageWrapperRef.current;
        wrapper.classList.toggle('image-gone');
    }

    componentDidUpdate() {
        this.triggerAnimationIn();
    }
    render() {
        return (
            <StaticQuery
                query={graphql`
          query FeedbacksImage {
            allFile(filter:{relativeDirectory:{eq:"feedbacks"}}) {
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
                render={(data) => {
                    const feedbacks = data.allFile.edges.map(item => ({
                        image: getImage(item.node),
                    }));
                    const currentFeedback = feedbacks[this.state.feedbackNumber];
                    return (
                        <div className="content_box">
                            <div ref={this.imageWrapperRef} className="service_image_wrapper">
                                <GatsbyImage loading="eager" image={currentFeedback.image} alt='bla' />
                            </div>
                        </div>
                    )
                }
                }
            />);
    }
}
export default FeedbacksCarousel;