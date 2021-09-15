import tw from "twin.macro"
import React from "react";
import Seo from "../components/seo";
import Layout from "../layouts/Layout";
import ProjectPages from "../projects/ProjectPages";
import { graphql } from "gatsby"

const GravitalProject = ({data}) => {

  console.log(data);
  
  return (
    <Layout>
      <Seo />
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

export default GravitalProject

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
w-full my-0
`