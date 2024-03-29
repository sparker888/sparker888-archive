import tw from "twin.macro"
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import ArticleWrapper from "./ArticleWrapper"

const Pages = (props) => {
  const {
    body,
    mainImage,
    category,
    title,
    author,
    publishDate,
    metaDescription,
  } = props.data.item

  const image = getImage(mainImage)

  return (
    <Layout>
      <Seo
        title={title}
        description={metaDescription}
        publicURL={mainImage.localFile.publicURL}
      />
      <ArticleWrapper>
        <InnerWrapper>
          <MainImageWrapper>
            <GatsbyImage image={image} alt={title} />
          </MainImageWrapper>
          <OuterPatternWrapper>
            <PatternWrapper aria-hidden="true">
              <Svg1 width={404} height={384} fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <Rect1
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </Svg1>
              <Svg2 width={404} height={384} fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <Rect1
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </Svg2>
              <Svg3 width={404} height={384} fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <Rect1
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-fogra-lightest"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </Svg3>
            </PatternWrapper>
          </OuterPatternWrapper>
          <MainContentWrapper>
            <IntroContentWrapper>
              <h1>
                <CategoryWrapper>{category.name}</CategoryWrapper>
                <TitleWrapper>{title}</TitleWrapper>
                <Author>{author.name}</Author>
                <PublishDate>{publishDate}</PublishDate>
              </h1>
            </IntroContentWrapper>
            <Body>
              <MDXRenderer>{body.internal.content}</MDXRenderer>
            </Body>
          </MainContentWrapper>
        </InnerWrapper>
      </ArticleWrapper>
    </Layout>
  )
}

export default Pages

export const query = graphql`
  query ArticleItemQuery($slug: String!) {
    item: contentfulArticle(slug: { eq: $slug }) {
      body {
        internal {
          content
        }
      }
      mainImage {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        localFile {
          publicURL
        }
      }
      category {
        name
      }
      title
      thumbText
      thumbImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      metaDescription
      author {
        name
        title
      }
      publishDate(formatString: "MMMM DD, YYYY")
    }
  }
`

const InnerWrapper = tw.div`
bg-almond-light relative w-full pb-12
`
const MainImageWrapper = tw.div`
w-full pb-8
`
const OuterPatternWrapper = tw.div`
hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full
`
const PatternWrapper = tw.div`
relative h-full text-lg max-w-prose mx-auto
`
const Svg1 = tw.div`
absolute top-12 left-full transform translate-x-32
`
const Svg2 = tw.div`
absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32
`
const Svg3 = tw.div`
absolute bottom-12 left-full transform translate-x-32
`
const Rect1 = tw.div`
text-fogra-lightest
`
const MainContentWrapper = tw.div`
relative px-4 sm:px-6 lg:px-8
`
const IntroContentWrapper = tw.div`
text-lg max-w-prose mx-auto
`
const CategoryWrapper = tw.span`
block text-base text-center text-amber font-semibold tracking-wide uppercase mx-auto
`
const TitleWrapper = tw.span`
mt-2 lg:mb-8 md:mb-6 sm:mb-4 block text-3xl text-center leading-8 font-extrabold tracking-tight text-fogra-lightest sm:text-4xl
`
const Author = tw.h2`
pt-4 text-2xl leading-tight font-serif tracking-tight text-kobe
`
const PublishDate = tw.p`
pt-0 mt-0 lg: mb-8 text-sm leading-tight tracking-tight text-fogra-light
`
const Body = tw.div`
mt-12 font-serif prose prose-lg  text-fogra-light mx-16 mx-auto
`
