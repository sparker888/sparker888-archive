import tw, { css } from "twin.macro"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/outline"

const skills = [
  {
    name: "Google Ads",
    description:
      " For over seven years I've used Google Ads (formerly Google AdWords). I was certified in a special program back in 2015 and have worked with million-dollar accounts.",
  },
  {
    name: "Google Analytics",
    description:
      " Not only website analytics, but I've been certified in Google Tag Manager, Google App Analytics as well as Google Analytics. I know the system and techniques extensively.",
  },
  {
    name: "Facebook Ads",
    description:
      " The Facebook Ads Manager is somewhat new to me, but the basic techniques of targeting, placement and budgeting are much the same. I recently completed Adrienne Richardson's FB Summer Camp.",
  },
  {
    name: "SEO Campaigns",
    description:
      " I've been doing search for a long time and many things have changed, but great long-tail searchable and interesting content campaigns always do well. I'm an expert at on-site SEO.",
  },
  {
    name: "Email Marketing",
    description:
      " Managing email marketing campaigns is a strong suit as I have worked with several email marketing systems, designed hundreds of emails, managed lists, and set up landing pages.",
  },
  {
    name: "Social Media",
    description:
      " I have learned to work social media over the years and I know most of tine ins-and-outs of the major players: Facebook, Twitter, LinkedIn, Instrgram and YouTube.",
  },
  {
    name: "HubSpot / Martech Funnels, etc.",
    description:
      " Having led sales teams a number of times during my career, I'm very familiar with CRM systems and putting together the tools that help manage the 'funnel' or sales cycle.",
  },
  {
    name: "Project Management",
    description:
      " Most of my career I have been managing people or project or both. I'm great with teams, project planning, budget management and everything that comes with this responsibility.",
  },
]

export default function GatsbySkills() {
  return (
    <Wrapper id="digmarketer">
      <InnerWrapper>
        <div>
          <StaticImage
            src="../images/rocket-logo.svg"
            alt="JS"
            height={50}
            layout="fixed"
          />
          <Title>Digital Marketing</Title>
          <Description>
            Throughout my career I have worked in Marketing Communications departments, in agencies, or running a Sales and Marketing department as a Director-level manager. I have seen many technologies come and go, but basic principles of success remain the same -- well-planned and executed campaigns to the right target with great creative and proper management tend to be the successful ones. I've managed and been involved in many.
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
bg-amber-dark
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
