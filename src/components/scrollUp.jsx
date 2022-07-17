import React from "react"
import tw, { css } from "twin.macro"
import { ArrowCircleUpIcon } from "@heroicons/react/solid"
import ScrollUp from "react-scrollup-lite"

export default function ScrollButton() {
  return (
    <ScrollUp
      startPosition={0}
      showAtPosition={2}
      position="right"
      className="scroll-up"
    >
      <ScrollButtonStyle>
        <ArrowCircleUpIcon
          aria-hidden="true"
          css={css`
            position: absolute;
            height: 4rem;
            width: 4rem;
            color: rgb(255, 125, 0);
            this.hover: color: rgb(255, 255, 255);
          `}
        />
      </ScrollButtonStyle>
    </ScrollUp>
  )
}

const ScrollButtonStyle = tw.button`
flex items-center justify-center rounded-full border border-transparent px-4 py-3 hover:bg-white
`

{
  /* const ArrowStyle = tw.div`
h-0 w-0 text-fogra-lightest group-hover:animate-bounce group-hover:text-amber md:h-16 md:w-16
` */
}
