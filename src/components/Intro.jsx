import tw, { styled } from "twin.macro"
import React, { useLayoutEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  let logo = useRef(null)
  let headline1 = useRef(null)
  let headline2 = useRef(null)
  const myGallery = useRef(null)
  const myProjects = useRef(null)

  useLayoutEffect(() => {
    let tl = gsap.timeline()
    tl.fromTo(
      logo.current,
      { xPercent: 0, yPercent: 0 },
      {
        xPercent: 10,
        yPercent: -10,
        delay: 1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        ease: "power1",
      },
      "<"
    ) // move spaceship up and down in a loop
  }, [])
  useLayoutEffect(() => {
    let tl = gsap.timeline()
    tl.from(myGallery.current, {
      xPercent: -15,
      yPercent: 100,
      scrollTrigger: {
        // Gallery button fades in from the left bottom
        trigger: myGallery.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])
  useLayoutEffect(() => {
    let tl = gsap.timeline()
    tl.from(myProjects.current, {
      xPercent: 15,
      yPercent: 100,
      scrollTrigger: {
        // Projects button fades in from the right bottom
        trigger: myProjects.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1 ref={headline1}>
            <Span1>👋🏼 Hey!</Span1> <Span2>I&#8217;m Steve.</Span2>{" "}
            <Span3>I build sites that are blazing fast.</Span3>
          </H1>
          <H3 ref={headline2}>
            My expertise with <Span6 to="/skills/">modern development</Span6>{" "}
            and React enable me to create websites and apps that perform well
            and score highly on Google Lighthouse.
          </H3>
          <P>
            How good are your Google rankings and Lighthouse scores? I'm happy
            to <Span6 to="/contact/">run a report</Span6> and review your
            website's Lighthouse scores and Google search engine results.
          </P>
          <P>
            Check out my latest article:{" "}
            <Span5 to="/blog/quick-overviewo-of-astro-static-site-generator">
              Meet Astro, a minimal static site generator
            </Span5>
            .
          </P>
          <ButtonWrap>
            <Button1 ref={myGallery}>
              <Link1 to="/gallery/">Photo Gallery</Link1>
            </Button1>
            <Button2 ref={myProjects}>
              <Link2 to="/projects/">Web Projects</Link2>
            </Button2>
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <ImageWrapper>
          <StaticImage
            src="../images/home-intro-bg.jpg"
            alt="Speed coding background"
            width={1000}
            layout="constrained"
          />
        </ImageWrapper>
        <LogoWrapper ref={logo}>
          <StaticImage
            src="../images/rocket-logo.svg"
            alt="Rocket Logo for @sparker888"
            height={400}
            layout="constrained"
          />
        </LogoWrapper>
      </RightBlock>
    </Main>
  )
}

export default Intro

const Main = tw.main`
lg:relative bg-almond-light
`
const LeftBlock = tw.div`
mx-auto max-w-7xl w-full pt-8 pb-10 text-center lg:py-16 lg:text-left
`
const RightBlock = tw.div`
flex relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full overflow-hidden
`
const ImageWrapper = tw.div`
absolute inset-0 w-full h-full object-cover object-top
`
const BlockWrapper = tw.div`
px-4 lg:w-1/2 sm:px-8 xl:pr-16
`
const H1 = tw.h1`
text-4xl tracking-tight font-extrabold text-fogra sm:text-4xl md:text-5xl lg:text-6xl
`
const H3 = tw.h3`
mt-3 max-w-md mx-auto font-serif text-2xl md:text-3xl text-amber-darkest md:mt-5 md:max-w-3xl
`
const Span1 = tw.div`
block text-fogra-light mb-1 md:mb-2 
`
const Span2 = tw.div`
block text-fogra-light sm:text-4xl md:text-5xl lg:text-6xl
`
const Span3 = tw.div`
inline text-fogra-lightest sm:text-4xl md:text-5xl lg:text-6xl
`
const Span4 = tw.a`
inline text-kobe hover:text-amber
`
const Span5 = styled(Link)`
  ${tw`block inline text-kobe hover:text-amber`}
`
const Span6 = styled(Link)`
  ${tw`block inline text-fogra-lightest hover:text-amber`}
`
const P = tw.p`
mt-3 max-w-md mx-auto font-serif text-xl text-fogra-light sm:text-xl md:mt-5 md:max-w-3xl
`
const ButtonWrap = tw.div`
mt-10 sm:flex sm:justify-center lg:justify-start
`
const Button1 = tw.button`
rounded-md shadow sm:mt-0
`
const Button2 = tw.button`
ml-3 rounded-md shadow
`
const Link1 = styled(Link)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ming hover:bg-ming-light md:py-4 md:text-lg md:px-10`}
`
const Link2 = styled(Link)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light md:py-4 md:text-lg md:px-10`}
`
const LogoWrapper = tw.div`
relative w-full flex items-center justify-center
`
