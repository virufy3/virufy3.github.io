import React, { useCallback } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import GatsbyBgImage from "gatsby-background-image";
import { newsLink } from "../data/news";

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

export default ({ data }) => {
  const images = data.allFile.edges;
  const intl = useIntl();

  const findImage = useCallback(
    (imageName, ext = ".png") => {
      return images.find(({ node: { relativePath } }) => {
        return relativePath === `${imageName}${ext}`;
      }).node.childImageSharp.fluid;
    },
    [images]
  );

  return (
    <Layout>
      <SEO title="News | Virufy" />
      <div className="wrapper">
        <h2 className="mb-2 font-bold text-3xl">
          {intl.formatMessage({ id: "news.section1.header" })}
        </h2>

        <section className="flex justify-between mb-24">
          <div className="w-1/2">
            <Img
              className="w-3/5"
              fluid={findImage("Expreso")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
          <div className="w-1/2">
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section2.date" })}
            </p>
            <h3 className="mb-8 font-bold text-3xl">
              {intl.formatMessage({ id: "news.section2.title" })}
            </h3>
            <p>{intl.formatMessage({ id: "news.section2.name" })}</p>
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section2.location" })}
            </p>

            <Link className="">
              {intl.formatMessage({ id: "news.section2.readMoreLink" })}
            </Link>
          </div>
        </section>

        <section className="flex justify-between mb-24">
          <div className="w-1/2">
            <Img
              className="w-3/5"
              fluid={findImage("OYW Japan 2")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
          <div className="w-1/2">
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section3.date" })}
            </p>
            <h3 className="mb-8 font-bold text-3xl">
              {intl.formatMessage({ id: "news.section3.title" })}
            </h3>
            <p>{intl.formatMessage({ id: "news.section3.name" })}</p>
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section3.location" })}
            </p>

            <Link className="">
              {intl.formatMessage({ id: "news.section3.readMoreLink" })}
            </Link>
          </div>
        </section>

        <section className="flex justify-between mb-24">
          <div className="w-1/2">
            <Img
              className="w-3/5"
              fluid={findImage("OYW_white_rgb")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
          <div className="w-1/2">
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section4.date" })}
            </p>
            <h3 className="mb-8 font-bold text-3xl">
              {intl.formatMessage({ id: "news.section4.title" })}
            </h3>
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section4.name" })}
            </p>

            <Link className="">
              {intl.formatMessage({ id: "news.section4.readMoreLink" })}
            </Link>
          </div>
        </section>

        <section className="flex justify-between mb-24">
          <div className="w-1/2">
            <Img
              className="w-3/5"
              fluid={findImage("OYW_white_rgb")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
          <div className="w-1/2">
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section5.date" })}
            </p>
            <h3 className="mb-8 font-bold text-3xl">
              {intl.formatMessage({ id: "news.section5.title" })}
            </h3>
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section5.name" })}
            </p>

            <Link className="">
              {intl.formatMessage({ id: "news.section5.readMoreLink" })}
            </Link>
          </div>
        </section>

        <section className="flex justify-between mb-24">
          <div className="w-1/2">
            <Img
              className="w-3/5"
              fluid={findImage("OYW_white_rgb")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
          <div className="w-1/2">
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section6.date" })}
            </p>
            <h3 className="mb-8 font-bold text-3xl">
              {intl.formatMessage({ id: "news.section6.title" })}
            </h3>
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section6.name" })}
            </p>

            <Link className="">
              {intl.formatMessage({ id: "news.section6.readMoreLink" })}
            </Link>
          </div>
        </section>

        <section className="flex justify-between mb-24">
          <div className="w-1/2">
            <Img
              className="w-3/5"
              fluid={findImage("OYW_white_rgb")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
          <div className="w-1/2">
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section7.date" })}
            </p>
            <h3 className="mb-8 font-bold text-3xl">
              {intl.formatMessage({ id: "news.section7.title" })}
            </h3>
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section7.name" })}
            </p>

            <Link className="">
              {intl.formatMessage({ id: "news.section7.readMoreLink" })}
            </Link>
          </div>
        </section>

        <section className="flex justify-between mb-24">
          <div className="w-1/2">
            <Img
              className="w-3/5"
              fluid={findImage("virufyPresentation")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
          <div className="w-1/2">
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section8.date" })}
            </p>
            <h3 className="mb-8 font-bold text-3xl">
              {intl.formatMessage({ id: "news.section8.title" })}
            </h3>
            <p>{intl.formatMessage({ id: "news.section8.name" })}</p>
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section8.location" })}
            </p>

            <Link className="">
              {intl.formatMessage({ id: "news.section8.readMoreLink" })}
            </Link>
          </div>
        </section>

        <section className="flex justify-between mb-8">
          <div className="w-1/2">
            <Img
              className="w-3/5"
              fluid={findImage("soundsOfCovid")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
          <div className="w-1/2">
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section9.date" })}
            </p>
            <h3 className="mb-8 font-bold text-3xl">
              {intl.formatMessage({ id: "news.section9.title" })}
            </h3>
            <p className="mb-8">
              {intl.formatMessage({ id: "news.section9.name" })}
            </p>

            <Link className="">
              {intl.formatMessage({ id: "news.section9.readMoreLink" })}
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};
