import React from "react";

export default ({children}) => {
    return (
        <>
            <p>header</p>
            {children}
            <p>footer</p>
        </>
    );
}