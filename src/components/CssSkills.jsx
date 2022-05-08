import tw, { css } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/outline"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: "CSS Basics",
    description:
      " Differences in past versions, current modules being used, popular libraries and how preprocessors are used.",
  },
  {
    name: "CSS Selectors and Specificity",
    description:
      " CSS type, class and id selectors, descendant combinators, and child combinators, specificity weight.",
  },
  {
    name: "CSS Text, Color, Fonts",
    description: " typography, color values, gradients, and unit sizing.",
  },
  {
    name: "CSS Flexbox",
    description:
      " CSS Box model, flexbox properties, flex direction, wrap, grow, shrink, and order.",
  },
  {
    name: "CSS Grid",
    description:
      " Template columns, Column Start/End, Template rows, Grid auto flow, auto columns and auto rows.",
  },
  {
    name: "CSS Advanced Concepts",
    description:
      " Responsive Web design, CSS pseudo selectors, Block Formatting Context (BFC), Clearing Techniques, Resetting vs. Normalizing CSS.",
  },
  {
    name: "Bootstrap",
    description:
      " I have used Bootstrap for years and I'm familiar with other similar systems such as Foundation.",
  },
  {
    name: "Modern Styling Systems",
    description:
      " I'm familiar with Sass, Less, Styled Components, Emotion, theme-ui and Tailwindcss (and twin.macro).",
  },
]

export default function CssSkills() {
  const icon1 = useRef(null)
  const title1 = useRef(null)
  const paragraph1 = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(icon1.current, {
      yPercent: -120,
      scrollTrigger: {
        // Icon fades in from the top
        trigger: icon1.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(title1.current, {
      yPercent: -40,
      scrollTrigger: {
        // Title fades in from the top
        trigger: title1.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(paragraph1.current, {
      yPercent: 40,
      scrollTrigger: {
        // Paragraph fades in from the bottom
        trigger: paragraph1.current,
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
          <div ref={icon1}>
            <StaticImage
              src="../images/css3.svg"
              alt="JS"
              height={50}
              layout="fixed"
            />
          </div>
          <Title ref={title1}>CSS 3</Title>
          <Description ref={paragraph1}>
            I have used CSS for many years and understand the language well.
            During my career, I have gone from vanilla CSS, to using libraries
            and frameworks, to design systems, preprocessors and now use modern
            styling and utility systems such as Styled Components, Theme UI and
            Tailwindcss.
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
bg-ming-lightest
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
