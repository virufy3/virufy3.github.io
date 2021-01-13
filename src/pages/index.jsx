import React from "react";
import Layout from "../components/layout";
import {useIntl} from "gatsby-plugin-intl";

export default () => {
    const intl = useIntl();

    return (
        <Layout>
            <section>
                <h1>{intl.formatMessage({id: "index.section1.header"})}</h1>
                <div className="flex items-center">
                    <p dangerouslySetInnerHTML={{__html: intl.formatHTMLMessage({id: "index.section1.description"})}}/>
                    {/* <p>{intl.formatMessage({id: "index.section1.description"})}</p> */}
                </div>
            </section>
        </Layout>
    )
}