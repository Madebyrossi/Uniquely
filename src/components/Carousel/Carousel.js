import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Slide from './Slide'
import { StyledIcon } from './style'

const Carousel = ({ 
  limit, 
  type, 
  id, 
  img1, 
  img2, 
  img3, 
  img4, 
  img5 
}) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpDestinations(
          filter: {categories: {elemMatch: {slug: { eq: "carousel" }}}}
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
    `}
    render = { data => (
      <>
        {type === 'hero' ? 
          <Slider {...settings}>
            {data.allWordpressWpDestinations.edges.slice(0, `${limit}`).map(destination => (
              <Slide 
                key={destination.node.id} 
                title={destination.node.title}
                slug={destination.node.slug}
                excerpt={destination.node.excerpt}
                image={destination.node.featured_media.localFile.childImageSharp.fluid}
              />
            ))}
          </Slider>
        : 
          <Slider {...settings}>
            {img1 ? 
              <Slide 
                key={id} 
                staticImg={img1}
              />
            : ''}
            {img2 ? 
              <Slide 
                key={id} 
                staticImg={img2}
              />
            : ''}
            {img3 ? 
              <Slide 
                key={id} 
                staticImg={img3}
              />
            : ''}
            {img4 ? 
              <Slide 
                key={id} 
                staticImg={img4}
              />
            : ''}
            {img5 ? 
              <Slide 
                key={id} 
                staticImg={img5}
              />
            : ''}
          </Slider>
        }
      </>
    )}
  />
)

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <div>
        <StyledIcon icon={faArrowRight} />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <div>
        <StyledIcon icon={faArrowLeft} />
      </div>
    </div>
  );
}

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

export default Carousel
