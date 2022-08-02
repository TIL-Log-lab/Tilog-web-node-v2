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
      fontFamily: {
        "eng-sub-font-1": ["Literata", "sans-serif"],
        "eng-sub-font-2": ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-color": "#606DEE",
        "primary-color-blur": "#9498EC",
        "secondary-color": "#FF616A",
        "secondary-color-blur": "#FF9EA4",
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
  ],
};
