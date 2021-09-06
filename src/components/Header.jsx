import tw, {styled, css } from "twin.macro";
import React, { useState } from "react";
import { Link } from "gatsby";
import LinksMobile from "./LinksMobile";
import LinksDesktop from "./LinksDesktop";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  // determine what to show if isOpen is true from video

  return (

    <Wrapper>
      <InnerWrapper>
        <NavWrapperTop>
          <IconLink to="/">
            <SVGIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </SVGIcon>
          </IconLink>

          <div>
            <ButtonWrap type="button" onClick={() => setIsOpen(!isOpen)}>
              <IconButton> 
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                    {isOpen ?
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    : 
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    }  
                </svg>
              </IconButton>
            </ButtonWrap>  
          </div>
        </NavWrapperTop>
        
        <NavWrapperBottom>
        {isOpen ? <LinksMobile /> : <LinksDesktop />}          
        </NavWrapperBottom>

      </InnerWrapper>  
    </Wrapper>
  )
}

const Wrapper = styled.div`
${tw`container shadow`};
`
const InnerWrapper = styled.div`
${tw`sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3`};
`
const NavWrapperTop = styled.div`
${tw`flex items-center justify-between px-4 py-3 sm:py-0`};
`
const IconLink = styled(Link)`
${tw`text-gunmetal`};
`
const SVGIcon = styled(props => <svg {...props}/>)`
${tw`w-10 h-10 fill-current`};
`
const ButtonWrap = styled.button`
${tw`block text-burnt-light hover:text-burnt focus:text-burnt-light`}
`
const IconButton = styled.div`
${tw`sm:hidden w-10 h-10 fill-current`};
`
const NavWrapperBottom = styled.div`
${tw`px-2 pt-2 pb-4 sm:flex sm:px-6`};
`

