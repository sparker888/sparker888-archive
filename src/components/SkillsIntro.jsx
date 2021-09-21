import tw, { styled } from "twin.macro"
import React from "react"
import { Link } from "gatsby"

const ProjectsIntro = () => {
  return (
    <Main>
      <LeftBlock>
        <BlockWrapper>
          <H1>
            <Span1>Modern development</Span1>{" "}
            <Span2>delivers better performance. 🚀</Span2>
          </H1>
          <P>
            Five years ago, Matt Biilimann coined the term Jamstack <SPAN href="https://jamstack.org/" target="_blank">at Smashing Conference</SPAN>, and it defined the future of web development and deployment.
          </P>
          <P>This year, guided by this philosophy, I upped my game as a frontend UI/UX developer by focusing on  <SPAN href="https://www.gatsbyjs.com/" target="_blank">Gatsby</SPAN>, functional components, styled components and headless CMS.
          </P>
          <P>Beyond presentation, I'm continuing to explore ways of using React hooks, working with a variety of APIs, and learning more details of <SPAN href="https://graphql.org/" target="_blank">GraphQL</SPAN>, to query, filter and sort data from a variety of sources, including powerful MDX files.
          </P>
          {/*<ButtonWrap>
            <Button1>
              <Link1 to="../project-gravital-digital">Dive In!</Link1>
            </Button1>
             <Button2>
                  <Link2 href="/blog">My Blog</Link2>
                </Button2> 
          </ButtonWrap>*/}
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
mt-3 max-w-md mx-auto font-serif text-xl text-fogra-light sm:text-xl md:mt-5 lg:mt-10 md:max-w-3xl
`
const Link1 = styled(Link)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light md:py-4 md:text-lg md:px-10`}
`
const SPAN = tw.a`
text-kobe hover:text-amber
`
