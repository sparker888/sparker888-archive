import tw, { styled } from "twin.macro"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Cta = () => {
  const { mainImage } = useStaticQuery(
    graphql`
      query {
        mainImage: file(relativePath: { eq: "the-sign-small.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
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
      <MainImageWrapper>
        <GatsbyImage
          className="styledMainImage"
          image={image}
          alt="Photo by Austin Chan on Unsplash"
        />
      </MainImageWrapper>
      <OuterContentWrapper>
        <InnerContentWrapper>
          <SubTitle>
            UI/UX React/Gatsby Developer & Photographer
          </SubTitle>
          <Title>
            Thanks for your consideration
          </Title>
          <Copy>
            I'm always interested in supporting great people and organizations that create amazing things. I can work virtually anywhere, and I'm available for on-site work in the Greater Orlando and Brevard area. 
          </Copy>
          <ButtonOuterWrap>
            <ButtonInnerWrap>
              <Button2Style to="/daily-photo/">Contact Me</Button2Style>
              <Button1Style href={`Sparker888_Résumé_2021.pdf`}>
                Download Résumé
              </Button1Style>
            </ButtonInnerWrap>
          </ButtonOuterWrap>
        </InnerContentWrapper>
      </OuterContentWrapper>
    </Wrapper>
  )
}

export default Cta

const Wrapper = tw.div`
relative bg-fogra-light
`
const OuterContentWrapper = tw.div`
relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16
`
const InnerContentWrapper = tw.div`
md:ml-auto md:w-1/2 md:pl-10
`
const SubTitle = tw.h2`
text-base font-semibold uppercase tracking-wider text-amber
`
const Title = tw.p`
mt-2 text-fogra-lightest text-3xl font-extrabold tracking-tight sm:text-4xl
`
const Copy = tw.p`
mt-3 text-lg text-almond
`
const MainImageWrapper = styled.div`
  ${tw`h-56 bg-kobe sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2`}
  .styledMainImage {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ButtonOuterWrap = tw.div`
mt-8
`
const ButtonInnerWrap = tw.div`
mt-5 flex flex-row-reverse text-base max-w-prose mx-auto lg:max-w-none
`
const Button1Style = tw.a`
w-full flex items-center justify-center mx-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light
`
const Button2Style = styled(Link)`
  ${tw`w-full flex items-center mx-2 justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ming hover:bg-ming-light`}
`
