import tw, { styled } from "twin.macro"
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const BlogCard = (props) => {
  const {
    slug,
    title,
    category,
    author,
    publishDate,
    metaDescription,
    thumbText,
    thumbImage,
  } = props

  const image = getImage(thumbImage)
  const authorImage = getImage(author.photo)

  return (
    <CardsInnerWrap>
      <HeroWrapper>
        <GatsbyImage image={image} alt={thumbText} className="HeroImage" />
      </HeroWrapper>
      <ContentWrapper>
        <FlexWrapper>
          <TagWrapper>
            <Category>{category.name}</Category>
          </TagWrapper>
          <ArticleLink to={`/blog/${slug}`}>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleIntro>{metaDescription}</ArticleIntro>
          </ArticleLink>
        </FlexWrapper>
        <AuthorWrapper>
          <AuthorImageWrapper>
            <GatsbyImage
              image={authorImage}
              alt={author.name}
              className="AuthorImgWrapper"
            />
          </AuthorImageWrapper>
          <NameDateWrapper>
            <Author>{author.name}</Author>
            <Published>
              <time dateTime="2020-03-16">{publishDate}</time>
            </Published>
          </NameDateWrapper>
        </AuthorWrapper>
      </ContentWrapper>
    </CardsInnerWrap>
  )
}

BlogCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  datePublished: PropTypes.instanceOf(Date),
  metaDescription: PropTypes.string.isRequired,
  thumbText: PropTypes.string.isRequired,
}

export default BlogCard

export const query = graphql`
  fragment ArticleCard on ContentfulArticle {
    slug
    title
    category {
      name
    }
    author {
      name
      photo {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    publishDate(formatString: "MMMM DD, YYYY")
    metaDescription
    thumbText
    thumbImage {
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
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
const AuthorWrapper = tw.div`
mt-6 flex items-center
`
const AuthorImageWrapper = styled.div`
  ${tw`flex-shrink-0`}
  .AuthorImgWrapper {
    height: 4rem;
    width: 4rem;
    border-radius: 9999px;
  }
`
const NameDateWrapper = tw.div`
ml-3
`
const Author = tw.div`
my-0 text-sm font-serif font-medium text-kobe
`
const Published = tw.div`
flex space-x-1 text-sm text-ming
`
