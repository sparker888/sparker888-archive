import tw, { styled } from "twin.macro"
import React from "react"
import Layout from "../layouts/Layout"
import SkillsIntro from "../components/SkillsIntro"

const Skills = () => {
  return (
    <div>
      <Layout>
        <SkillsIntro />
        <Wrapper>
          <InnerWrapper>
            <ContentWrapper>
              <Span>🚧THIS PAGE IS UNDER CONSTRUCTION🚧</Span>
              <Span>This is where my skills will be listed, a contact form, and download resume button.</Span>
            </ContentWrapper>
          </InnerWrapper>
        </Wrapper>
      </Layout>
    </div>
  )
}

export default Skills

const Wrapper = tw.div`
bg-almond
`
const InnerWrapper = tw.div`
max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8
`
const ContentWrapper = tw.h2`
text-3xl font-extrabold tracking-tight text-amber sm:text-4xl
`
const Span = tw.span`
block
`