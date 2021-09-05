import tw, {styled} from "twin.macro";
import React, { useState } from "react";
import { Link } from "gatsby"

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  // determine what to show if isOpen is true from video

  return (

    <Wrapper>
      <InnerWrapper>
        <NavWrapperTop>
          <IconLink to="/">
          
          </IconLink>

          <div>
            <ButtonWrap type="button" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg> 
                : 
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                }
            </ButtonWrap>  
          </div>
        
        </NavWrapperTop>

        <NavWrapperBottom>  

            <StyledLink to="/"
              activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
              Stephen Parker
            </StyledLink>

            <StyledLink to="/daily-photo"
              activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
              Daily Photo
            </StyledLink>

            <StyledLink to="/skilltree"
              activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
              Skill Tree
            </StyledLink>

            <StyledLink to="/projects"
              activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
              Projects
            </StyledLink>

            <StyledLink to="/blog"
              activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
              My Blog
            </StyledLink>

        </NavWrapperBottom>
      </InnerWrapper>  
    </Wrapper>
  )
}

const Wrapper = styled.div`
${tw`container shadow`};
`
const InnerWrapper = styled.div`
${tw``};
`
const NavWrapperTop = styled.div`
${tw`flex items-center justify-between px-4 py-3`};
`
const IconLink = styled(Link)`
${tw`text-gunmetal`};
`
const IconButton = styled(props => <svg {...props}/>)`
${tw`w-10 h-10 fill-current`};
`
const ButtonWrap = styled.button`
${tw`block text-burnt hover:text-burnt-light focus:text-burnt-light`}
`
const NavWrapperBottom = styled.div`
${tw`px-2 pt-2 pb-4`};
`
const StyledLink = styled(Link)`
${tw`block mt-1 px-2 py-1 font-semibold text-gunmetal rounded hover:bg-powder`};
`
