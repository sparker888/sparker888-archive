import tw, {styled } from "twin.macro";
import React, { useState } from "react";
import { Link } from "gatsby";
import LinksMobile from "./LinksMobile";
import LinksDesktop from "./LinksDesktop";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <FullWidth>
      <Wrapper>
        <InnerWrapper>
          <NavWrapperTop>
            <IconLink to="/">
              <SVGIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128">
                <path d="M 27.234,80.19 50.52,102.74 C 80.46,77.65 118.54,55.8 120.62,7.05 71.96,10.7 50.38,48.8 27.234,80.19 Z" />
                <path d="M 105.79162,32.141736 A 7.1393516,7.222031 44.076489 1 1 95.533635,22.209212 7.1393516,7.222031 44.076489 1 1 105.79162,32.141736 Z" />
                <path d="M 91.621624,46.781736 A 7.1393517,7.2220311 44.076489 1 1 81.363635,36.849212 7.1393517,7.2220311 44.076489 1 1 91.621624,46.781736 Z" />
                <path d="M 77.261624,61.611736 A 7.1393517,7.2220311 44.076489 1 1 67.003635,51.679212 7.1393517,7.2220311 44.076489 1 1 77.261624,61.611736 Z" />
                <path d="M 27.234,80.19 7.461,87.05 C 11.737,74.37 18.504,57.98 27.637,52.38 33.64,48.7 47.96,51.44 47.96,51.44 L 27.234,80.19 Z" />
                <path d="m 51.23,102.01 -6.22,19.98 c 12.54,-4.68 28.7,-11.97 34.01,-21.28 3.48,-6.12 0.28,-20.34 0.28,-20.34 l -28.07,21.64 z" />
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
    </FullWidth>
  )
}

const FullWidth = styled.div`
${tw`sticky top-0 z-10 bg-fogra-light`};
`
const Wrapper = styled.div`
${tw`container bg-fogra mx-auto`};
`
const InnerWrapper = styled.div`
${tw`sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3`};
`
const NavWrapperTop = styled.div`
${tw`flex items-center justify-between px-4 py-3 sm:py-0`};
`
const IconLink = styled(Link)`
${tw`text-ming-light`};
`
const SVGIcon = styled(props => <svg {...props}/>)`
${tw`w-10 h-10 fill-current hover:text-amber`};
`
const ButtonWrap = styled.button`
${tw`block text-almond hover:text-almond-light focus:text-almond-light`}
`
const IconButton = styled.div`
${tw`sm:hidden w-10 h-10 fill-current`};
`
const NavWrapperBottom = styled.div`
${tw`px-2 pt-2 pb-4 sm:flex sm:px-6`};
`

