import tw from "twin.macro"
import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import ProjectCard from "./ProjectCard"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ProjectCards = ({ items }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nebula-bg-opt.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 25
              webpOptions: { quality: 50 }
              width: 2000
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(placeholderImage)

  const headline1 = useRef(null)
  const headline2 = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { opacity: 0 } })
    tl.from(headline1.current, {
      xPercent: -5,
      scrollTrigger: {
        // Headline 1 fades in from the left
        trigger: headline1.current,
        start: "top 60%",
        end: "top 40%",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline({ defaults: { opacity: 0 } })
    tl.from(headline2.current, {
      xPercent: 5,
      scrollTrigger: {
        // Headline 2 fades in from the right
        trigger: headline2.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <Container>
      <StyledPlaceholderImage image={pluginImage}>
        <OuterWrapper>
          <Inset>
            <SetHeight />
          </Inset>
          <InnerWrapper>
            <TitleWrapper>
              <H2 ref={headline1}>My Featured Projects</H2>
              <P ref={headline2}>
                These projects showcase both my UI/UX development and digital
                media capabilities as a photographer and videographer. Enjoy!
              </P>
            </TitleWrapper>
            <CardsWrapper>
              {items.map((item) => (
                <CardsInnerWrap key={item.id}>
                  <ProjectCard {...item} />
                </CardsInnerWrap>
              ))}
            </CardsWrapper>
          </InnerWrapper>
        </OuterWrapper>
      </StyledPlaceholderImage>
    </Container>
  )
}

ProjectCards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectCards

const Container = tw.div`
w-full
`
const StyledPlaceholderImage = tw(GatsbyImage)`
w-full bg-center bg-cover
`
const OuterWrapper = tw.div`
relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8
`
const Inset = tw.div`
absolute inset-0
`
const SetHeight = tw.div`
bg-transparent h-1/3 sm:h-2/3
`
const InnerWrapper = tw.div`
relative max-w-7xl mx-auto
`
const TitleWrapper = tw.div`
text-center
`
const H2 = tw.h2`
text-3xl tracking-tight font-extrabold text-amber-dark sm:text-4xl
`
const P = tw.p`
mt-3 max-w-2xl mx-auto text-xl text-almond sm:mt-4
`
const CardsWrapper = tw.div`
mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none
`
const CardsInnerWrap = tw.section`
flex flex-col rounded-lg shadow-lg overflow-hidden bg-almond hover:animate-bounce
`
