import tw from "twin.macro"
import React from "react";
import Layout from "../layouts/Layout";
import GalleryIntro from "../components/GalleryIntro";
import MultipleGalleryCards from "../components/MultipleGalleryCards"
import { graphql } from "gatsby"

const Projects = ({ data }) => {

  return (
    <Layout>
      <GalleryIntro />
      <FeaturedGalleriesWrapper>
        {data.gallery && data.gallery.nodes.length > 0 ? (
          <MultipleGalleryCards items={data.gallery.nodes} />
        ) : (
          <div>No Galleries found.</div>
        )}
      </FeaturedGalleriesWrapper>
    </Layout>
  );
};

export default Projects

export const query = graphql`
  query GalleryQuery {
    gallery: allContentfulGallery {
      nodes {
        ...GalleryCard
      }
    }
  }
`

const FeaturedGalleriesWrapper = tw.div`
w-full
`