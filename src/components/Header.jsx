import tw from "twin.macro"
import React from "react";
import { Link } from "gatsby";

const NavBar = tw.nav`
  bg-white shadow
`

const Wrapper = tw.div`
  container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize
`

const ActiveLink = tw(props => <Link {...props}/>)`
  text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6
`

const StyledLink = tw(props => <Link {...props}/>)`
  border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6
`

export default function Header() {
  return (
    <NavBar>
      <Wrapper>
        <ActiveLink to="/">
          Stephen Parker
        </ActiveLink>

        <StyledLink to="/daily-photo">
          Daily Photo
        </StyledLink>

        <StyledLink to="/skilltree">
          Skill Tree
        </StyledLink>

        <StyledLink to="/projects">
          Projects
        </StyledLink>

        <StyledLink to="/blog">
          My Blog
        </StyledLink>
      </Wrapper>
    </NavBar>
  );
}
