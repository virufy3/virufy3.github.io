// turn the data from markdown query in object with data for each language

export default (data) => {
  return data.allMarkdownRemark.edges.reduce(
    (res, { node: { html, frontmatter } }) => {
      return { ...res, [frontmatter.lang]: { html, frontmatter } };
    },
    {}
  );
};
