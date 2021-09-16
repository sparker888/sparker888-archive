import tw, { styled } from "twin.macro"
import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Heroes = props => {
    const { heroTitle, color, heroText, justifyContent, flexDirection, heroImage, backgroundColor, order } = props

    const image = getImage(heroImage)
  
    return (

    <SectionOne>
      <ImageWrapper>
          <GatsbyImage image={image} alt={order} className="sectionImage"/>
          <ColorCast css={{backgroundColor}} />
      </ImageWrapper>
      <TextCover>
        <div>
        <H1 css={{color, justifyContent}}>{heroTitle}</H1>
        </div>
        <FlexRow css={{flexDirection}}>
        <P>{heroText}</P>
        <Buttons>
          <Button1>
            <Link1 to="/skilltree">Skills</Link1>
          </Button1>
          <Button2>
            <Link2 to="/projects">Details</Link2>
          </Button2>
        </Buttons>
        </FlexRow>
      </TextCover>
    </SectionOne>

  );
};

Heroes.propTypes = {
  order: PropTypes.number.isRequired,
  heroTitle: PropTypes.string.isRequired,
  heroText: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
  flexDirection: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Heroes;

export const query = graphql`
  fragment HeroSections on ContentfulHeroes 
  { 
    order 
    heroTitle
    color
    heroText
    justifyContent
    flexDirection
    backgroundColor
    heroImage{
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }
`

const SectionOne = tw.div`
relative bg-ming
`
const ImageWrapper = styled.div`
${tw`absolute inset-0`}
.sectionImage {
    position: static;
}
`
const ColorCast = tw.div`
absolute inset-0 mix-blend-multiply
`
const TextCover = tw.div`
relative flex flex-col max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8
`
const H1 = tw.h1`
flex text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl
`
const FlexRow = tw.div`
flex flex-wrap sm:flex-col
`
const P = tw.p`
flex flex-auto mt-6 font-serif text-2xl text-white max-w-3xl
`
const Buttons = tw.div`
flex flex-auto mt-5 max-w-md mx-auto flex justify-center md:mt-8
`
const Button1 = tw.button`
rounded-md shadow
`
const Button2 = tw.button`
rounded-md shadow ml-3
`
const Link1 = styled(Link)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-fogra bg-almond-light hover:text-white hover:bg-ming-light md:py-4 md:text-lg md:px-10`}
`
const Link2 = styled(Link)`
  ${tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-kobe bg-almond-light hover:text-white hover:bg-kobe-light md:py-4 md:text-lg md:px-10`}
`