import React from "react";
import SEO from "./SEO";

export default ({children}) => {
    return (
        <>
            <SEO/>
            <p>header</p>
            {children}
            <p>footer</p>
        </>
    );
}