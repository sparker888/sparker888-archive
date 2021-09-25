import tw, { css } from "twin.macro"
import React from "react"
import { ChatAlt2Icon } from "@heroicons/react/outline"

const Blockquote = ({ children }) => {
  return (
    <Section>
      <OuterWrapper>
        <InnerWrapper>
          <PatternWrapper>
          <ChatAlt2Icon
            aria-hidden="true"
            css={css`
                position: absolute;
                height: 10rem;
                width: 10rem;
                --tw-text-opacity: 0.25;
                color: rgba(255, 125, 0, var(--tw-text-opacity));
            `}
            />
            <BlockQuoteWrap>
              <BlockQuoteTextWrap>
                {children}
              </BlockQuoteTextWrap>
            </BlockQuoteWrap>
          </PatternWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  )
}

export default Blockquote

const Section = tw.section`
overflow-hidden
`
const OuterWrapper = tw.div`
relative max-w-7xl mx-auto 
`
const InnerWrapper = tw.div`
relative lg:flex lg:items-center
`
const PatternWrapper = tw.div`
relative lg:ml-10
`
const BlockQuoteWrap = tw.blockquote`
relative
`
const BlockQuoteTextWrap = tw.div`
text-2xl leading-9 font-medium text-fogra-lightest
`