import React from "react";
import { GlobalStyles } from "twin.macro";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MDXProvider } from "@mdx-js/react"
import { HeartButton, RegVideo, Video, Code, Blockquote, Counter, Embed } from "../shortcodes"

const shortcodes = { 
  HeartButton,
  RegVideo,
  Video,
  Code,
  Blockquote,
  Counter,
  Embed,
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
