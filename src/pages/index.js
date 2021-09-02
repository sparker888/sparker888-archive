import React from "react";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import About from "../components/About";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <About />
    </Layout>
  );
};

export default IndexPage;
