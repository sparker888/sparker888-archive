import React from "react"
import tw, { css } from "twin.macro"
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"
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
        <ArrowUpCircleIcon
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
