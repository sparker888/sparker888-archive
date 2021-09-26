import React from "react";
import { GlobalStyles } from "twin.macro";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MDXProvider } from "@mdx-js/react"
import { RegVideo, Video, Counter, Blockquote, Embed, Code } from "../shortcodes"

const shortcodes = { 
  RegVideo,
  Video,
  Counter,
  Blockquote,
  Embed,
  Code,
}
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MDXProvider components={shortcodes}>
      {children}
      </MDXProvider>
      <Footer />
    </>
  );
};

export default Layout;
