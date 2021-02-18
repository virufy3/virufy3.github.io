module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A588", // Buttons
        secondary: {
          100: "#66B495", // Footer Background
          200: "#4F9186", // links
        },
        green: {
          DEFAULT: "#00A588",
          100: "#D7E9E6", //cyan color for pg background
          200: "#F0F9F6", // light green for pg background
        },
        black: "#393939",
        filler: "rgba(172, 224, 215, 0.05)",
        divider: {
          100: "#8C8CA1",
          200: "#C5C5E2",
        },
      },
      fontFamily: {
        heading: ["'Open Sans'"],
        subHeading: ["'Source Sans Pro'"],
        body: ["'Source Sans Pro'"],
        sans: [
          "'Source Sans Pro'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      fontSize: {
        "5xl": [
          "3rem",
          {
            lineHeight: "4.2rem",
          },
        ],
      },
      inset: {
        "-12": "-3rem",
        "-16": "-4rem",
        "-20": "-5rem",
      },
      borderWidth: {
        "1/2": "0.5px",
      },
      margin: {
        36: "9rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        128: "32rem",
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
          500: "#979797", //black 50% opacity
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
