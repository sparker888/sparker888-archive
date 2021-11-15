
import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)

