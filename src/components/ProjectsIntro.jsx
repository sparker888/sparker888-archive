import tw, { styled } from "twin.macro"
import React from "react"
import { Link } from "gatsby"

const ProjectsIntro = () => {
  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1>
            <Span2>With incredible technology,</Span2>{" "}
            <Span3>We can build  amazing things!</Span3>{" "}
            <Span1>✨</Span1>
          </H1>
          <P>
            For 25 years, I have worked with some fantastic teams to build and manage digital properties for some of the largest brands, smallest businesses, brightest entrepreneurs and <Span4 href="https://sparker888.github.io/eve_ships/" target="_blank">just for fun</Span4>. 
          </P>
          <P>
            This year, thanks to <Span5 to="/skills/" >new skills</Span5>, I've been able to complete several projects that showcase my skills and score highly for <Span4 href="https://gravitaldigital.com/blog/navigating-google-core-web-vitals-report/" target="_blank">Google's new algorithm measures</Span4> that measure speed and performance. 
          </P>
          <ButtonWrap>
            <Button1>
              <Link1 to="../project-gravital-digital">Take a Look</Link1>
            </Button1>
            {/* <Button2>
                  <Link2 href="/blog">My Blog</Link2>
                </Button2> */}
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1631817844/sigmund-04asBB737-k-unsplash_vohkmj.jpg"
          alt="Photo by Sigmund on Unsplash"
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
text-4xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl
`
const Span1 = tw.span`
block inline mb-2 md:mb-4 sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl
`
const Span2 = tw.span`
block inline text-fogra sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl
`
const Span3 = tw.span`
block inline text-fogra-lightest sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl
`
const Span4 = tw.a`
text-kobe hover:text-amber
`
const Span5 = styled(Link)`
  ${tw`block xl:inline text-kobe hover:text-amber`}
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
