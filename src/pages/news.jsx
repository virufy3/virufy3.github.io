import React, { useCallback } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import { news } from "../data/news";

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "news-images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const NewsList = (props) => {
  const {
    section,
    image,
    person: { id, mediaLink },
  } = props;

  const intl = useIntl();

  return (
    <section className="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row mb-24">
      <div className="w-1/2">
        <Img className="w-3/5" fluid={image} />
      </div>
      <div className="w-1/2">
        <p className="mb-8">
          {intl.formatMessage({ id: `news.${section}.${id}.date` })}
        </p>
        <h3 className="mb-8 font-bold text-3xl">
          {intl.formatMessage({ id: `news.${section}.${id}.title` })}
        </h3>
        <p>{intl.formatMessage({ id: `news.${section}.${id}.name` })}</p>
        <p className="mb-8">
          {intl.formatMessage({ id: `news.${section}.${id}.location` })}
        </p>

        <a target="_blank" rel="noreferrer" href={mediaLink}>
          <u>
            {intl.formatMessage({ id: `news.${section}.${id}.readMoreLink` })}
          </u>
        </a>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const images = data.allFile.edges;
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="News | Virufy" />
      <div className="wrapper my-10 md:my-20">
        <h2 className="font-bold text-3xl">
          {intl.formatMessage({ id: "news.headers.header" })}
        </h2>
      </div>

      <section className="flex wrapper flex-col mb-10 xl:justify-center md:justify-around mb-24">
        {news.map((item) => {
          const NewsPic = images.find(({ node: { relativePath } }) => {
            return relativePath === item.imageName;
          }).node.childImageSharp.fluid;

          return (
            <NewsList
              key={`${news}${item.id}`}
              section="news"
              image={NewsPic}
              person={item}
            />
          );
        })}
      </section>
    </Layout>
  );
};
