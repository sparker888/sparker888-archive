import tw from "twin.macro"
import PropTypes from "prop-types"
import Heroes from "./Heroes"
import React, { useEffect, useRef } from "react"

const About = ({ items }) => {
  return (

<SectionWrapper>
  <UnorderedList>
    {items.map(item => (
      <Heroes {...item} />
    ))}
  </UnorderedList>
</SectionWrapper>

  );
};

About.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default About;

const SectionWrapper = tw.div`
w-full overflow-hidden
`
const UnorderedList = tw.ul`
w-full
`