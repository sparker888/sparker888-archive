import * as React from "react";
import Layout from "../layouts/Layout";

const Page = ({ pageContext, children }) => {
  return <Layout>{children}</Layout>;
};

export default Page;
