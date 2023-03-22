import tw, { styled } from "twin.macro"
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"

const SingleGalleryCard = (props) => {
  const { slug, galleryName, galleryDescription, galleryMainImage } = props

  const image = getImage(galleryMainImage)

  return (
    <CardsInnerWrap>
      <HeroWrapper>
        <GatsbyImage image={image} alt={galleryName} className="HeroImage" />
      </HeroWrapper>
      <ContentWrapper>
        <FlexWrapper>
          <TagWrapper>
            <Category>Sony Alpha Gallery</Category>
          </TagWrapper>
          <ArticleLink to={`/gallery/${slug}`}>
            <ArticleTitle>{galleryName}</ArticleTitle>
            <ArticleIntro>
              <MDXRenderer>{galleryDescription.internal.content}</MDXRenderer>
            </ArticleIntro>
          </ArticleLink>
        </FlexWrapper>
      </ContentWrapper>
    </CardsInnerWrap>
  )
}

SingleGalleryCard.propTypes = {
  slug: PropTypes.string.isRequired,
  galleryName: PropTypes.string.isRequired,
  galleryMainImage: PropTypes.object.isRequired,
  galleryDescription: PropTypes.object.isRequired,
}

export default SingleGalleryCard

export const query = graphql`
  fragment GalleryCard on ContentfulGallery {
    slug
    id
    galleryName
    galleryMainImage {
      gatsbyImageData(
        height: 200
        width: 300
        quality: 100
        placeholder: BLURRED
      )
    }
    galleryDescription {
      internal {
        content
      }
    }
  }
`
const CardsInnerWrap = tw.section`
flex flex-col bg-almond rounded-lg overflow-hidden
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
flex-1 bg-almond p-6 flex flex-col justify-between bg-almond
`
const FlexWrapper = tw.div`
flex-1
`
const TagWrapper = tw.div`
text-sm font-medium text-kobe
`
const Category = tw.div`
mt-0 text-amber
`
const ArticleLink = styled(Link)`
  ${tw`block mt-2`};
`
const ArticleTitle = tw.div`
text-xl font-semibold text-fogra-lightest
`
const ArticleIntro = tw.div`
mt-3 text-base font-serif text-fogra
`
