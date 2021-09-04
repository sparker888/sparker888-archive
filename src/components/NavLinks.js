import tw from "twin.macro";
import React, { useState } from "react";
import { Link } from "gatsby";

export default function NavLinks() {

    const [show, setShow] = useState(false)

    return (
      <>  
        <StyledLink to="/"
        activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}
        onClick={() => setShow(false)}>
          Stephen Parker
        </StyledLink>

        <StyledLink to="/daily-photo"
        activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}
        onClick={() => setShow(false)}>
          Daily Photo
        </StyledLink>

        <StyledLink to="/skilltree"
        activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}
        onClick={() => setShow(false)}>
          Skill Tree
        </StyledLink>

        <StyledLink to="/projects"
        activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}
        onClick={() => setShow(false)}>
          Projects
        </StyledLink>

        <StyledLink to="/blog"
        activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}
        onClick={() => setShow(false)}>
          My Blog
        </StyledLink>
      </>  
    )
}

const StyledLink = tw(Link)`
  border-b-2 border-transparent text-gunmetal-light hover:text-gunmetal mx-1.5 sm:mx-6
`