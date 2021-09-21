import React from "react"
import Layout from "../layouts/Layout"
import SkillsIntro from "../components/SkillsIntro"
import SkillsMain from "../components/SkillsMain"
import JavaScriptSkills from "../components/JavaScriptSkills"
import CssSkills from "../components/CssSkills"
import ReactSkills from "../components/ReactSkills"
import GatsbySkills from "../components/GatsbySkills"
import GraphqlSkills from "../components/GraphqlSkills"


const Skills = () => {
  return (
    <div>
      <Layout>
        <SkillsIntro />
        <SkillsMain />
        <JavaScriptSkills />
        <CssSkills />
        <ReactSkills />
        <GatsbySkills />
        <GraphqlSkills />
      </Layout>
    </div>
  )
}

export default Skills

