import tw from "twin.macro"
import React from "react";
import Layout from "../layouts/Layout";
import ArticlesIntro from "../components/ArticlesIntro";
import BlogCards from "../components/BlogCards"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <ArticlesIntro />
      <FeaturedArticlesWrapper>
        {data.article && data.article.nodes.length > 0 ? (
          <BlogCards items={data.article.nodes} />
        ) : (
          <div>No Articles found.</div>
        )}
      </FeaturedArticlesWrapper>
    </Layout>
  );
};

export default Blog

export const query = graphql`
  query BlogQuery {
    article: allContentfulArticle (filter: {featured: {eq: true}}) {
      nodes {
        ...ArticleCard
      }
    }
  }
`

const FeaturedArticlesWrapper = tw.div`
w-full
`
