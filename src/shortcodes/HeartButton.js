import React from "react"
import { styled, css } from "twin.macro"
import { HeartIcon } from "@heroicons/react/outline"

const HeartButton = () => {
  const [value, setValue] = React.useState(0)
  return (
    <Wrapper>
      <div>
        <button onClick={() => setValue(value + 1)}>
          <HeartIcon
            aria-hidden="true"
            css={css`
              position: absolute;
              height: 1.5rem;
              width: 1.5rem;
              --tw-text-opacity: 1;
              color: rgba(6, 95, 70, var(--tw-text-opacity));
            `} />
        </button>
        <p>
          Liked the post?
          <br />
          Click the heart a few times.
        </p>
      </div>
      <span>+{value}</span>
    </Wrapper>
  )
}

// Styling Only

const Wrapper = styled.div`
  margin: 2rem 0;
  div {
    display: flex;
    align-items: center;
  }
  button {
    font-size: 3.5rem;
    background: transparent;
    border: transparent;
    margin-right: 1rem;
    cursor: pointer;
    color: var(--clr-primary-5);
  }
  p {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.2rem;
  }
  span {
    font-size: 2rem;
    color: var(--clr-primary-5);
    font-weight: 700;
  }
`
export default HeartButton