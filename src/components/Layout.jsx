import React from "react";
import SEO from "./SEO";
import Navbar from "./Navbar";

export default ({children}) => {
    return (
        <>
            <SEO/>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>footer</p>
            </footer>
        </>
    );
}