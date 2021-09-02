import tw from "twin.macro"
import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const About = () => {

  const { placeholderImage123 } = useStaticQuery(
    graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "palm-coast-bg.jpg" }) {
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
  
  const pluginImage = getImage(placeholderImage123);

  const StyledBgImage = tw(props => <BgImage {...props}/>)`
  bg-contain bg-bottom my-1
  `
  const UpperWrapper = tw.div`
  container px-6 py-6 mx-auto
  `
  const UpperInnerWrapper = tw.div`
  items-center lg:flex lg:justify-center
  `
  const PortraitWrapper = tw.div`
  mt-8 lg:mt-0 mx-6
  `
  const PortraitInnerWrapper = tw.div`
  flex items-center justify-center
  `
  const ImageFrame = tw.div`
  max-w-lg
  `
  const StyledPortrait = tw(props => <img {...props}/>)`
  object-cover object-center w-full h-64 shadow rounded-md
  `
  const IntroWrapper = tw.div`
  flex-row items-center justify-start pt-5 mx-6 my-2
  `
  const IntroHeader = tw(props => <h2 {...props}/>)`
  text-3xl font-bold text-bleu
  `
  const IntroParagraph = tw(props => <p {...props}/>)`
  my-4 text-gunmetal lg:max-w-md
  `
  const IntroLink = tw(props => <a {...props}/>)`
  font-bold text-burnt
  `
  const CardsWrapper = tw.div`
  container px-6 pt-4 pb-28 mx-auto
  `
  const CardsInnerWrapper = tw.div`
  items-center flex justify-center flex-col lg:flex-row mb-10
  `
  const CardWrapper = tw.div`
  max-w-sm mx-4 mt-4 overflow-hidden bg-white rounded-2xl shadow-md
  `
  const CardImage = tw(props => <img {...props}/>)`
  object-cover w-full h-64
  `
  const CardInnerWrapper = tw.div`
  p-6
  `
  const Category = tw.div`
  text-xs font-medium text-bleu uppercase
  `
  const CardContentWrapper = tw.div`
  mt-4
  `
  const TitleLink = tw(props => <a {...props}/>)`
  block mt-2 text-2xl font-semibold text-gunmetal hover:text-gunmetal-light hover:underline
  `
  const CardText = tw.div`
  mt-2 text-sm text-gunmetal
  `
  const CardAvatar = tw(props => <img {...props}/>)`
  object-cover h-10 rounded-full
  `
  const AvatarBlock = tw.div`
  flex items-center
  `
  const ArticleDate = tw.div`
  mx-1 text-xs text-gunmetal
  `

  return (
    <StyledBgImage image={pluginImage}>
      <section>
        <UpperWrapper>
          <UpperInnerWrapper>
            <PortraitWrapper>
              <PortraitInnerWrapper>
                <ImageFrame>
                  <StyledPortrait
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1629628368/sparker-portrait_bv6dzq.jpg"
                    alt="Stephen Parker's Portrait"
                  />
                </ImageFrame>
              </PortraitInnerWrapper>
            </PortraitWrapper>
            <IntroWrapper>
              <IntroHeader>
                Aloha! 🤙
              </IntroHeader>

              <IntroParagraph>
                I'm Steve Parker, entrepreneur and front-end developer lead
                for{" "}
                <IntroLink
                  href="https://twitter.com/gogravital"
                >
                  @GoGravital
                </IntroLink>
                . This site serves as my bio and blog space, and it's also a full-fledged
                Gatsby starter using Tailwind, twin.macro and Greensock (GSAP) to showcase my development skills.
              </IntroParagraph>
              <IntroParagraph>
                I'm targeting a Sept. 9th completion date, but the repo can be cloned from{" "}
                <IntroLink
                  href="https://github.com/sparker888/sparker888"
                >
                  GitHub
                </IntroLink>
                {" "}now. Be sure to read the notes if you do. Thanks for your interest!
              </IntroParagraph>
            </IntroWrapper>
          </UpperInnerWrapper>
        </UpperWrapper>
      </section>
      <section>
        <CardsWrapper>
          <CardsInnerWrapper>
            
            <CardWrapper>
              <CardImage src="https://images.unsplash.com/photo-1576124566721-6496f8c53365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDUwMjc1Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Article"></CardImage>
                <CardInnerWrapper>
                  <div>
                      <Category>Skills</Category>
                      <TitleLink href="#">Designing with Tailwind and Styled Components</TitleLink>
                      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</CardText>
                  </div>
                  <CardContentWrapper>
                      <AvatarBlock>
                      <div>
                        <CardAvatar src="https://res.cloudinary.com/gravital-digital/image/upload/v1629628368/sparker-portrait_bv6dzq.jpg" alt="Avatar">
                        </CardAvatar>
                      </div>
                          <ArticleDate>1 SEP 2021</ArticleDate>
                      </AvatarBlock>
                  </CardContentWrapper>
                </CardInnerWrapper>
            </CardWrapper>

            <CardWrapper>
              <CardImage src="https://images.unsplash.com/photo-1539729112389-13d30728ae0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDUwMzAxMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Author, Stephen Parker"></CardImage>
                <CardInnerWrapper>
                  <div>
                      <Category>Projects</Category>
                      <TitleLink href="#">Showcasing Summer Skills Learned with a Bio/Starter</TitleLink>
                      <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</CardText>
                  </div>
                  <CardContentWrapper>
                      <AvatarBlock>
                      <div>
                        <CardAvatar src="https://res.cloudinary.com/gravital-digital/image/upload/v1629628368/sparker-portrait_bv6dzq.jpg" alt="Author, Stephen Parker">
                        </CardAvatar>
                      </div>
                          <ArticleDate>8 SEP 2021</ArticleDate>
                      </AvatarBlock>
                  </CardContentWrapper>
                </CardInnerWrapper>
            </CardWrapper>
            
          </CardsInnerWrapper>
        </CardsWrapper>
      </section>
    </StyledBgImage>
  );
};

export default About;