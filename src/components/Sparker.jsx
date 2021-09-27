import tw, { styled } from "twin.macro"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Sparker = () => {
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
    <StyledBgImage image={pluginImage}>
    <Wrapper>
      
        <InnerWrapper>
        
          <Grid>
            <TopSection>
              <HiddenTop />
              <TopInnerWrapper>
                <ImageWrapper>
                  <ObjectCover
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1629628368/sparker-portrait_bv6dzq.jpg"
                    alt="Stephen Parker"
                  />
                </ImageWrapper>
              </TopInnerWrapper>
            </TopSection>

            <BottomSection>

              <ContentWrapper>
                <H2 id="join-heading">I Enjoy Working with Talented People</H2>
                <P>
                  I'm very fortunate to be able to work with some great companies, teams and clients to create amazing products and drive record sales revenue. 
                </P>
                <P>
                  I appreciate your consideration for your next project. If you have important business goals to achieve, I can help you make it happen!
                </P>
                <CtaLink to="/contact/">Contact Me</CtaLink>
              </ContentWrapper>

            </BottomSection>

          </Grid>
          
        </InnerWrapper>

    </Wrapper>
    </StyledBgImage>
  )
}

export default Sparker

const Wrapper = tw.div`
relative py-16 bg-transparent
`
const StyledBgImage = tw(BgImage)`
w-full bg-center bg-cover
`
const InnerWrapper = tw.div`
max-w-7xl mx-auto bg-transparent lg:px-8
`
const Grid = tw.div`
lg:grid lg:grid-cols-12
`
const TopSection = tw.div`
relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent
`
const HiddenTop = tw.div`
absolute inset-x-0 h-1/2 bg-transparent lg:hidden
`
const TopInnerWrapper = tw.div`
max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0
`
const ImageWrapper = tw.div`
aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 mb-10
`
const ObjectCover = tw.img`
object-cover object-center rounded-3xl shadow-2xl
`
const BottomSection = tw.div`
relative bg-fogra-light lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center
`
const ContentWrapper = tw.div`
relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6
`
const H2 = tw.h2`
text-3xl font-extrabold text-amber-dark
`
const P = tw.p`
text-lg text-almond
`
const CtaLink = styled(Link)`
  ${tw`block w-full py-3 px-5 text-center bg-kobe border border-transparent rounded-md shadow-md text-base font-medium text-white hover:bg-amber sm:inline-block sm:w-auto`};
`
