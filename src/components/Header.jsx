import tw, {styled} from "twin.macro"
import React, {useState} from "react";
import { Link } from "gatsby";
import { MenuIcon } from "@heroicons/react/solid"

const NavBar = tw.nav`
  bg-white shadow
`
const Wrapper = tw.div`
  container flex flex-col sm:flex-row items-center justify-center p-6 mx-auto text-gunmetal capitalize
`
const NavMenu = styled.div`
  ${show ? "display:none" : "display:block" }
`
const LinkIcon = tw(props => <MenuIcon {...props}/>)`
  w-10 h-10 sm:opacity-100 md:opacity-0
`
const StyledLink = tw(props => <Link {...props}/>)`
  border-b-2 border-transparent text-gunmetal-light hover:text-gunmetal mx-1.5 sm:mx-6
`


export default function Header() {
  
  const [show, setShow] = useState(true);

  return (
    <NavBar>
      <Wrapper>
        <NavMenu>
          {/* Mobile menu button */}
          <LinkIcon  onClick={() => setShow(!show)}/>

          <StyledLink to="/"
            activeClassName="active-link"
            onClick={() => setShow(false)}>
            Stephen Parker
          </StyledLink>

          <StyledLink to="/daily-photo"
            activeClassName="active-link"
            onClick={() => setShow(false)}>
            Daily Photo
          </StyledLink>

          <StyledLink to="/skilltree"
            activeClassName="active-link"
            onClick={() => setShow(false)}>
            Skill Tree
          </StyledLink>

          <StyledLink to="/projects"
            activeClassName="active-link"
            onClick={() => setShow(false)}>
            Projects
          </StyledLink>

          <StyledLink to="/blog"
            activeClassName="active-link"
            onClick={() => setShow(false)}>
            My Blog
          </StyledLink>
        </NavMenu>
      </Wrapper>
    </NavBar>
  );
}