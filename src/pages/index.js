import tw from "twin.macro"
import React from "react";
import Seo from "../components/Seo";
import Layout from "../layouts/Layout";
import Intro from "../components/Intro";
import Featured from "../components/Featured"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <Intro />
      <FeaturedHeroesWrapper>
        {data.heroes && data.heroes.nodes.length > 0 ? (
          <Featured items={data.heroes.nodes} />
        ) : (
          <div>No Projects found.</div>
        )}
      </FeaturedHeroesWrapper>
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

const FeaturedHeroesWrapper = tw.div`
w-full
`