import React from "react"
import Layout from "../layouts/Layout"
import ScrollButton from "../components/scrollUp"
import SkillsIntro from "../components/SkillsIntro"
import SkillsMain from "../components/SkillsMain"
import JavaScriptSkills from "../components/JavaScriptSkills"
import CssSkills from "../components/CssSkills"
import ReactSkills from "../components/ReactSkills"
import NextjsSkills from "../components/NextjsSkills"
import GatsbySkills from "../components/GatsbySkills"
import DatabaseSkills from "../components/DatabaseSkills"
import GraphqlSkills from "../components/GraphqlSkills"
import DigitalMarketingSkills from "../components/DigitalMarketingSkills"
import Cta from "../components/Cta"

const Skills = () => {
  return (
    <div>
      <Layout>
        <ScrollButton />
        <SkillsIntro />
        <SkillsMain />
        <JavaScriptSkills />
        <CssSkills />
        <ReactSkills />
        <NextjsSkills />
        <DatabaseSkills />
        <GatsbySkills />
        <GraphqlSkills />
        <DigitalMarketingSkills />
        <Cta />
      </Layout>
    </div>
  )
}

export default Skills
