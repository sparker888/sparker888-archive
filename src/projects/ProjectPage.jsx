import tw, { styled } from "twin.macro"
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ProjectPage = (props) => {
  const {
    title,
    intro,
    tag,
    subhead,
    secondTitle,
    hero,
    screenshot,
    liveUrl,
    nextProjectUrl,
    description,
    summary,
  } = props

  const heroImage = getImage(hero)

  const image = getImage(screenshot)

  return (
    <>
      <StyledBgImage image={heroImage}>
        <FlexWrapper>
          <TextWrapper>
            <H1>{title}</H1>
            <Button href={liveUrl} target="_blank">
              View Live
            </Button>
          </TextWrapper>
        </FlexWrapper>
      </StyledBgImage>
      <OuterWrapper>
        <InnerWrapper>
          <SectionOneWrapper>
            <ProjectTitle>
              <H2>{tag}</H2>
              <Title>{secondTitle}</Title>
            </ProjectTitle>
            <ProjectIntro>
              <IntroParagraph>
                <MDXRenderer>{intro.childMdx.body}</MDXRenderer>
              </IntroParagraph>
            </ProjectIntro>
            <DescriptionOuterWrapper>
              <DescriptionInnerWrapper>
                <Description>
                  <DescriptionText>
                  <MDXRenderer>{description.childMdx.body}</MDXRenderer>
                  </DescriptionText>
                  <SubHead>{subhead}</SubHead>
                  <SummaryText>
                  <MDXRenderer>{summary.childMdx.body}</MDXRenderer>
                  </SummaryText>
                </Description>
                <ButtonWrapper>
                  <Button1>
                    <Button1Style href={liveUrl} target="_blank">
                      Live Site
                    </Button1Style>
                  </Button1>
                  <Button2>
                    <Button2Style to={nextProjectUrl}>
                      Next Project
                    </Button2Style>
                  </Button2>
                </ButtonWrapper>
              </DescriptionInnerWrapper>
            </DescriptionOuterWrapper>
          </SectionOneWrapper>

          <ScreenOuterWrapper>
            <ScreenInnerWrapper>
              <PatternSection>
                <PatternDefinition />
                <Svg width={404} height={392} fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <Rect
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
                    height={392}
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </Svg>
              </PatternSection>
              <ScreenSection>
                <GatsbyImage image={image} alt={title} className="screenShot" />
              </ScreenSection>
            </ScreenInnerWrapper>
          </ScreenOuterWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </>
  )
}

ProjectPage.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.object.isRequired,
  tag: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  nextProjectUrl: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
}

export default ProjectPage

export const query = graphql`
  fragment ProjectPage on ContentfulProject {
    title
    intro {
      childMdx {
        body
      }
    }
    tag
    subhead
    secondTitle
    liveUrl
    nextProjectUrl
    summary {
      childMdx {
        body
      }
    }
    description {
      childMdx {
        body
      }
    }
    hero {
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
    }
    screenshot {
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`

const OuterWrapper = tw.div`
bg-white pb-8 sm:pb-12 lg:pb-12
`
const InnerWrapper = tw.div`
pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24
`
const SectionOneWrapper = tw.section`
sm: mx-12
`
const StyledBgImage = tw(BgImage)`
w-full bg-center bg-cover h-128
`
const FlexWrapper = tw.div`
flex items-center justify-center w-full h-full bg-opacity-100
`
const TextWrapper = tw.div`
text-center pl-8 pr-8 md:py-12
`
const H1 = styled.h1`
  text-shadow: 4px 4px 8px black;
  ${tw`text-5xl font-serif font-semibold text-white drop-shadow-2xl uppercase lg:text-6xl mb-8`}
`
const Button = tw.a`
w-full px-4 py-2 mt-4 lg:mt-8 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-kobe rounded-md lg:w-auto hover:bg-kobe-light focus:outline-none focus:bg-kobe-light
`
const ProjectTitle = tw.section`
text-base max-w-prose mx-auto lg:max-w-none
`
const ProjectIntro = tw.section`
text-base max-w-prose my-8 lg:max-w-3xl lg:mx-8 lg:pr-72
`
const H2 = tw.h2`
text-base text-amber font-semibold tracking-wide uppercase
`
const Title = tw.p`
mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fogra-lightest sm:text-4xl
`
const IntroParagraph = tw.p`
text-lg text-kobe
`
const DescriptionOuterWrapper = tw.div`
lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start
`
const DescriptionInnerWrapper = tw.div`
relative
`
const Description = tw.div`
prose prose-indigo text-fogra mx-auto lg:max-w-none
`
const DescriptionText = tw.ul`
mx-0 font-serif text-fogra
`
const SummaryText = tw.li`
mx-0 font-serif text-fogra
`
const SubHead = tw.div`
my-4 text-2xl leading-8 font-extrabold tracking-tight text-fogra-lightest sm:text-3xl
`
const ButtonWrapper = tw.div`
mt-10 flex flex-row-reverse text-base max-w-prose mx-auto lg:max-w-none
`
const Button1 = tw.button`
rounded-md shadow
`
const Button2 = tw.button`
rounded-md shadow mx-4
`
const Button1Style = tw.a`
w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light
`
const Button2Style = styled(Link)`
  ${tw`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ming hover:bg-ming-light`}
`
const ScreenOuterWrapper = tw.div`
sm:mx-auto sm:max-w-3xl sm:px-6
`
const ScreenInnerWrapper = tw.div`
py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2
`
const PatternSection = tw.div`
hidden sm:block
`
const PatternDefinition = tw.div`
absolute inset-y-0 left-1/2 w-screen bg-ming-lightest rounded-l-3xl lg:left-80 lg:right-0 lg:w-full
`
const Svg = tw.svg`
absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0
`
const ScreenSection = styled.div`
  ${tw`relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12`}
  .screenShot {
    width: 100%;
    border-radius: 0.25rem;
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));
    --tw-ring-opacity: 0.05;
  }
`
const Rect = tw.rect`
text-gray-200
`
