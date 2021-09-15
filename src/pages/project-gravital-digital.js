import tw from "twin.macro"
import React from "react";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import ProjectQuery from "../projects/ProjectQuery"
import { graphql } from "gatsby"

const ProjectShowcasePage = ({data}) => {

  console.log(data);
  
  return (
    <Layout>
      <SEO />
      <FeaturedProjectWrapper>
        {data.myproject && data.myproject.nodes.length > 0 ? (
          <ProjectQuery items={data.myproject.nodes} />
        ) : (
          <div>No Project found.</div>
        )}
      </FeaturedProjectWrapper>
    </Layout>
  );
};

export default ProjectShowcasePage

export const query = graphql`
  query ProjectPage {
    myproject: allContentfulProject(filter: {title: {eq: "Project: Gravital Digital"}}) {
      nodes {
        ...ProjectQuery
      }
    }
  }
`
const FeaturedProjectWrapper = tw.div`
w-full
`