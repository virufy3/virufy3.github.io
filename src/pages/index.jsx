import React from "react";
import Layout from "../components/Layout";
import {useIntl} from "gatsby-plugin-intl";
import {Link, graphql} from "gatsby";

export default ({data}) => {
    const intl = useIntl();
    
    return (
        <Layout>
            <section className="px-24">
                <h1 className="text-5xl font-bold w-4/5">{intl.formatMessage({id: "index.section1.header"})}</h1>
                <div className="flex">
                    <div className="flex flex-col items-start">
                        <p className= "mb-5" dangerouslySetInnerHTML={{__html: intl.formatMessage({id: "index.section1.pg"})}}/>
                        <Link className="bg-green text-white px-4 py-2 mb-2" to="">{intl.formatMessage({id: "index.section1.coughLink"})}</Link>
                        <Link className="bg-green text-white px-4 py-2" to="">{intl.formatMessage({id: "index.section1.donateLink"})}</Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
{
    allFile(filter: {relativeDirectory: {eq: "images/home"}}) {
        edges {
            node {
                childImageSharp {
                    fluid(maxHeight: 10, maxWidth: 10) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}  
`;