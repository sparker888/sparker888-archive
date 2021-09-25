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
text-kobe bg-fogra px-1 py-1 rounded-2xl
`
