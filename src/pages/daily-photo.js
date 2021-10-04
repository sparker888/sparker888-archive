import tw, { styled, css } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import Layout from '../layouts/Layout';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

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
  let headline1 = useRef(null)
  let headline2 = useRef(null)
  let headline3 = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.fromTo(
      headline1.current,
      { x: -100, y: 0, opacity: 0 },
      { x: 0, y: 0, opacity: 100, duration: 1.5, ease: "back" },
      "<"
    ) // bring in first headline from left
    tl.fromTo(
      headline2.current,
      { x: 100, y: 0, opacity: 0 },
      { x: 0, y: 0, opacity: 100, duration: 1.5, ease: "back" },
      "<"
    ) // bring in second headline from right
    tl.fromTo(
      headline3.current,
      { x: 0, y: 100, opacity: 0 },
      { x: 0, y: 0, opacity: 100, duration: 1.5, ease: "back" },
      "<"
    ) // bring in second headline from right
  }, [])

  return (
    <Layout>
      <StyledBgImage image={pluginImage}>
      <OuterWrapper>
      <InnerWrapper>
        <H2>
          <Span ref={headline1}>Kahuna Nui Hale Kealohalani Makua</Span>
          <Span ref={headline2}>“Love all you see, including yourself.”</Span>
          <Span ref={headline3} css={css`
                      text-align: right;
                      margin-top: 2rem;
                      margin-right: 2rem;
                    `}>— Hale Makua</Span>
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
const H2 = styled.h2`
  text-shadow: 4px 4px 8px black;
  ${tw`text-4xl font-extrabold font-serif tracking-tight text-almond sm:text-5xl md:text-6xl`}
`
const Span = tw.div`
block
`