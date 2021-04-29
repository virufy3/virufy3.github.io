import React, { useState } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import GatsbyImage from "gatsby-image";
import { news, videos } from "../data/news";
import countryshape from "../images/news/countryshape.png";
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

const VideoList = (props) => {
  const { id, source } = props;
  return (
    <div className=" wrapper md:flex">
      <iframe
        key={id}
        width="560"
        height="315"
        src={source}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
  );
};

const NewsList = (props) => {
  const {
    section,
    image,
    person: { id, mediaLink },
  } = props;

  const intl = useIntl();

  return (
    <section className="wrapper md:flex">
      <div className="lg:w-2/5">
        <GatsbyImage className="mx-auto w-1\/2" fluid={image} />
      </div>
      <div className="lg:w-2/3 mx-10">
        <p className="mb-8">
          {intl.formatMessage({ id: `news.${section}.${id}.date` })}
        </p>
        <h3 className="mb-8 font-bold text-2xl">
          {intl.formatMessage({ id: `news.${section}.${id}.title` })}
        </h3>
        <p>{intl.formatMessage({ id: `news.${section}.${id}.name` })}</p>
        <p className="mb-8">
          {intl.formatMessage({ id: `news.${section}.${id}.city` })}
          {intl.formatMessage({ id: `news.${section}.${id}.country` })}
        </p>

        <a
          target="_blank"
          rel="noreferrer"
          href={mediaLink}
          className="text-black"
        >
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
    "Colombia",
    "Japan",
    "Mexico",
    "Peru",
  ];
  const intl = useIntl();

  const [divHidden, setDivHidden] = useState(true);
  const onCountrySelect = (country) => {
    setDivHidden(true);
    props.setCountry(country);
  };

  return (
    <>
      <button onClick={() => setDivHidden(!divHidden)}>
        {intl.formatMessage({ id: "news.headers.filter" })}
      </button>
      <div className={`flex flex-col ${divHidden ? "hidden" : ""}`}>
        {countryText.map((country) => (
          <button onClick={() => onCountrySelect(country)} key={country}>
            {country}
          </button>
        ))}
      </div>
      <p>
        {props.country && (
          <button className="font-bold" onClick={() => props.setCountry("")}>
            {props.country}
            <img className="inline-block" src={countryshape}></img>
          </button>
        )}
      </p>
    </>
  );
};

export default function News({ data }) {
  const images = data.allFile.edges;
  const intl = useIntl();

  const [country, setCountry] = useState("");

  return (
    <Layout>
      <SEO title="News | Virufy" />
      <div className="wrapper lg:flex items-center justify-between md:py-4">
        <h1 classNmae="font-bold text-4xl">
          {intl.formatMessage({ id: "news.headers.header" })}
        </h1>
        <span>
          <CountrySelect setCountry={setCountry} country={country} />
        </span>
      </div>
      <section className="wrapper">
        <a
          target="_blank"
          rel="noreferrer"
          href="/smartphone-detection"
          className="text-black wrapper md:flex"
        >
          Smartphone Detection Article
        </a>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {news
            .filter((item) => {
              if (country === "") return true;
              return item.country === country;
            })
            .map((item) => {
              const NewsPic = images.find(({ node: { name } }) => {
                return name === item.imageName;
              }).node.childImageSharp.fluid;

              return (
                <div className="lg:w-2/5">
                  <NewsList
                    key={`${news}${item.id}`}
                    section="news"
                    image={NewsPic}
                    person={item}
                  />
                </div>
              );
            })}
        </div>

        <h1>Videos</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {videos.map((item) => {
            return <VideoList id={item.id} source={item.source} />;
          })}
        </div>
      </section>
    </Layout>
  );
}
