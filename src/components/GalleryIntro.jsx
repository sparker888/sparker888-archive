import tw, { styled } from "twin.macro"
import React from "react"
import { Link } from "gatsby"

const GalleryIntro = () => {
  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1>
            <Span1>Sony Alphas</Span1>{" "}
            <Span2>capture magnificent images! 📸</Span2>
          </H1>
          <P>
            Having owned many cameras in my career, I've come to love and depend on my Sony Alpha gear. Sony makes truly wonderful, high-quality products. I'm glad they stepped up their game with their interchangeable lens gear in recent years.
          </P>
          <P>This year, I've invested in additional equipment to improve my ability to quickly shoot real estate and portraits on site. The equipment includes powerful yet small flashes from Godox, carbon fiber tripods and lightweight modifiers, backdrops and stands designed for travel. I'm pleased to share some of my recent work.
          </P>
          <ButtonWrap>
            <Button1>
              <Link1 to="../hurricane-larry-photography">Dive In!</Link1>
            </Button1>
            {/* <Button2>
                  <Link2 href="/blog">My Blog</Link2>
                </Button2> */}
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1632072081/andreas-dress-Toy5c-5o5Vo-unsplash_weylre.jpg"
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
const Span3 = styled(Link)`
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
const SPAN = tw.a`
text-kobe hover:text-amber
`
