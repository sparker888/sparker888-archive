import tw, { css } from "twin.macro"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/outline"

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

]

export default function GraphqlSkills() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <StaticImage
            src="../images/graphql.svg"
            alt="JS"
            height={50}
            layout="fixed"
          />
          <Title>GraphQL</Title>
          <Description>
            GraphQL query language is new to me as it is to many developers. Fortunately, I have used it to query both local data and API data from third-party sources for several projects now and I'm very comfortable with Gatsby's GraphiQL interface, Gatsby plugins that expose available data and common GraphQL data structures.
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
