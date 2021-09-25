import React from "react"
import tw from "twin.macro";

const Embed = ({ code }) => {
  return (
    <CodeBlock>
      {code}
    </CodeBlock>
  )
}

export default Embed

const CodeBlock = tw.div`
px-5 py-5
`
