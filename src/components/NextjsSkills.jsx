import tw, { css } from "twin.macro"
import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from "@heroicons/react/outline"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: "Pages and Routing",
    description:
      " Using NextJS, I'm very comfortable with both static and dynamic content taken from a database, markdown files and more. This includes working with page ids and useRouter for blogs, for example, and content requiring url slugs and pretty slugs. I'm also familiar with how router.query works and is made available once frontend JavaScript loads.",
  },
  {
    name: "Data Fetching",
    description:
      " I'm familiar with the Next.js feature of getServerSideProps to fetch data and return it as an object with the props. I've worked with using getStaticPaths and getStaticProps to generate static pages but with data. I'm used to common patterns involved with importing JSON files as posts, using Object.keys() that enabling iterating over produced arrays using map().",
  },
  {
    name: "API Routes",
    description:
      " In addition to page routes, I've also created API routes with Next.js. It's quite powerful to pull endpoint data to create dynamic content. In the dev bootcamp we created API routes that fetch data from a database and return it as JSON for say a specific id value. We then used this data in the frontend to create dynamic content.",
  },
  {
    name: "Deploying on Vercel",
    description:
      " I've used several deployment platforms, and the most recent is Vercel. The big benefit of Vercel is that they make Next.js, so it makes sense to deploy Next.js projects to Vercel. Similar to Netlify, I know how to point to a GitHub repo, configure projects in Vercel, configure deployment, env info, DNS info, SSL encryption and the basics of serverless functions.",
  },
  {
    name: "Authentication and Sessions",
    description:
      " I have experience working with the NextAuth.js library for Next.js. In a dev bootcamp we set up a PostgreSQL library and an .env file to hold our authentication data. We created data models for Users, VerificationToken, Account and Session to build our authentication system. Then used https://mailtrap.io to 'fake' email sending to test our authentication system. ",
  },
  {
    name: "Image Optimization",
    description:
      " Using next/image and the <Image > component, I build the system to import and optimize images with a number of properties including static local images as well as images from external URLs. In addition to src, width and height, I'm familiar with the optional props for different layout behaviors to loading behaviors and formats.",
  },
  {
    name: "Additional Knowledge",
    description:
      " Other areas of using Next.js I'm somewhat familiar with but haven't spent too much time with yet include testing, accessibility and other APIs such as next/script, next/head and next/streaming. I'm looking forward to digging into these topics in the coming weeks.",
  },
]

export default function GatsbySkills() {
  const icon3 = useRef(null)
  const title3 = useRef(null)
  const paragraph3 = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(icon3.current, {
      yPercent: -80,
      scrollTrigger: {
        // Icon fades in from the top
        trigger: icon3.current,
        start: "bottom 100%",
        end: "top 25%",
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
        start: "bottom 100%",
        end: "top 25%",
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
          <div ref={icon3}>
            <StaticImage
              src="../images/nextjs-black.svg"
              alt="NextJS"
              height={50}
              layout="fixed"
            />
          </div>
          <Title ref={title3}>NextJS</Title>
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
