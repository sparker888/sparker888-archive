import tw, {styled} from "twin.macro"
import React from "react";
import { Link } from "gatsby";
import { MenuIcon } from "@heroicons/react/solid"

const NavBar = tw.nav`
  bg-white shadow
`
const Wrapper = tw.div`
  container flex flex-col sm:flex-row items-center justify-center p-6 mx-auto text-gunmetal capitalize
`
const MenuLink = tw(props => <Link {...props}/>)`
  text-gunmetal hover: text-burnt mx-1.5 sm:mx-6
`
const InactiveIcon = tw(props => <MenuIcon {...props}/>)`
  opacity-0 w-10 h-10
`
const ActiveIcon = tw(props => <MenuIcon {...props}/>)`
  opacity-100 w-10 h-10
`
const ActiveLink = tw(props => <Link {...props}/>)`
  text-gunmetal border-b-2 border-burnt mx-1.5 sm:mx-6
`
const StyledLink = tw(Link)`
  border-b-2 border-transparent text-gunmetal-light hover:text-gunmetal mx-1.5 sm:mx-6
`

export default function Header() {
  return (
    <NavBar>
      <Wrapper>

        {/* Mobile menu button */}
        <MenuLink>
        <InactiveIcon />
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
      </Wrapper>
    </NavBar>
  );
}