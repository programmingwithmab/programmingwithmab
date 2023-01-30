/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "960px",
        "2xl": "960px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
