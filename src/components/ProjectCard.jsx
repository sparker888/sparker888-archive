import tw, { styled } from "twin.macro"
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const ProjectCard = (props) => {
  const { title, slug, intro, tag, hero } = props

  const image = getImage(hero)

  return (
    <CardsInnerWrap>
      <HeroWrapper>
        <GatsbyImage image={image} alt={title} className="HeroImage" />
      </HeroWrapper>
      <ContentWrapper>
        <FlexWrapper>
          <TagWrapper>
            <Category>{tag}</Category>
          </TagWrapper>
          <ProjectLink to={`/${slug}`}>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectIntro dangerouslySetInnerHTML={{
              __html: intro.childMarkdownRemark.rawMarkdownBody,
              }} 
            />
          </ProjectLink>
        </FlexWrapper>
      </ContentWrapper>
    </CardsInnerWrap>
  )
}

ProjectCard.propTypes = {
  order: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  intro: PropTypes.object.isRequired,
  tag: PropTypes.string.isRequired,
}

export default ProjectCard

export const query = graphql`
  fragment ProjectCard on ContentfulProject {
    id
    order
    title
    slug
    intro {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
    tag
    order
    hero {
      gatsbyImageData(
          placeholder: BLURRED, 
          layout: CONSTRAINED,
          )
    }
  }
`
const CardsInnerWrap = tw.section`
flex flex-col rounded-lg shadow-lg overflow-hidden
`
const HeroWrapper = styled.div`
  ${tw`flex-shrink-0`}
  .HeroImage {
    height: 12rem;
    width: 100%;
    object-fit: cover;
  }
`
const ContentWrapper = tw.div`
flex-1 bg-white p-6 flex flex-col justify-between
`
const FlexWrapper = tw.div`
flex-1
`
const TagWrapper = tw.div`
text-sm font-medium text-indigo-600
`
const Category = tw.div`
mt-0 text-amber
`
const ProjectLink = styled(Link)`
  ${tw`block mt-2`};
`
const ProjectTitle = tw.div`
text-xl font-semibold text-fogra
`
const ProjectIntro = tw.div`
mt-3 text-base font-serif text-fogra-light
`
