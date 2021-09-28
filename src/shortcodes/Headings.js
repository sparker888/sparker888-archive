import React from "react"
import tw, { styled } from "twin.macro"

const H1 = props => {
    return (
      <HeadingOne>
        <h1>{props.children}</h1>
      </HeadingOne>
    )
  }


const H2 = props => {
  return (
    <HeadingTwo>
    <h2>{props.children}</h2>
  </HeadingTwo>
  )
}

// const A = props => {
//     return (
//         <LinkOne>
//         <a>{props.children}</a>
//       </LinkOne>
//     )
//   }

export { H1, H2 }

const HeadingOne = tw.div`
text-4xl mt-2 mb-2 font-sans
`
const HeadingTwo = tw.div`
  text-2xl font-sans
`