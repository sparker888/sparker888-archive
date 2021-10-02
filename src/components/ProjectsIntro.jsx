import tw, { styled } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ProjectsIntro = () => {

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
    ) // bring in first line from left
    tl.fromTo(
      headline2.current,
      { x: 100, y: 0, opacity: 0 },
      { x: 0, y: 0, opacity: 100, duration: 1.5, ease: "back" },
      "<"
    ) // bring in second line from left
    tl.to(button.current, {
      xPercent: 35,
      scrollTrigger: {
        // Projects button fades in from the right
        trigger: button.current,
        start: "top 75%",
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
            <Span2>With the latest technology,</Span2>{" "}
            <Span3>I help businesses succeed!</Span3>{" "}
            <Span1>✨</Span1>
          </H1>
          <H3 ref={headline2}>
            This year I built an amazing studio! Thanks to a lot of cool technology and <Span6 to="/skills/" >improved skills</Span6>, I&#8217;m helping more businesses meet their goals.
          </H3>
          <P>
            For 25 years, I have worked with some fantastic teams to build and manage digital properties for some of the largest brands, smallest businesses, brightest entrepreneurs and <Span4 href="https://sparker888.github.io/eve_ships/" target="_blank">just for fun</Span4>. 
          </P>
          <P>
            This year,  I've been able to help clients get more visibility on the Web and score highly for <Span4 href="https://gravitaldigital.com/blog/navigating-google-core-web-vitals-report/" target="_blank">Google's new algorithm measures</Span4> to help them move up in the search engine rankings for more traffic and sales. 
          </P>
          <ButtonWrap>
            <Button1 ref={button}>
              <Link1 to="../projects/project-gravital-digital">Take a Look</Link1>
            </Button1>
            {/* <Button2>
                  <Link2 href="/blog">My Blog</Link2>
                </Button2> */}
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1632750993/studio-shot-final-opt_sygpd3.jpg"
          alt="@sparker888's studio"
        />
      </RightBlock>
    </Main>
  )
}

export default ProjectsIntro

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
const Span4 = tw.a`
text-kobe hover:text-amber
`
const Span6 = styled(Link)`
  ${tw`block inline text-fogra-lightest hover:text-amber`}
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
