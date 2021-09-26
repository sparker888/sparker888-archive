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
            <Span2>{" "}Aloha. I&#8217;m Steve Parker</Span2>{" "}
            <Span3>I build high-performance websites.</Span3>
          </H1>
          <H3>
          <Span6 to="/skills/">My skills</Span6> with modern development languages enable me create sites that are lightning fast. They flow smoothly for users and rank highly on Google. Thanks for checking out my website!
          </H3>   
          <P>
            If you're here for the Gatsby Starter, take a look around. The repository for this website is <Span4 href="https://www.gatsbyjs.com/" target="_blank">here</Span4>. Please note that I still have a few things to finish.
          </P>
          <P>
             The website you are looking at now is my latest project. The process inspired the site's first article: <Span5 to="/blog/sparker888-gatsby-and-mdx-like-blogging-on-steroids">Gatsby and MDX: Like blogging on steroids</Span5>.
          </P>
          <ButtonWrap>
            <Button1>
              <Link1 to="/gallery/">My Gallery</Link1>
            </Button1>
            <Button2>
              <Link2 to="/projects/">My Projects</Link2>
            </Button2>
          </ButtonWrap>
        </BlockWrapper>
      </LeftBlock>
      <RightBlock>
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1632675566/intro_image-short_acvnac.jpg"
          alt="Performance Websites"
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
absolute inset-0 w-full h-full object-cover object-top
`
const BlockWrapper = tw.div`
px-4 lg:w-1/2 sm:px-8 xl:pr-16
`
const H1 = tw.h1`
text-4xl tracking-tight font-extrabold text-fogra-light sm:text-5xl md:text-6xl
`
const H3 = tw.h3`
mt-3 max-w-md mx-auto font-serif text-2xl md:text-3xl text-amber-darkest md:mt-5 md:max-w-3xl
`
const Span1 = tw.span`
block inline mb-1 md:mb-2 
`
const Span2 = tw.span`
block inline text-fogra
`
const Span3 = tw.span`
block text-fogra-lightest 
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