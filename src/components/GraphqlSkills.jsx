import tw, { css } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/outline"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: "Query Operation Type and Naming",
    description:
      " I'm clear with and use the query operation type, operation name and many standard query fields -- particularly those used with GatsbyJS.",
  },
  {
    name: "GraphQL Schema",
    description:
      " I understand how GraphQL schemas are set up and able to write queries against data.",
  },
  {
    name: "Data types",
    description:
      " I can query, sort and filter and combine many common data types including JSON, markdown, MDX and media.",
  },
  {
    name: "Fragments",
    description:
      " I'm able to define GraphQL query fragments to manage and format data as I have done for this site.",
  },
  {
    name: "Advanced Concepts",
    description:
      " Currently, I'm learning more about the GraphQL specification, Schemas and Types.",
  },
  {
    name: "Endpoints",
    description:
      " I've built numerous endpoints in Next.js that support multiple parameters making decisions on how they operate.",
  },
  {
    name: "HTTP Methods",
    description:
      " My training gave me a solid understanding of when to use what HTTP requests and implementing function handlers to handle different requests.",
  },
  {
    name: "Responses",
    description:
      " I have implemented methods to handle GET and POST requests, reject certain methods, return error codes, redirects and handle incoming and outgoing data.",
  },
]

export default function GraphqlSkills() {
  const icon4 = useRef(null)
  const title4 = useRef(null)
  const paragraph4 = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(icon4.current, {
      yPercent: -80,
      scrollTrigger: {
        // Icon fades in from the top
        trigger: icon4.current,
        start: "bottom 100%",
        end: "top 25%",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(title4.current, {
      yPercent: -40,
      scrollTrigger: {
        // Title fades in from the top
        trigger: title4.current,
        start: "bottom 100%",
        end: "top 25%",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(paragraph4.current, {
      yPercent: 40,
      scrollTrigger: {
        // Paragraph fades in from the bottom
        trigger: paragraph4.current,
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
          <div ref={icon4}>
            <StaticImage
              src="../images/graphql.svg"
              alt="JS"
              height={50}
              layout="fixed"
            />
          </div>
          <Title ref={title4}>GraphQL and REST API</Title>
          <Description ref={paragraph4}>
            GraphQL query language is quickly becoming as important as REST API
            and I'm enjoying using it to query both local data and API data from
            third-party sources. I've also completed a REST API 101 in a
            development bootcamp with projects that covered Endpoints, HTTP
            Methods and Responses.
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
