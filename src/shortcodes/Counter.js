import React from "react"
import tw, { styled } from "twin.macro"
const Counter = () => {
  const [count, setCount] = React.useState(0)
  return (
    <Wrapper>
      <H1>Simple Counter</H1>
      <Span id="value">{count}</Span>
      <div>
        <DecreaseBtn onClick={() => setCount(count - 1)}>
          Decrease
        </DecreaseBtn>
        <ResetBtn onClick={() => setCount(0)}>
          Reset
        </ResetBtn>
        <IncreaseBtn onClick={() => setCount(count + 1)}>
          Increase
        </IncreaseBtn>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 500px;
  border-radius: var(--radius);
  padding: 1rem 1.5rem;
  background: var(--clr-grey-10);
  text-align: center;
    ${tw`bg-white`}
  #value {
    font-size: 6rem;
    font-weight: bold;
  }`
  const H1 = tw.p`
  relative h-full text-3xl font-serif max-w-prose mx-auto text-fogra my-0
  `
  const Span = tw.p`
  relative my-1 mx-1 py-1 px-1 h-full text-3xl font-sans max-w-prose mx-auto text-fogra-lightest
  `
  const DecreaseBtn = tw.button`
  rounded-md shadow mx-2 my-2 px-5 bg-fogra-light text-white hover:bg-amber
  `
  const ResetBtn = tw.button`
  rounded-md shadow mx-2 my-2 px-5 bg-fogra-light text-white hover:bg-amber
  `
  const IncreaseBtn = tw.button`
  rounded-md shadow mx-2 my-2 px-5 bg-fogra-light text-white hover:bg-amber
  `

export default Counter