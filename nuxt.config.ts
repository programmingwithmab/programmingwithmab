// https://nuxt.com/docs/api/configuration/nuxt-config

// Deployed as a GitHub Pages *project* page, so the site is served from a
// subpath rather than the domain root. Every absolute asset path below must be
// prefixed with BASE_URL or it will 404 in production.
// Keep the trailing slash: Nuxt joins it directly onto asset paths.
const BASE_URL = "/programmingwithmab/";
const SITE_URL = "https://programmingwithmab.github.io/programmingwithmab/";

// Subresource Integrity hashes for the pinned AOS 2.3.1 assets. If the AOS
// version below is ever bumped, these must be regenerated or the browser will
// refuse to load the files:
//   curl -sfL <url> | openssl dgst -sha384 -binary | openssl base64 -A
const AOS_CSS = "https://unpkg.com/aos@2.3.1/dist/aos.css";
const AOS_CSS_SRI =
  "sha384-/rJKQnzOkEo+daG0jMjU1IwwY9unxt1NBw3Ef2fmOJ3PW/TfAg2KXVoWwMZQZtw9";
const AOS_JS = "https://unpkg.com/aos@2.3.1/dist/aos.js";
const AOS_JS_SRI =
  "sha384-wziAfh6b/qT+3LrqebF9WeK4+J5sehS6FA10J1t3a866kJ/fvU5UwofWnQyzLtwu";

export default defineNuxtConfig({
  app: {
    baseURL: BASE_URL,
    head: {
      htmlAttrs: {
        lang: "km",
      },
      title: "Home - Programming With Mab",
      meta: [
        {
          name: "description",
          content: "Learn how to a create website with us!",
        },
        {
          name: "keywords",
          content: "wordpress, php, web development, theme development",
        },
        { name: "robots", content: "index, follow" },

        // Open Graph is read from `property`, not `name`.
        { property: "og:type", content: "website" },
        { property: "og:url", content: SITE_URL },
        { property: "og:title", content: "Programming With Mab" },
        {
          property: "og:description",
          content: "Learn how to create a website with us!",
        },
        // Crawlers do not resolve relative URLs - these must stay absolute.
        { property: "og:image", content: `${SITE_URL}img/logo.jpg` },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: SITE_URL },
        { name: "twitter:title", content: "Programming With Mab" },
        {
          name: "twitter:description",
          content: "Learn how to create a website with us!",
        },
        { name: "twitter:image", content: `${SITE_URL}img/logo.jpg` },

        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: `${BASE_URL}apple-touch-icon.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${BASE_URL}favicon-32x32.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${BASE_URL}favicon-16x16.png`,
        },
        {
          rel: "manifest",
          href: `${BASE_URL}site.webmanifest`,
        },
        // NOTE: the previous `safari-pinned-tab.svg` <link> was removed - no
        // such file exists in public/, so it only ever produced a 404.
        {
          rel: "stylesheet",
          href: AOS_CSS,
          integrity: AOS_CSS_SRI,
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      script: [
        {
          src: AOS_JS,
          integrity: AOS_JS_SRI,
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
          // unhead v2 replaced the old `body: true` flag.
          tagPosition: "bodyClose",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
