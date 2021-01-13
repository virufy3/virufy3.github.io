import React from "react";
import SEO from "./SEO";
import Navbar from "./Navbar";
import Footer from './Footer'

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
            <footer className="bg-secondary-100 py-16">
                <Footer />
            </footer>
        </>
    );
}