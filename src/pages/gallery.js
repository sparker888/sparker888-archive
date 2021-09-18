import tw, { styled } from "twin.macro"
import React from "react"
import Layout from "../layouts/Layout"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightboxPro, { SRLWrapper } from "simple-react-lightbox-pro"

const Gallery = ({ data }) => {
  return (
    <div>
      <Layout>
        <OuterWrapper>
          <InnerWrapper>
            <Title>Gallery of St. Pete, Florida images.</Title>
            <SimpleReactLightboxPro>
              <SRLWrapper>
                <GalleryWrapper>
                  {data.gallery.edges.map(({ node }) => (
                    <ImageWrap key={node.id}>
                      <PublicURL href={`${node.publicURL}`}>
                        <GatsbyImage
                          image={node.childImageSharp.gatsbyImageData}
                          alt={node.base.split("_").join(" ").split(".")[0]}
                          className="imageBox"
                        />
                      </PublicURL>
                    </ImageWrap>
                  ))}
                </GalleryWrapper>
              </SRLWrapper>
            </SimpleReactLightboxPro>
          </InnerWrapper>
        </OuterWrapper>
      </Layout>
    </div>
  )
}

export default Gallery

export const pageQuery = graphql`
  query {
    gallery: allFile(filter: { relativeDirectory: { eq: "StPete" }}, sort: {fields: base, order: ASC}) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              transformOptions: { fit: COVER }
              placeholder: BLURRED
              webpOptions: { quality: 85 }
            )
          }
        }
      }
    }
  }
`
const OuterWrapper = tw.div`
bg-almond
`
const InnerWrapper = tw.div`
max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8
`
const Title = tw.p`
text-center text-base font-semibold uppercase text-kobe tracking-wider
`
const GalleryWrapper = tw.div`
mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8
`
const ImageWrap = styled.div`
  ${tw`col-span-1 flex justify-center bg-almond`}
  .imageBox {
    object-fit: cover;
  }
`
const PublicURL = tw.a`
text-fogra
`
