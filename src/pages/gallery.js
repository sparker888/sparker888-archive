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
            <GalleryTitle>Gallery of St. Pete, Florida images.</GalleryTitle>
            <SimpleReactLightboxPro>
              <SRLWrapper options={options}>
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
    gallery: allFile(
      filter: { relativeDirectory: { eq: "StPete" } }
      sort: { fields: base, order: ASC }
    ) {
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
              width: 600
              height: 400
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
const GalleryTitle = tw.div`
text-center text-9xl text-base font-semibold uppercase text-kobe tracking-wider
`
const GalleryWrapper = tw.div`
mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8
`
const ImageWrap = styled.div`
  ${tw`col-span-1 flex justify-center items-center bg-almond`}
  .imageBox {
    width: 100%;
  }
`
// I'm keeping these here for a possible overlay.
// const Overlay = tw.div`
// mt-2
// `
// const OverlayText = tw.h1`
// text-amber
// `
const PublicURL = tw.a`
text-fogra
`

// options for the lightbox
const options = {
  settings: {
    overlayColor: "#001524",
  },

  buttons: {
    backgroundColor: "#003052",
    iconColor: "#0077CC",
  },

  caption: {
    captionColor: "#EFB9A9",
    captionTextTransform: "uppercase",
  },
}
