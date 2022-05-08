import tw, { styled } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const SkillsMain = () => {
  const { mainImage } = useStaticQuery(
    graphql`
      query {
        mainImage: file(relativePath: { eq: "bss-lighthouse-score.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50
              webpOptions: { quality: 75 }
              width: 1582
            )
          }
        }
      }
    `
  )

  const image = getImage(mainImage)

  const headline1 = useRef(null)
  const headline2 = useRef(null)
  const headline3 = useRef(null)
  const headline4 = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { opacity: 0 } })
    tl.from(headline1.current, {
      xPercent: -5,
      scrollTrigger: {
        // Headline 1 fades in from the left
        trigger: headline1.current,
        start: "top 75%",
        end: "top center",
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
    useEffect(() => {
    let tl = gsap.timeline({ defaults: { opacity: 0 } })
    tl.from(headline3.current, {
      xPercent: -5,
      scrollTrigger: {
        // Headline 3 fades in from the right
        trigger: headline3.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    }) 
  }, [])
    useEffect(() => {
    let tl = gsap.timeline({ defaults: { opacity: 0 } })
    tl.from(headline4.current, {
      xPercent: 5,
      scrollTrigger: {
        // Headline 4 fades in from the right
        trigger: headline4.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    }) 
  }, [])

  return (
    <Wrapper id="webdev">
      <TopSectionWrapper>
        <HeadlineOuterWrapper>
          <HeadlineInnerWrapper>
            <H1>
              <Span1 ref={headline1}>My skills as a UI/UX React/Gatsby developer</Span1>
              <Span2 ref={headline2}>deliver performance for companies like this:</Span2>
            </H1>
          </HeadlineInnerWrapper>
        </HeadlineOuterWrapper>

        <ImageWrap>
          <HiddenDiv>
            <HiddenDiv1 />
            <HiddenDiv2 />
          </HiddenDiv>
          <InnerImageWrapper>
            <GatsbyImage
              className="mainImageStyle"
              image={image}
              alt="Almost perfect Lighthouse scores"
            />
          </InnerImageWrapper>
        </ImageWrap>
        <CopyOuterWrapper>
          <CopyInnerWrapper>
            <P>
              There are multiple ways to measure site performance, and
              Lighthouse is one of the latest. It provides a good look at the
              quality of a particular web page in terms of performance,
              accessibility and SEO. This client project has nearly perfect
              scores and is set up as a Progressive Web App.
            </P>
            <H1>
              <Span3 ref={headline3}>I'm continuously improving my personal performance as well.</Span3>
            </H1>
          </CopyInnerWrapper>
        </CopyOuterWrapper>
      </TopSectionWrapper>
      <BottomSectionWrapper>
        <BottomSectionInnerWrapper>
          <H2 ref={headline4}>These are the key technologies that I have experience with</H2>
          <TechnologiesWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/js.svg"
                alt="JS"
                height={100}
                layout="constrained"
              />
            </TechnologiesImageWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/css3.svg"
                alt="CSS"
                height={100}
                layout="constrained"
              />
            </TechnologiesImageWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/nextjs.svg"
                alt="Next.js"
                height={100}
                layout="constrained"
              />
            </TechnologiesImageWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/react.svg"
                alt="React"
                height={100}
                layout="constrained"
              />
            </TechnologiesImageWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/gatsby.svg"
                alt="Gatsby"
                height={100}
                layout="constrained"
              />
            </TechnologiesImageWrapper>
          </TechnologiesWrapper>
        </BottomSectionInnerWrapper>
      </BottomSectionWrapper>
    </Wrapper>
  )
}

export default SkillsMain

const Wrapper = tw.div`
bg-almond
`
const TopSectionWrapper = tw.div`
relative overflow-hidden bg-fogra-light
`
const HeadlineOuterWrapper = tw.div`
mt-12 mb-10 mx-auto max-w-7xl px-4 sm:px-6
`
const HeadlineInnerWrapper = tw.div`
text-center mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-12 lg:mb-16
`
const CopyOuterWrapper = tw.div`
mb-10 mx-auto max-w-7xl px-4 sm:px-6 
`
const CopyInnerWrapper = tw.div`
text-center mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8 lg:mb-10
`
const H1 = tw.h1`
text-2xl tracking-tight font-extrabold text-fogra-light sm:text-3xl md:text-4xl
`
const Span1 = tw.span`
block text-amber-dark
`
const Span2 = tw.span`
block text-ming-light mt-2
`
const Span3 = tw.span`
block text-amber-dark mt-12
`
const P = tw.p`
mt-3 max-w-md mx-auto text-base text-almond sm:text-lg md:mt-5 md:text-xl md:max-w-3xl
`
const ImageWrap = tw.div`
relative
`
const HiddenDiv = tw.div`
absolute inset-0 flex flex-col
`
const HiddenDiv1 = tw.div`
flex-1
`
const HiddenDiv2 = tw.div`
flex-1 w-full bg-gray-800
`
const InnerImageWrapper = styled.div`
  ${tw`max-w-7xl mx-auto px-4 sm:px-6`}

  .styledMainImage {
    position: relative;
    border-radius: 0.375rem;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
`
const BottomSectionWrapper = tw.div`
bg-fogra-light
`
const BottomSectionInnerWrapper = tw.div`
max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8
`
const H2 = tw.h2`
text-center text-almond text-xl font-semibold uppercase tracking-wide
`
const TechnologiesWrapper = tw.div`
mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3  lg:grid-cols-5
`
const TechnologiesImageWrapper = tw.div`
flex mx-1.5 mb-2 sm:mx-6 sm:mt-3
`
