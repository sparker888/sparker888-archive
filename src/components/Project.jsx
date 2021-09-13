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
        <StyledBgImage image={pluginImage}>
            <FlexWrapper>
                <TextWrapper>
                    <H1>Project: Gravital Digital</H1>
                    <Button>View Live</Button>
                </TextWrapper>
            </FlexWrapper>
        </StyledBgImage>        
  );
};

export default Project;

const StyledBgImage = tw(BgImage)`
w-full bg-center bg-cover h-128
`
const FlexWrapper = tw.div`
flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50
`
const TextWrapper = tw.div`
text-center
`
const H1 = tw.h1`
text-2xl font-serif font-semibold text-white uppercase lg:text-3xl
`
const Button = tw.button`
w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-kobe rounded-md lg:w-auto hover:bg-kobe-light focus:outline-none focus:bg-kobe-light
`
const ContentWrapper = tw.div`
w-full px-5 py-5
`