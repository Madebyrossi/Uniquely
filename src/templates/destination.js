import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Breadcrumbs from '../components/Destination/Breadcrumbs'
import Wrapper from '../components/Wrapper'
import Carousel from '../components/Carousel'
import Content from '../components/Destination/Content'
import LocalPosts from '../components/Destination/Posts'
import Related from '../components/Destination/Related'

export const DestinationTemplate = ({
  content,
  id,
  location,
  banner_image,
  categories,
  title,
  date,
  booking_url,
  gallery_image1,
  gallery_image2,
  gallery_image3,
  posts,
  destinations
}) => {
  return (
    <>
      <Breadcrumbs
        title={title}
        categories={categories}
        banner={banner_image}
      />

      <Wrapper>
        <Carousel 
          type="destination" 
          limit="5" 
          id={id}
          img1={gallery_image1}
          img2={gallery_image2}
          img3={gallery_image3}
        />

        <Content 
          title={title}
          content={content}
          categories={categories}
          date={date}
          bookingURL={booking_url}
        />
      </Wrapper>

      <LocalPosts 
        heading="More Unique Experiences"
        location={location}
        posts={posts}
      />

      <Related
        heading="Related destinations"
        title={title}
        destinations={destinations}
      />
    </>
  )
}

DestinationTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const DestinationPost = ({ data }) => {
  const destination = data.wordpressWpDestinations
  const allPosts = data.allWordpressPost.edges
  const allDestinations = data.allWordpressWpDestinations.edges

  return (
    <>
      <Helmet title={`${destination.title} | Explore`} />
      <DestinationTemplate
        title={destination.title}
        id={destination.id}
        location={destination.acf.location_name}
        banner_image={destination.acf.dest_banner_image.localFile.childImageSharp.fluid.src}
        categories={destination.categories}
        date={destination.date}
        booking_url={destination.acf.booking_url}
        gallery_image1={destination.acf.dest_image_1.localFile.childImageSharp.fluid.src}
        gallery_image2={destination.acf.dest_image_2.localFile.childImageSharp.fluid.src}
        gallery_image3={destination.acf.dest_image_3.localFile.childImageSharp.fluid.src}
        content={destination.content}
        posts={allPosts}
        destinations={allDestinations}
      />
    </>
  )
}

DestinationPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default DestinationPost

export const pageQuery = graphql`
  query DestinationsandPosts($id: String!) {
    wordpressWpDestinations(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      acf {
        booking_url
        location_name
        dest_banner_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        dest_image_1 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        dest_image_2 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        dest_image_3 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          slug
          id
          acf {
            location_name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allWordpressWpDestinations {
      edges {
        node {
          title
          slug
          id
          acf {
            location_name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
