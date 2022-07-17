import tw, { css } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/outline"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: "JavaScript Basics",
    description: " JS Variables, Types, Array Methods and Operators",
  },
  {
    name: "Functional Programming in JS",
    description:
      " Function scope, Closures and Hoisting, and Higher Order Functions.",
  },
  {
    name: "Objects in JavaScript",
    description:
      " The this keyword, Implicit and Explicit Binding, Prototypal Inheritance.",
  },
  {
    name: "Some Advanced Concepts",
    description: " Polyfills, Async and Defer, Debouncing and Throttling.",
  },
  {
    name: "Storage in JavaScript",
    description: " localStorage and sessionStorage.",
  },
  {
    name: "JQuery",
    description:
      " I've used JQuery for years and understand it well but no longer use it.",
  },
  {
    name: "Regular Expressions",
    description: " I know enough to look things up and create a working RegEx.",
  },
  {
    name: "Git version control",
    description:
      " While not JavaScript, I wanted to mention here that I've been using the software version control system since 2009.",
  },
]

export default function JavaScript() {
  const icon = useRef(null)
  const title = useRef(null)
  const paragraph = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(icon.current, {
      yPercent: -80,
      scrollTrigger: {
        // Icon fades in from the top
        trigger: icon.current,
        start: "bottom 100%",
        end: "top 25%",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(title.current, {
      yPercent: -40,
      scrollTrigger: {
        // Title fades in from the top
        trigger: title.current,
        start: "bottom 100%",
        end: "top 25%",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(paragraph.current, {
      yPercent: 40,
      scrollTrigger: {
        // Paragraph fades in from the bottom
        trigger: paragraph.current,
        start: "bottom 100%",
        end: "top 25%",
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <div ref={icon}>
            <StaticImage
              src="../images/js.svg"
              alt="JS"
              height={50}
              layout="fixed"
            />
          </div>
          <Title ref={title}>JavaScript ES6</Title>
          <Description ref={paragraph}>
            I have used JavaScript for many years but I was not using it when
            the big changes happened with ES6 and the now common practice of
            arrow and higher order functions. I'm learning them quickly (and
            really enjoy them).
          </Description>
        </div>
        <SkillsWrapper>
          <Dl>
            {skills.map((skill) => (
              <Skill key={skill.name}>
                <Dt>
                  <CheckIcon
                    aria-hidden="true"
                    css={css`
                      position: absolute;
                      height: 1.5rem;
                      width: 1.5rem;
                      --tw-text-opacity: 1;
                      color: rgba(6, 95, 70, var(--tw-text-opacity));
                    `}
                  />
                  <SkillName>{skill.name}</SkillName>
                </Dt>
                <Dd>{skill.description}</Dd>
              </Skill>
            ))}
          </Dl>
        </SkillsWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = tw.div`
bg-almond
`
const InnerWrapper = tw.div`
max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8
`
const Title = tw.p`
mt-2 text-3xl font-extrabold text-fogra
`
const Description = tw.p`
mt-4 text-lg text-fogra-light
`
const SkillsWrapper = tw.section`
mt-12 lg:mt-0 lg:col-span-2
`
const Dl = tw.dl`
space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8
`
const Skill = tw.div`
relative
`
const Dt = tw.dt`
mx-0
`
const SkillName = tw.div`
ml-9 text-lg leading-6 font-medium text-amber-darkest
`
const Dd = tw.dd`
mt-2 ml-9 text-base text-fogra
`
