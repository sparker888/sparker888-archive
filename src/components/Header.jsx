import tw, { styled } from "twin.macro";
import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid"
import NavLinks from "./NavLinks";

export default function Header() {

  const [show, setShow] = useState(false)

  return (
    <NavBar>
      <Wrapper>
        {/* Mobile menu button */}
        <ToggleIcon
			    show={show}
			    onClick={() => setShow(!show)}
		    >
			    {show ? <MenuIcon open /> : <MenuIcon />}
		    </ToggleIcon>
        {show ? (<NavLinks />) : (<NavLinks open />)}; 

      </Wrapper>
    </NavBar>
  );
}

const NavBar = tw.nav`
  bg-white shadow
`
const Wrapper = ({ open }) => (
  <div
    css={[tw`container sm:opacity-0 flex flex-col md:flex-row items-center justify-center p-6 mx-auto text-gunmetal capitalize`,
    open && tw`sm:opacity-100`,
    ]}
  ></div>
)
const ToggleIcon = styled.btn(MenuIcon)`
  ${tw`md:opacity-0 opacity-100 text-burnt w-10 h-10`};
  transform: ${props => (props.open ? "rotate(-45deg)" : "inheret")};
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

