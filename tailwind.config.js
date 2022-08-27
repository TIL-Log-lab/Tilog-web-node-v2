const disabledCss = {
  "code::before": false,
  "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  "pre > code": false,
  h1: {
    "font-size": "2.5rem",
  },
  h2: {
    "font-size": "2rem",
  },
  h3: {
    "font-size": "1.88rem",
  },
  h4: {
    "font-size": "1.55rem",
  },
  h5: {
    "font-size": "1.44rem",
  },
  h6: {
    "font-size": "1.22rem",
  },
  code: {
    "font-size": "85%",
    padding: ".2em .4em",
    color: "#262626",
    backgroundColor: "#cfcfcf",
    "border-radius": "3px",
    margin: "1px",
  },
  p: {
    "line-height": "1.8",
  },
};

module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screen: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
      },

      fontFamily: {
        "eng-sub-font-1": ["Literata", "sans-serif"],
        "eng-sub-font-2": ["Poppins", "sans-serif"],
      },
      aspectRatio: {
        "2/1": "2 / 1",
      },
      fontSize: {
        "5xl": [
          "3rem",
          {
            lineHeight: "1.5",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "1.3",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "1.2",
          },
        ],
      },
      colors: {
        javascript: "#f1DD35",
        typescript: "#3178c6",
        html: "#e44b23",
        react: "#61DBFB",
        swift: "#ffac45",
        database: "#000000",
        git: "#171515",
        nestjs: "#e0234e",
        mysql: "#00758F",
        aws: "#FF9900",
        docker: "#0DB7ED",
        redis: "#A41E11",
        nodejs: "#68A063",
        css: "#264de4",
      },
    },
  },
  variants: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
