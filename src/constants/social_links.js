// This file has not yet been implemented. This will be refactored into a later build.

import React from "react"
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"

const data = [
  {
  id: 1,
  icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  url: "https://twitter.com/sparker888",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/sparky888/",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/sparker888/",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/sparker888",
  },

]

export default data