import React from "react"
import Highlight, { defaultProps } from 'prism-react-renderer'
// import theme from 'prism-renderer/themes/vsDark'

const CodeBlock = props => {
  return (
    <Highlight {...defaultProps} code={props.children.props.children.trim()} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
  )
}

export default CodeBlock
