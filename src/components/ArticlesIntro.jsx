import tw, { styled } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ArticlesIntro = () => {
  const headline1 = useRef(null)
  const button = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(button.current, {
      xPercent: -35,
      scrollTrigger: {
        // Projects button fades in from the right
        trigger: button.current,
        start: "top 60%",
        end: "top 40%",
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1 ref={headline1}>
            <Span2>Articles on modern development,</Span2> <Span1>🚁</Span1>
            <Span3>marketing, drones and more!</Span3>{" "}
          </H1>
          <P>
            Here on my blog, my goal is to share some of the coolest things that
            can be done with Jamstack tools and services. I'm collaborating with
            other Gatsby developers, so I'll share some insights on projects we
            work on and news in the community. Occasionally, I'll also publish
            some{" "}
            <Span4 href="https://i.imgur.com/ElNzCqq.png" target="_blank">
              cool art
            </Span4>{" "}
            and weird memes.
          </P>
          <P>
            Having grown up on the Space Coast of Florida, I have a passion for
            technology, space and the ocean. I grew up as a space baby with an
            engineer for a father so I spent a lot of time working on cars,
            watching NASA launches, and sailing and surfing. I'll share some
            stories and beautiful images of Florida, and one of my favorite
            destinations -- Hawaii!!
          </P>
          <ButtonWrap>
            <Button1 ref={button}>
              <Link1 to="../blog/quick-overviewo-of-astro-static-site-generator">
                Dive In!
              </Link1>
            </Button1>
            {/* <Button2>
                <Link2 href="/blog">My Blog</Link2>
              </Button2> */}
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1632071646/james-donaldson-toPRrcyAIUY-unsplash_tc50zd.jpg"
          alt="Photo by James Donaldson on Unsplash"
        />
      </RightBlock>
    </Main>
  )
}

export default ArticlesIntro

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
const P = tw.p`
mt-3 max-w-md mx-auto font-serif text-xl text-fogra-light sm:text-xl md:mt-5 lg:mt-10 md:max-w-3xl
`
const ButtonWrap = tw.div`
mt-10 sm:flex sm:justify-center lg:justify-end pr-10
`
const Button1 = tw.button`
rounded-md shadow
`
const Link1 = styled(Link)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light md:py-4 md:text-lg md:px-10`}
`
