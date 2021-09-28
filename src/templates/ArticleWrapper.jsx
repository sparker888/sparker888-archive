import tw from "twin.macro"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const ArticleWrapper = ({ children }) => {

  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mesh-gradient.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 25
              webpOptions: { quality: 50 }
              width: 2000
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(placeholderImage)

  return (
    <Container>
      <StyledBgImage image={pluginImage}>
      <OuterWrapper>
          <ProjectInnerWrap>
        {children}
        </ProjectInnerWrap>
        </OuterWrapper>
      </StyledBgImage>
    </Container>
  )
}

export default ArticleWrapper

const Container = tw.div`
w-full
`
const StyledBgImage = tw(BgImage)`
w-full bg-center bg-cover
`
const OuterWrapper = tw.div`
relative bg-transparent pt-4 pb-4 px-4 sm:pt-6 sm:pt-6 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8
`
const ProjectInnerWrap = tw.section`
flex flex-col rounded-lg shadow-lg overflow-hidden
`