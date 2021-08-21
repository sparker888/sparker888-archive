import React from "react";
import { GlobalStyles } from "twin.macro";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
