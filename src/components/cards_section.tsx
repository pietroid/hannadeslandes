import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef, useEffect } from 'react'
import '../components/buttons.css'
import { underscoreToReadableText } from '../utils/string_utils';
import { Card } from './card';

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
                    width: 300
                    placeholder: NONE
                    )
                }
                }
            }
            }
        }
        `}
            render={(data) => {
                const services = data.allFile.edges.map(item => ({
                    name: underscoreToReadableText(item.node.name),
                    image: getImage(item.node),
                }));
                return (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {services.map(item =>
                            <Card>
                                <div className='content_box'>
                                    <GatsbyImage loading="eager" image={item.image} alt='bla' />
                                    <div style={{ marginRight: 10, marginLeft: 10 }}>
                                        <h2 className="centered_text">{item.name}</h2>
                                    </div>
                                </div>
                            </Card>
                        )}
                    </div>
                )
            }
            }
        />);
}