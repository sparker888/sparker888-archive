import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, publicURL }) => {
  //destructure props from query as defaults
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultImage,
    siteUrl,
    organization,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    imageArticle: `${siteUrl}${publicURL || defaultImage}`,
    organization: organization,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        {" "}
        //main title tag - the most important one-page factor for seo. Content
        is the most important factor.
        {/* General tags */}
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.imageArticle} />
        {/* OpenGraph tags */}
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.imageArticle && (
          <meta property="og:image" content={seo.imageArticle} />
        )}
        {<meta property="og:type" content="article" />}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:site" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.imageArticle && (
          <meta name="twitter:image" content={seo.imageArticle} />
        )}
      </Helmet>
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
  publicURL: PropTypes.string,
  organization: PropTypes.string,
  twitterUsername: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  titleTemplate: null,
  description: null,
  siteUrl: null,
  publicURL: null,
  twitterUsername: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: publicURL
        organization
        twitterUsername
      }
    }
  }
`;
