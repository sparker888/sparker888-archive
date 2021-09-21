import tw, { styled } from "twin.macro"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const SkillsMain = () => {
  const { mainImage } = useStaticQuery(
    graphql`
      query {
        mainImage: file(relativePath: { eq: "bss-lighthouse-score.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50
              webpOptions: { quality: 75 }
              width: 1582
            )
          }
        }
      }
    `
  )

  const image = getImage(mainImage)

  return (
    <Wrapper>
      <TopSectionWrapper>
        <HeadlineOuterWrapper>
          <HeadlineInnerWrapper>
            <H1>
              <Span1>Here's an example of that performance,</Span1>
              <Span2>a Lighthouse scorecard for featured project:</Span2>
            </H1>
            <P>
              There are multiple ways to measure site performance, and
              Lighthouse is one of the latest. It provides a good look at the
              quality of a particular web page in terms of performance,
              accessibility and SEO. This client project has nearly perfect
              scores and is set up as a Progressive Web App.
            </P>
          </HeadlineInnerWrapper>
        </HeadlineOuterWrapper>

        <ImageWrap>
          <HiddenDiv>
            <HiddenDiv1 />
            <HiddenDiv2 />
          </HiddenDiv>
          <InnerImageWrapper>
            <GatsbyImage
              className="mainImageStyle"
              image={image}
              alt="Almost perfect Lighthouse scores"
            />
          </InnerImageWrapper>
        </ImageWrap>
      </TopSectionWrapper>
      <BottomSectionWrapper>
        <BottomSectionInnerWrapper>
          <H2>These are the key technologies that I have experience with</H2>
          <TechnologiesWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/js.svg"
                alt="JS"
                height={150}
                layout="fixed"
              />
            </TechnologiesImageWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/css3.svg"
                alt="CSS"
                height={150}
                layout="fixed"
              />
            </TechnologiesImageWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/react.svg"
                alt="React"
                height={150}
                layout="fixed"
              />
            </TechnologiesImageWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/gatsby.svg"
                alt="Gatsby"
                height={150}
                layout="fixed"
              />
            </TechnologiesImageWrapper>
            <TechnologiesImageWrapper>
              <StaticImage
                src="../images/graphql.svg"
                alt="GraphQL"
                height={150}
                layout="fixed"
              />
            </TechnologiesImageWrapper>
          </TechnologiesWrapper>
        </BottomSectionInnerWrapper>
      </BottomSectionWrapper>
    </Wrapper>
  )
}

export default SkillsMain

const Wrapper = tw.div`
bg-almond
`
const TopSectionWrapper = tw.div`
relative overflow-hidden
`
const HeadlineOuterWrapper = tw.div`
mt-12 mb-10 mx-auto max-w-7xl px-4 sm:px-6
`
const HeadlineInnerWrapper = tw.div`
text-center
`
const H1 = tw.h1`
text-2xl tracking-tight font-extrabold text-fogra sm:text-3xl md:text-4xl
`
const Span1 = tw.span`
block
`
const Span2 = tw.span`
block text-fogra-lightest
`
const P = tw.p`
mt-3 max-w-md mx-auto text-base text-fogra-light sm:text-lg md:mt-5 md:text-xl md:max-w-3xl
`
const ImageWrap = tw.div`
relative
`
const HiddenDiv = tw.div`
absolute inset-0 flex flex-col
`
const HiddenDiv1 = tw.div`
flex-1
`
const HiddenDiv2 = tw.div`
flex-1 w-full bg-gray-800
`
const InnerImageWrapper = styled.div`
  ${tw`max-w-7xl mx-auto px-4 sm:px-6`}

  .styledMainImage {
    position: relative;
    border-radius: 0.375rem;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
`
const BottomSectionWrapper = tw.div`
bg-fogra-light
`
const BottomSectionInnerWrapper = tw.div`
max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8
`
const H2 = tw.h2`
text-center text-gray-400 text-sm font-semibold uppercase tracking-wide
`
const TechnologiesWrapper = tw.div`
  mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5
`
const TechnologiesImageWrapper = tw.div`
  flex mx-1.5 mb-2 sm:mx-6 sm:mt-3
 `
