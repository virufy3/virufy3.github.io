import React, { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
