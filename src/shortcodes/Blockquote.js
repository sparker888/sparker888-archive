import tw from "twin.macro"
import React from "react"

const Blockquote = ({ children }) => {
  return (
    <Section>
      <OuterWrapper>
      <Svg1
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <Rect1 x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
        </Svg1>
        <InnerWrapper>
          <PatternWrapper>
            <Svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </Svg>
            <BlockQuoteWrap>
              <BlockQuoteTextWrap>
                <p>
                    {children}
                </p>
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
relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20
`
const InnerWrapper = tw.div`
relative lg:flex lg:items-center
`
const PatternWrapper = tw.div`
relative lg:ml-10
`
const Rect1 = tw.div`
text-amber
`
const Svg1 = tw.div`
absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden
`
const Svg = tw.div`
absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-kobe opacity-50
`
const BlockQuoteWrap = tw.blockquote`
relative
`
const BlockQuoteTextWrap = tw.div`
text-2xl leading-9 font-medium text-fogra-lightest
`