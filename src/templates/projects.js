// This component is not currently being used, but was the source of other project components like ProjectPage.jsx.

import tw, { styled } from "twin.macro"
import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const Project = () => {

    const { placeholderImage } = useStaticQuery(
      graphql`
        query {
          placeholderImage: file(relativePath: { eq: "velocicoaster.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 50, 
                webpOptions: {quality: 70}, 
                width: 2000
              )
            }
          }
        }
      `
    )
    
    const pluginImage = getImage(placeholderImage);
  
    return (
    <>  
    <StyledBgImage image={pluginImage}>
      <FlexWrapper>
        <TextWrapper>
            <H1>Project: Gravital Digital</H1>
            <Button>View Live</Button>
        </TextWrapper>
      </FlexWrapper>
    </StyledBgImage>
    <OuterWrapper>
      <InnerWrapper>
        <SectionOneWrapper>
          <ProjectTitle>
            <H2>Landing Page & Blog</H2>
            <Title>
              Helping Hospitality Businesses
            </Title>
          </ProjectTitle>
          <ProjectIntro>
            <IntroParagraph>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor
              vitae ut. Amet vitae fames senectus vitae.
            </IntroParagraph>
          </ProjectIntro>
          <DescriptionOuterWrapper>
            <DescriptionInnerWrapper>
              <Description>
                <P>
                  Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                  pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                  velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                  egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                </P>
                <UL role="list">
                  <LI>Quis eLIt egestas venenatis mattis dignissim.</LI>
                  <LI>Cras cras lobortis vitae vivamus ULtricies faciLIsis tempus.</LI>
                  <LI>Orci in sit morbi dignissim metus diam arcu pretium.</LI>
                </UL>
                <SubHead>We’re here to help</SubHead>
                <P>
                  Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                  Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                  lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                </P>
              </Description>
              <ButtonWrapper>
                <Button1>
                  <Button1Style
                    href="#"
                  >
                    Live Site
                  </Button1Style>
                </Button1>
                <Button2>
                  <Button2Style
                    href="#"
                  >
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
              <SVG
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <RECT x={0} y={0} width={4} height={4} fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
              </SVG>
            </PatternSection>
            <ScreenSection>
              <IMG
                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                alt=""
              />
            </ScreenSection>
          </ScreenInnerWrapper>
        </ScreenOuterWrapper>
      </InnerWrapper>
    </OuterWrapper>
    </>        
  );
};

export default Project;

const OuterWrapper = tw.div`
bg-white pb-8 sm:pb-12 lg:pb-12
`
const InnerWrapper = tw.div`
pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48
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
text-center
`
const H1 = tw.h1`
text-2xl font-serif font-semibold text-fogra uppercase lg:text-3xl
`
const Button = tw.button`
w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-kobe rounded-md lg:w-auto hover:bg-kobe-light focus:outline-none focus:bg-kobe-light
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
const P = tw.div`
mx-0 text-fogra
`
const UL = tw.ul`
mx-0 text-kobe
`
const LI = tw.li`
mx-0 text-kobe
`
const SubHead = tw.div`
my-4 text-2xl leading-8 font-extrabold tracking-tight text-fogra-lightest sm:text-3xl
`
const ButtonWrapper = tw.div`
mt-10 flex text-base max-w-prose mx-auto lg:max-w-none
`
const Button1 = tw.button`
rounded-md shadow
`
const Button2 = tw.button`
rounded-md shadow ml-4
`
const Button1Style = tw.a`
w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kobe hover:bg-kobe-light
`
const Button2Style = tw.a`
w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ming hover:bg-ming-light
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
absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full
`
const SVG = tw.svg`
absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0
`
const ScreenSection = tw.div`
relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12
`
const IMG = tw.img`
w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none
`
const RECT = tw.rect`
text-gray-200
`