import tw from "twin.macro"
import React from "react";
import Layout from "../layouts/Layout";
import ProjectWrapper from "../projects/ProjectWrapper";
import { graphql } from "gatsby"

const PrestonProject = ({data}) => {

  console.log(data);
  
  return (
    <Layout>
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

export default PrestonProject

export const query = graphql`
  query Project2Query {
    myproject: allContentfulProject(filter: {title: {eq: "Project: Preston Studios"}}) {
      nodes {
        ...ProjectPage
      }
    }
  }
`
const FeaturedProjectWrapper = tw.div`
w-full my-0
`