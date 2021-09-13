import React from "react";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import Project from "../components/Project"

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Project />
    </Layout>
  );
};

export default Projects

