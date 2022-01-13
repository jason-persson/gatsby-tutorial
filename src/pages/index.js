import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. Yay for me!</p>
      <StaticImage
        alt="A bunch of ripe bananas"
        src="../images/bananas.jpeg"
      />
    </Layout>
  );
}

export default IndexPage;