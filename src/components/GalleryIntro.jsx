import tw, { styled } from "twin.macro"
import React from "react"
import { Link } from "gatsby"

const GalleryIntro = () => {
  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1>
          <Span1>📸</Span1> <Span2>For speed and efficiency,</Span2>{" "}
            <Span3>I&#8217;ve gone minimalist and lightweight!</Span3>
          </H1>
          <H3>
            I&#8217;ve also stepped up my game as a professional photographer. I&#8217;m now a certified and insured <Span6 href="https://www.ppa.com/" target="_blank">PPA</Span6> member!
          </H3>
          <P>
            This year, I focused on light and portable for quick real estate, on-site, and outdoor shoots. The equipment includes a lighter camera -- the Sony a6600, a carbon fiber tripod, several light yet powerful flashes from Godox, and lightweight modifiers, backdrops and stands designed for travel. Here are a few of the results.
          </P>
          <ButtonWrap>
            <Button1>
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
