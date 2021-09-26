import tw from "twin.macro"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import PropTypes from "prop-types"
import ProjectPage from "./ProjectPage"

const ProjectWrapper = ({ items }) => {

  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mesh-gradient2.png" }) {
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
          <InnerWrapper>
            <ProjectInnerWrapper>
                {items.map(item => (
                    <ProjectInnerWrap key={item.id}>
                    <ProjectPage {...item} />
                    </ProjectInnerWrap>
                ))}
            </ProjectInnerWrapper>
          </InnerWrapper>
        </OuterWrapper>
      </StyledBgImage>
    </Container>
  )
}

ProjectWrapper.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

export default ProjectWrapper

const Container = tw.div`
w-full
`
const StyledBgImage = tw(BgImage)`
w-full bg-center bg-cover py-12
`
const OuterWrapper = tw.div`
relative bg-transparent pt-4 pb-8 px-4 sm:px-6 lg:pt-12 lg:pb-12 lg:px-12
`
const InnerWrapper = tw.div`
relative w-full 
`
const ProjectInnerWrapper = tw.div`
mt-0 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none
`
const ProjectInnerWrap = tw.section`
flex flex-col rounded-lg shadow-lg overflow-hidden
`