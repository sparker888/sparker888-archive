import tw, { css } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/24/outline"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: "Relational Databases",
    description:
      " I'm clear with and use the query operation type, operation name and many standard query fields -- particularly those used with GatsbyJS.",
  },
  {
    name: "SQL Language",
    description:
      " I understand how GraphQL schemas are set up and able to write queries against data.",
  },
  {
    name: "Prisma ORM",
    description:
      " I can query, sort and filter and combine many common data types including JSON, markdown, MDX and media.",
  },
  {
    name: "Models and Schema Files",
    description:
      " I'm able to define GraphQL query fragments to manage and format data as I have done for this site.",
  },
  {
    name: "Database Syncing",
    description:
      " Currently, I'm learning more about the GraphQL specification, Schemas and Types.",
  },
  {
    name: "Server Side Props and API Routes",
    description:
      " I've built numerous endpoints in Next.js that support multiple parameters making decisions on how they operate.",
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
              src="../images/postgres.svg"
              alt="PostgreSQL"
              height={50}
              layout="fixed"
            />
          </div>
          <Title ref={title4}>PostgreSQL and Databases</Title>
          <Description ref={paragraph4}>
            Recently, I've been focusing more time on databases, and in
            particular relational databases, SQL, PostgreSQL and Prisma. I
            worked with SQL years ago, so I brushed up on that first. Then, in a
            development bootcamp, I began working with Railway, the popular
            cloud database. From there, we covered the full React lifecycle from
            building forms, to creating schemas, to input validation, to
            creating, updating and deleting records.
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
