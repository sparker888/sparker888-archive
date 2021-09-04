import tw, {styled} from "twin.macro";
import React, { useState } from "react";
import { Link } from "gatsby"
import { MenuIcon } from "@heroicons/react/solid";


export default function Header() {

  return (

    <Wrapper>
      <InnerWrapper>
        <div>

          <IconButton>
            <button></button>
          </IconButton>  

          <StyledLink to="/"
            activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}>
            Stephen Parker
          </StyledLink>

          <StyledLink to="/daily-photo"
            activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}>
            Daily Photo
          </StyledLink>

          <StyledLink to="/skilltree"
            activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}>
            Skill Tree
          </StyledLink>

          <StyledLink to="/projects"
            activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}>
            Projects
          </StyledLink>

          <StyledLink to="/blog"
            activeStyle={tw`text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6`}>
            My Blog
          </StyledLink>

        </div>
      </InnerWrapper>  
    </Wrapper>
  )
}

const Wrapper = styled.div`
${tw`container`};
`
const InnerWrapper = styled.div`
${tw`container`};
`
const StyledLink = styled(Link)`
${tw`border-b-2 border-transparent text-gunmetal-light hover:text-gunmetal mx-1.5 sm:mx-6`};
`
const IconButton = styled(MenuIcon)`
${tw`opacity-100 w-10 h-10`};
`