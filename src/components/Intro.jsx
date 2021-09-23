import tw, { styled } from "twin.macro"
import React from "react"
import { Link } from "gatsby"

const Intro = () => {

  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1>
            <Span1>🤙</Span1>
            <Span2>{" "}Aloha and Welcome. I'm</Span2>{" "}
            <Span3>Stephen Parker aka @sparker888</Span3>
          </H1>
          <P>
            Thanks for your interest! If you came to review my projects and skills,
            feel free to begin with the showcase projects below. If you're checking out
            the Gatsby Starter, take a look around. A link to the repo is in the footer.
          </P>
          <P>
             For those here for the first time, I'm a frontend UI/UX React/Gatsby developer and entrepreneur. The website you are looking at now is my latest project. Building it also inspired my first article here: <Span5 to="/blog/sparker888-gatsby-and-mdx-like-blogging-on-steroids">Gatsby and MDX: Like blogging on steroids</Span5>.
          </P>
          <ButtonWrap>
            <Button1>
              <Link1 to="/skills/">My Skills</Link1>
            </Button1>
            <Button2>
              <Link2 to="/contact/">Contact Me</Link2>
            </Button2>
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1632392205/sparker-portrait-left-low-res_uqz6tv.jpg"
          alt="Stephen Parker's Portrait"
        />
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
block xl:inline mb-1 md:mb-2 sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl
`
const Span2 = tw.span`
block xl:inline text-fogra
`
const Span3 = tw.span`
block text-fogra-lightest sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl
`
const Span5 = styled(Link)`
  ${tw`block xl:inline text-kobe hover:text-amber`}
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

