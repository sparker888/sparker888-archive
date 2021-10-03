import tw from "twin.macro"
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import Layout from '../layouts/Layout';

const DailyPhoto = () => {
  const { placeholderImage123 } = useStaticQuery(
          graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "palm-tree.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50, 
              webpOptions: {quality: 70}, 
              width: 2000
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage123);

  const StyledBgImage = tw(BgImage)`
  min-h-screen
  `

  return (
    <Layout>
      <StyledBgImage image={pluginImage}>
      <OuterWrapper>
      <InnerWrapper>
        <H2>
          <Span>Kahuna Nui Hale Kealohalani Makua</Span>
          <Span>“Love all you see, including yourself.”</Span>
          <Span>— Hale Makua</Span>
        </H2>
      </InnerWrapper>
    </OuterWrapper>
      </StyledBgImage>
    </Layout>
  )
}

export default DailyPhoto

const OuterWrapper = tw.div`
bg-transparent
`
const InnerWrapper = tw.div`
absolute max-w-7xl top-1/4 bottom-1/2 md:top-1/4 md:bottom-1/4 mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-20
`
const H2 = tw.h2`
text-4xl font-extrabold font-serif tracking-tight text-almond sm:text-5xl md:text-6xl
`
const Span = tw.div`
block
`