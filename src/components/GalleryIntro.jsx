import tw, { styled } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const GalleryIntro = () => {

  const headline1 = useRef(null)
  const headline2 = useRef(null)
  const button = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.fromTo(
      headline1.current,
      { x: -100, y: 0, opacity: 0 },
      { x: 0, y: 0, opacity: 100, duration: 1.5, ease: "back" },
      "<"
    ) // bring in first block from left
    tl.fromTo(
      headline2.current,
      { x: 100, y: 0, opacity: 0 },
      { x: 0, y: 0, opacity: 100, duration: 1.5, ease: "back" },
      "<"
    ) // bring in second block from right
    tl.to(button.current, {
      xPercent: 35,
      scrollTrigger: {
        // Articles button comes in from the left
        trigger: button.current,
        start: "top 50%",
        end: "center 100%",
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1 ref={headline1}>
          <Span1>📸</Span1> <Span2>For speed and efficiency,</Span2>{" "}
            <Span3>I&#8217;ve gone minimalist and lightweight!</Span3>
          </H1>
          <H3 ref={headline2}>
          I&#8217;ve also stepped up my game again to become a commercial operator <Span6 href="https://www.faa.gov/uas/commercial_operators/" target="_blank">FAA-certified 107 sUAS</Span6> drone pilot!
          </H3>
          <P>
            Last year, I focused on light and portable for efficient location shoots with the Sony a6600 and battery-powered lights. 
          </P>
          <P>
            For 2022, I purchased <Span5 to="/blog/a-new-year-a-new-drone-dji-mavic3">the new DJI Mavic 3 </Span5>and passed the FAA pilot certification test to fly larger drones in restricted airspace. During the year, I'll be adding more aerial footage to the galleries below.
          </P>
          <P>
            You can also see more of my work on <Span6 href="https://www.instagram.com/sparker808/" target="_blank">Instagram</Span6>.
          </P>
          <ButtonWrap>
            <Button1 ref={button}>
              <Link1 to="../gallery/coastal-florida-photography">Dive In!</Link1>
            </Button1>
            {/* <Button2>
                  <Link2 href="/blog">My Blog</Link2>
                </Button2> */}
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1632493822/pro-photo_pwqvom.jpg"
          alt="Photo by Andreas Dress on Unsplash"
        />
      </RightBlock>
    </Main>
  )
}

export default GalleryIntro

const Main = tw.main`
lg:relative bg-almond-light
`
const LeftBlock = tw.div`
mx-auto max-w-7xl w-full pt-8 pb-10 text-center lg:py-16 lg:text-left
`
const RightBlock = tw.div`
relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full
`
const Image = tw.img`
absolute inset-0 w-full h-full object-cover
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
const Span1 = tw.span`
block inline text-fogra-light mb-1 md:mb-2 
`
const Span2 = tw.span`
block inline text-fogra-light sm:text-4xl md:text-5xl lg:text-6xl
`
const Span3 = tw.span`
block inline text-fogra-lightest sm:text-4xl md:text-5xl lg:text-6xl
`
const Span5 = styled(Link)`
  ${tw`block inline text-kobe hover:text-amber`}
`
const Span6 = tw.a`
text-fogra-lightest hover:text-amber
`
const P = tw.p`
mt-3 max-w-md mx-auto font-serif text-xl text-fogra-light sm:text-xl md:mt-5 lg:mt-10 md:max-w-3xl
`
const ButtonWrap = tw.div`
mt-10 sm:flex sm:justify-center lg:justify-start
`
const Button1 = tw.button`
rounded-md shadow
`
const Link1 = styled(Link)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light md:py-4 md:text-lg md:px-10`}
`
