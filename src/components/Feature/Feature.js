import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'

import Wrapper from '../Wrapper'
import Grid from './Grid'
import Banner from './Banner'
import { StyledContainer } from './style'

const Feature = ({ grid, subtitle }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(
          filter: {categories: {elemMatch: {slug: { eq: "featured" }}}}
        ) {
          edges {
            node {
              title
              id
              slug
              excerpt
              categories {
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 650) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render = { data => (
      <Wrapper>
        <StyledContainer fluid>
          <Row>
              {grid ? (
                <Grid {...data} />
               ) : (
                <Banner subtitle={subtitle} />
              )} 
          </Row>
        </StyledContainer>
      </Wrapper>
    )}
  />
)

export default Feature
