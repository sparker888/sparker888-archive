import tw from "twin.macro"
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import PropTypes from "prop-types"
import ProjectPage from "./ProjectPage"

const ProjectPages = ({ items }) => {

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
          <Inset>
            <SetHeight />
          </Inset>
          <InnerWrapper>
            <CardsWrapper>
                {items.map(item => (
                    <CardsInnerWrap key={item.id}>
                    <ProjectPage {...item} />
                    </CardsInnerWrap>
                ))}
            </CardsWrapper>
          </InnerWrapper>
        </OuterWrapper>
      </StyledBgImage>
    </Container>
  )
}

ProjectPages.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

export default ProjectPages

const Container = tw.div`
w-full
`
const StyledBgImage = tw(BgImage)`
w-full bg-center bg-cover
`
const OuterWrapper = tw.div`
relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8
`
const Inset = tw.div`
absolute inset-0
`
const SetHeight = tw.div`
bg-transparent h-1/3 sm:h-2/3
`
const InnerWrapper = tw.div`
relative w-full
`
const H2 = tw.h2`
text-3xl tracking-tight font-extrabold text-fogra sm:text-4xl
`
const P = tw.p`
mt-3 max-w-2xl mx-auto text-xl text-almond sm:mt-4
`
const CardsWrapper = tw.div`
mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none
`
const CardsInnerWrap = tw.section`
flex flex-col rounded-lg shadow-lg overflow-hidden
`