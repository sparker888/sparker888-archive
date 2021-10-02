import tw, { styled } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ProjectsIntro = () => {

  const headline1 = useRef(null)
  const headline2 = useRef(null)
  const developer = useRef(null)
  const marketer = useRef(null)

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
    ) // bring in second line from left
    tl.from(developer.current, {
      xPercent: -15,
      scrollTrigger: {
        // bring in second block from the right
        trigger: developer.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
    tl.from(marketer.current, {
      xPercent: 15,
      scrollTrigger: {
        // Projects button fades in from the right
        trigger: marketer.current,
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
            <Span2>With modern development skills,</Span2>{" "}
            <Span3>I create websites that deliver.</Span3>
            <Span1>🚀</Span1>
          </H1>
          <H3 ref={headline2}>
            Five years ago, Matt Biilimann coined the term Jamstack{" "}
            <Span6 href="https://jamstack.org/" target="_blank">
              at Smashing Conference
            </Span6>
            . His talk inspired me to jump back into the development world.
          </H3>
          <P>
            So starting last year, I learned React. With a focus on my UI/UX
            specialty, I dove deep into several different styling systems,
            worked with a few headless CMS providers, and started working with
            <Span4 href="https://greensock.com/" target="_blank">
              {" "}
              Greensock
            </Span4>{" "}
            animation. My biggest achievement has been becoming proficient with
            <Span4 href="https://www.gatsbyjs.com/" target="_blank">
              {" "}
              Gatsby
            </Span4>
            .
          </P>
          <P>
            I've really enjoyed learning and using{" "}
            <Span4 href="https://graphql.org/" target="_blank">
              GraphQL
            </Span4>{" "}
            and{" "}
            <Span4 href="https://mdxjs.com/mdx/" target="_blank">
              MDX
            </Span4>
            , so I'm in the midst of a deep dive into these technologies now.
          </P>
          <ButtonWrap>
            <Button1 ref={developer}>
              <Link1 to="/skills#webdev">Web Developer</Link1>
            </Button1>
            <Button2 ref={marketer}>
              <Link2 to="/skills#digmarketer">Digital Marketer</Link2>
            </Button2>
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1631960022/andras-vas-Bd7gNnWJBkU-unsplash_njwjtf.jpg"
          alt="Photo by Andras Vas on Unsplash"
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
block inline mb-2 md:mb-4 text-amber-darkest sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl
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
rounded-md shadow sm:mt-0
`
const Button2 = tw.button`
ml-3 rounded-md shadow
`
const Link1 = styled(AnchorLink)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ming hover:bg-ming-light md:py-4 md:text-lg md:px-10`}
`
const Link2 = styled(AnchorLink)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light md:py-4 md:text-lg md:px-10`}
`
