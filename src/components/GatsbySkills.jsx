import tw, { css } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/outline"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: "Routing",
    description:
      " I can crate unique and template-based pages and compose component elements like headers and footers. I'm comfortable with JSX, local markdown files and headless CMS.",
  },
  {
    name: "Styling",
    description:
      " Gatsby supports multiple styling systems I'm familiar with inslucing standard CSS, preprocessors like Sass and CSS-in-JSS solutions like Styled Components, Tailwind and theme-ui.",
  },
  {
    name: "Images and Media",
    description:
      " Gatsby's image and media handling are simply stellar. I'm very familiar with the key image plugins and comfortable with static and GraphQL queries and performance configurations.",
  },
  {
    name: "Plugins and Themes",
    description:
      " The plugin and theme ecosystem are wide and deep, but I now have experience using several dozen common plugins and have worked with a complicated theme system site.",
  },
  {
    name: "Sourcing Data",
    description:
      " I have the knowledge and resources to pull data from wherever it lives -- a CMS, the filesystem, a spreadsheet, a database, and in many formats and through common APIs.",
  },
  {
    name: "SEO",
    description:
      " I have created customized SEO configurations using React Helmet with content front matter and images to provide optimal search and social performance.",
  },
  {
    name: "Deployment Pipeline",
    description:
      " I'm comfortable working with Gatsby's CLI and development servers, working with various APIs, providing previews to content providers and CDN deployment.",
  },
  {
    name: "Performance and Scaling",
    description:
      " I've primarily focused on the basics such as image optimization and lazy load/inline scripts. I've moved on to purge css to remove unnecessary styling file size overhead. I'm learning more in this area now.",
  },
]

export default function GatsbySkills() {

  const icon3 = useRef(null)
  const title3 = useRef(null)
  const paragraph3 = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(icon3.current, {
      yPercent: -120,
      scrollTrigger: {
        // Icon fades in from the top
        trigger: icon3.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(title3.current, {
      yPercent: -40,
      scrollTrigger: {
        // Title fades in from the top
        trigger: title3.current,
        start: "top 75%",
        end: "top center",
        scrub: 1.5,
      },
    })
  }, [])
  useEffect(() => {
    let tl = gsap.timeline()  
    tl.from(paragraph3.current, {
      yPercent: 40,
      scrollTrigger: {
        // Paragraph fades in from the bottom
        trigger: paragraph3.current,
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
          <div ref={icon3}>
            <StaticImage
              src="../images/gatsby.svg"
              alt="JS"
              height={50}
              layout="fixed"
            />
          </div>
          <Title ref={title3}>GatsbyJS</Title>
          <Description ref={paragraph3}>
            Having used other static site tools in the past, I consider GatsbyJS
            to be in another category. This system of using React is simply
            amazing in terms of the quality and number of plugins that make
            difficult React configurations trivial. Gatsby has a huge future and
            I'm all in with the community.
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
