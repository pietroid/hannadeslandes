import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef, useEffect } from 'react'
import '../components/buttons.css'
import { underscoreToReadableText } from '../utils/string_utils';

export const CardsSection = () => {
    return (
    <StaticQuery
        query={graphql`
        query AllServices {
            allFile(filter:{relativeDirectory:{eq:"services"}}) {
            edges{
                node{
                id
                name
                childImageSharp{
                    gatsbyImageData(
                    width: 100
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
            return (
                <>
                    {services.map(item => 
                        <>
                            <h1 className="centered_text">{item.name}</h1>
                            <GatsbyImage loading="eager" image={item.image} alt='bla' />
                        </>
                    )
                    }
                </>
            )
        }
        }
        /> );
}