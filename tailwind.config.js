module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  purge: {
    enabled: true,
    content: ["./docs/**/*.html", "./docs/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#13C2C2", // Buttons, Links
        secondary: {
          100: "#00B696", // Footer Background
          200: "#08979C", // Navbar Buttons
        },
        filler: "rgba(172, 224, 215, 0.05)",
      },
      fontFamily: {
        heading: ["'Open Sans'"],
        subHeading: ["'Source Sans Pro'"],
        body: ["'Source Sans Pro'"],
      },
      inset: {
        "-12": "-3rem",
        "-16": "-4rem",
        "-20": "-5rem",
      },
      margin: {
        "36": "9rem",
        "72": "18rem",
        "80": "20rem",
        "96": "24rem",
        "128": "32rem",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1680px",
        "4xl": "1920px",
      },
      textColor: {
        gray: {
          100: "#1F1F1F", // Body text
          200: "#434343", // Sub-headings
          300: "#2D2D2D", // Main heading
          400: "#21242C", // Mobile nav text
        },
        teal: "#13C2C2",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "group-hover"],
    pointerEvents: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
