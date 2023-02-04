// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Home - Programming With Mab",
      meta: [
        { name: "title", content: "Home - Programming With Mab" },
        {
          name: "description",
          content: "Learn how to a create website with us!",
        },
        {
          name: "keywords",
          content: "wordpress, php, web development, theme development",
        },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "English" },

        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://programmingwithmab.helmab.info/" },
        { name: "og:title", content: "Programming With Mab" },
        {
          name: "og:description",
          content: "Learn how to create a website with us!",
        },
        {
          name: "og:image",
          content: "/img/logo.jpg",
        },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:url",
          content: "https://programmingwithmab.helmab.info/",
        },
        { name: "twitter:title", content: "Programming With Mab" },
        {
          name: "twitter:description",
          content: "Learn how to create a website with us!",
        },
        {
          name: "twitter:image",
          content: "/img/logo.jpg",
        },

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
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5",
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
