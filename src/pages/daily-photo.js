import tw from "twin.macro"
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';

import { BgImage } from 'gbimage-bridge';
import Layout from '../layouts/Layout';

const DailyPhoto = () => {
  const { placeholderImage123 } = useStaticQuery(
          graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "palm-tree.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50, 
              webpOptions: {quality: 70}, 
              width: 2000
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage123);

  const StyledBgImage = tw(BgImage)`
  min-h-screen
  `

  return (
    <Layout>
      <StyledBgImage image={pluginImage}/>
    </Layout>
  )
}

export default DailyPhoto