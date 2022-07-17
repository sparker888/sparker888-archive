import tw from "twin.macro"
import React from "react";
import Layout from "../layouts/Layout";
import ScrollButton from "../components/scrollUp"
import ProjectsIntro from "../components/ProjectsIntro";
import ProjectCards from "../components/ProjectCards"
import { graphql } from "gatsby"

const Projects = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <ScrollButton />
      <ProjectsIntro />
      <FeaturedProjectsWrapper>
        {data.project && data.project.nodes.length > 0 ? (
          <ProjectCards items={data.project.nodes} />
        ) : (
          <div>No Projects found.</div>
        )}
      </FeaturedProjectsWrapper>
    </Layout>
  )
};

export default Projects

export const query = graphql`
  query ProjectsQuery {
    project: allContentfulProject (filter: {featured: {eq: true}}, sort: { fields: [order] order: ASC} ) {
      nodes {
        ...ProjectCard
      }
    }
  }
`

const FeaturedProjectsWrapper = tw.div`
w-full
`