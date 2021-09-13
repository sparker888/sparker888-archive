import tw from "twin.macro"
import React from "react";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import Intro from "../components/Intro";
import About from "../components/About"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Intro />
      <HeroWrapper>
        {data.heroes && data.heroes.nodes.length > 0 ? (
          <About items={data.heroes.nodes} />
        ) : (
          <div>No bios found.</div>
        )}
      </HeroWrapper>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    heroes: allContentfulHeroes (sort: { fields: [order] order: ASC} ) {
      nodes {
        ...HeroSections
      }
    }
  }
`

const HeroWrapper = tw.div`
w-full
`