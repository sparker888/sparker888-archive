import tw from "twin.macro"
import React from "react"

const ProjectsIntro = () => {
  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1>
            <Span1>With incredible technology,</Span1>{" "}
            <Span2>I'm building amazing things! 🔥</Span2>
          </H1>
          <P>
            For 25 years, I have been building websites for some of the largest
            brands, smallest businesses, brightest entrepreneurs and just for
            fun. During the past six months, I have brushed up on JavaScript,
            the latest styling methods and taken a deep dive into React with a
            focus on @GatsbyJS. Check out some of my latest work!
          </P>
          <ButtonWrap>
            <Button1>
              <Link1 href="/gallery">Next Featured</Link1>
            </Button1>
            {/* <Button2>
                  <Link2 href="/blog">My Blog</Link2>
                </Button2> */}
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1631644795/building-things_hbfo2q.png"
          alt="Lego Star Wars"
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
mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left
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
text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl
`
const Span1 = tw.span`
block xl:inline text-fogra
`
const Span2 = tw.span`
block text-fogra-lightest xl:inline
`
const P = tw.p`
mt-3 max-w-md mx-auto font-serif text-xl text-fogra-light sm:text-xl md:mt-5 md:max-w-3xl
`
const ButtonWrap = tw.div`
mt-10 sm:flex sm:justify-center lg:justify-start
`
const Button1 = tw.button`
rounded-md shadow
`
const Button2 = tw.button`
mt-3 rounded-md shadow sm:mt-0 ml-3
`
const Link1 = tw.a`
w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light md:py-4 md:text-lg md:px-10
`
const Link2 = tw.a`
w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ming hover:bg-ming-light md:py-4 md:text-lg md:px-10
`
