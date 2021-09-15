import tw from "twin.macro"
import React from "react";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import ProjectPages from "../projects/ProjectPages"
import { graphql } from "gatsby"

const Project = ({data}) => {

  console.log(data);
  
  return (
    <Layout>
      <SEO />
      <FeaturedProjectWrapper>
        {data.myproject && data.myproject.nodes.length > 0 ? (
          <ProjectPages items={data.myproject.nodes} />
        ) : (
          <div>No Project found.</div>
        )}
      </FeaturedProjectWrapper>
    </Layout>
  );
};

export default Project

export const query = graphql`
  query ProjectQuery {
    myproject: allContentfulProject(filter: {title: {eq: "Project: Gravital Digital"}}) {
      nodes {
        ...ProjectPage
      }
    }
  }
`
const FeaturedProjectWrapper = tw.div`
w-full
`