import * as React from "react";
import Layout from "../components/Layout";

const Page = ({ pageContext, children }) => {
  return <Layout>{children}</Layout>;
};

export default Page;
