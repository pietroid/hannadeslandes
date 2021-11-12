import { graphql } from 'gatsby'
import React from 'react'
import Background from '../components/background';
import { ContactButtons } from '../components/contact_buttons';
export default ({data}) => {
    const title = data.allSitePage.edges[0].node.context.title;
    const sections = data.allSitePage.edges[0].node.context.sections;
    return (
    <>
      <ContactButtons/>
      <Background/>
      <div style={{minHeight:'100vh'}}>
        
        <div style={{height:100}}/>
        
        <div className="wrapper">
          <div className="centered_wrapper">
              <h1 className="centered_text_mobile">{title}</h1>
              <div className="v_space"/>
              {sections.map(section => 
              <>
                <h2 className="centered_text_mobile">{section.title}</h2>
                <p className="intro_text">{section.content}</p>
                <div className="v_space"/>
              </>)}
          </div>

          <div className="center_spacing"/>

          <div className="centered_wrapper">
            <div className="service_image_wrapper">
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export const query = graphql`
query($path:String!){
    allSitePage(filter:{path:{eq:$path}}){
        edges{
            node{
                context{
                    title
                    sections{
                        title
                        content
                    }
                }
            }
        }
    }
}
`
