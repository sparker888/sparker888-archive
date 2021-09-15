import tw from "twin.macro"
import React from "react";
import Seo from "../components/seo";
import Layout from "../layouts/Layout";
import ProjectWrapper from "../projects/ProjectWrapper";
import { graphql } from "gatsby"

const GravitalProject = ({data}) => {

  console.log(data);
  
  return (
    <Layout>
      <Seo />
      <FeaturedProjectWrapper>
        {data.myproject && data.myproject.nodes.length > 0 ? (
          <ProjectWrapper items={data.myproject.nodes} />
        ) : (
          <div>No Project found.</div>
        )}
      </FeaturedProjectWrapper>
    </Layout>
  );
};

export default GravitalProject

export const query = graphql`
  query Project4Query {
    myproject: allContentfulProject(filter: {title: {eq: "Project: Gravital Visuals"}}) {
      nodes {
        ...ProjectPage
      }
    }
  }
`
const FeaturedProjectWrapper = tw.div`
w-full my-0
`