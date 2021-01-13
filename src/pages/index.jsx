import React from "react";
import Layout from "../components/Layout";
import {useIntl} from "gatsby-plugin-intl";
import {Link} from "gatsby";

export default () => {
    const intl = useIntl();

    return (
        <Layout>
            <section>
                <h1>{intl.formatMessage({id: "index.section1.header"})}</h1>
                <div className="flex flex-evenly">
                    <p dangerouslySetInnerHTML={{__html: intl.formatMessage({id: "index.section1.description"})}}/>
                    <Link to="">{intl.formatMessage({id: "coughLink"})}</Link>
                    <Link className="bg-color-primary" to="">{intl.formatMessage({id: "donateLink"})}</Link>
                </div>
            </section>
        </Layout>
    )
}