import tw, {styled} from "twin.macro";
import React, { useState } from "react";
import { Link } from "gatsby";
import { MenuIcon } from "@heroicons/react/solid";

const NavBar = styled.nav`
${tw`bg-white shadow`};
`
const Wrapper = styled.div`
${tw`container`};
`
const Menu = styled.div`
${tw`flex flex-col md:flex-row items-center justify-center p-6 mx-auto text-gunmetal capitalize`};
`
const MenuLink = styled.div`
${tw`text-gunmetal hover: text-burnt mx-1.5 sm:mx-6`};
`
const IconButton = styled(MenuIcon)`
${tw`opacity-100 md:opacity-0 w-10 h-10`};
`
const StyledLink = styled(Link)`
${tw`border-b-2 border-transparent text-gunmetal-light hover:text-gunmetal mx-1.5 sm:mx-6`};
`
export default function Header() {

  const [clickedState, setClickedState] = useState(false);
  const menuClick = () => {
    setClickedState(!clickedState);
  };

  return (

    <NavBar>
      <Wrapper>
        <Menu>

          {/* Mobile menu button */}
          <MenuLink>
          <IconButton onClick={menuClick}/>
          </MenuLink>

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
        </Menu>  
      </Wrapper>
    </NavBar>

  )
}
