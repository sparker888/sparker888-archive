import tw, { css } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/outline"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: "React Fundamentals",
    description:
      " Virtual DOM, JSX, Components, props and state Objects, Unidirectional Data Flow, Server-side Rendering.",
  },
  {
    name: "Lists and Keys",
    description:
      " I'm very familiar with the .map() function to convert both lists of data (arrays) as well as other components into lists of elements with the key prop.",
  },
  {
    name: "Event Listeners and Handling Events",
    description:
      " I'm very familiar with onClick, onChange and onSubmit props and using these to toggle states and manage data'.",
  },
  {
    name: "Essential React Hooks",
    description:
      " useState hook, useEffect hook, useRef hook, and Callback functions.",
  },
  {
    name: "Advanced React Hooks",
    description:
      " I have only read about more advanced and custom hooks such as the useMemo, useContext, and useReducer hooks.",
  },
  {
    name: "State Management",
    description:
      " I understand the basics of the Redux library and have worked with Actions, Reduders and Store in two learning projects.",
  },
  {
    name: "React Performance",
    description:
      " Identifying bottlenecks, Chrome performance tab, DevTools Profiler, Production builds.",
  },
  {
    name: "Next.js",
    description:
      " I've taken my React skills to the next level by studying and developing numerous projects with the Next.js framework and deploying them on Vercel.",
  },
]

export default function ReactSkills() {

  const icon2 = useRef(null)
  const title2 = useRef(null)
  const paragraph2 = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(icon2.current, {
      yPercent: -120,
      scrollTrigger: {
        // Icon fades in from the top
        trigger: icon2.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(title2.current, {
      yPercent: -40,
      scrollTrigger: {
        // Title fades in from the top
        trigger: title2.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()  
    tl.from(paragraph2.current, {
      yPercent: 40,
      scrollTrigger: {
        // Paragraph fades in from the bottom
        trigger: paragraph2.current,
        start: "top 75%",
        end: "center 100%",
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <div ref={icon2}>
            <StaticImage
              src="../images/react.svg"
              alt="JS"
              height={50}
              layout="fixed"
            />
          </div>
          <Title ref={title2}>React</Title>
          <Description ref={paragraph2}>
            I am relatively new to React, yet I'm comfortable with all the
            basics in terms of designing components, passing props and using
            essential hooks. I'm learning more advanced concepts now.
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
