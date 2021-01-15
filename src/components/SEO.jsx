import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        image
        author
        description
        title
        url
      }
    }
  }
`;

export default (props) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query);
  const path = useLocation().pathname;

  const image = siteMetadata.url + path + (props.image || siteMetadata.image);
  const author = props.author || siteMetadata.author;
  const description = props.description || siteMetadata.description;
  const title = props.title || siteMetadata.title;
  const url = siteMetadata.url + path;

  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />

      <title>{title}</title>
    </Helmet>
  );
};
