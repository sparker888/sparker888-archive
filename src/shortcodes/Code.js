import React from "react"
import tw from "twin.macro";

const Code = ({ children }) => {
  return (
    <CodeBlock>
      {children}
    </CodeBlock>
  )
}

export default Code

const CodeBlock = tw.div`
text-amber bg-fogra-light px-5 py-5 rounded-2xl
`
