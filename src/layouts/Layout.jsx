import React from "react";
import { GlobalStyles } from "twin.macro";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MDXProvider } from "@mdx-js/react"
import { RegVideo, Video, Counter, Blockquote, Embed, Code, PrismSetup, Headings } from "../shortcodes"

const shortcodes = { 
  RegVideo,
  Video,
  Counter,
  Blockquote,
  Embed,
  Code,
  pre: PrismSetup,
  h1: Headings.H1,
  h2: Headings.H2,
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