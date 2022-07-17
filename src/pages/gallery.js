import tw from "twin.macro"
import React from "react"
import Layout from "../layouts/Layout"
import ScrollButton from "../components/scrollUp"
import GalleryIntro from "../components/GalleryIntro"
import MultipleGalleryCards from "../components/MultipleGalleryCards"
import { graphql } from "gatsby"

const Gallery = ({ data }) => {
  return (
    <Layout>
      <ScrollButton />
      <GalleryIntro />
      <FeaturedGalleriesWrapper>
        {data.gallery && data.gallery.nodes.length > 0 ? (
          <MultipleGalleryCards items={data.gallery.nodes} />
        ) : (
          <div>No Galleries found.</div>
        )}
      </FeaturedGalleriesWrapper>
    </Layout>
  )
}

export default Gallery

export const query = graphql`
  query GalleryQuery {
    gallery: allContentfulGallery(
      filter: { featured: { eq: true } }
      sort: { fields: [order], order: ASC }
    ) {
      nodes {
        ...GalleryCard
      }
    }
  }
`

const FeaturedGalleriesWrapper = tw.div`
w-full
`
