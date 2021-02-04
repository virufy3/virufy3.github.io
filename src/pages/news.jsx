import React, { useState } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import GatsbyImage from "gatsby-image";
import { news } from "../data/news";

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/news" } }) {
      edges {
        node {
          relativePath
          name
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
    <section className="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
      <div className="w-1/2">
        <GatsbyImage className="mx-auto w-3/5" fluid={image} />
      </div>
      <div className="w-1/2">
        <p className="mb-8">
          {intl.formatMessage({ id: `news.${section}.${id}.date` })}
        </p>
        <h3 className="mb-8 font-bold text-2xl">
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

const CountrySelect = (props) => {
  const countryText = [
    "Argentina ",
    "Brazil",
    "Columbia",
    "Japan",
    "Mexico",
    "Peru",
  ];

  return (
    <select
      value={props.country}
      onChange={(event) => props.setCountry(event.target.value)}
    >
      {countryText.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default ({ data }) => {
  const images = data.allFile.edges;
  const intl = useIntl();

  const [country, setCountry] = useState("");

  return (
    <Layout>
      <SEO title="News | Virufy" />
      <div className="wrapper my-10 md:my-20">
        <h1 className="font-bold text-3xl">
          {intl.formatMessage({ id: "news.headers.header" })}
        </h1>
      </div>

      <div className="flex items-center justify-between md:py-4">
        <span className="mr-2 lg:mr-5">
          <CountrySelect setCountry={setCountry} country={country} />
        </span>
      </div>

      <section className="container flex wrapper flex-col md:block">
        {news.map((item) => {
          const NewsPic = images.find(({ node: { name } }) => {
            return name === item.imageName;
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
