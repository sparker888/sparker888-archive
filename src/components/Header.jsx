import tw, { styled } from "twin.macro"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import LinksMobile from "./LinksMobile"
import LinksDesktop from "./LinksDesktop"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FullWidth>
      <Wrapper>
        <InnerWrapper>
          <NavWrapperTop>
            <IconLink to="/">
              <StaticImage
                src="../images/rocket-logo.svg"
                alt="JS"
                height={50}
                layout="fixed"
              />
            </IconLink>
            <div>
              <ButtonWrap
                type="button"
                aria-label="Close"
                onClick={() => setIsOpen(!isOpen)}
              >
                <IconButton>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    {isOpen ? (
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    )}
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
const ButtonWrap = styled.button`
  ${tw`block text-almond hover:text-almond-light focus:text-almond-light`}
`
const IconButton = styled.div`
  ${tw`sm:hidden w-10 h-10 fill-current`};
`
const NavWrapperBottom = styled.div`
  ${tw`px-2 pt-2 pb-4 sm:flex sm:px-6`};
`
