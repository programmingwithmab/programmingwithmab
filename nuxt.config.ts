// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Home - Programming With Mab',
      meta: [
        { name: 'title', content: 'Home - Programming With Mab' },
        { name: 'description', content: 'Learn how to a create website with us!' },
        { name: 'keywords', content: 'wordpress, php, web development, theme development' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'English' },

        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://programmingwithmab.helmab.info/' },
        { name: 'og:title', content: 'Programming With Mab' },
        { name: 'og:description', content: 'Learn how to create a website with us!' },
        { name: 'og:image', content: 'https://programmingwithmab.helmab.info/img/logo.jpg' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://programmingwithmab.helmab.info/' },
        { name: 'twitter:title', content: 'Programming With Mab' },
        { name: 'twitter:description', content: 'Learn how to create a website with us!' },
        { name: 'twitter:image', content: 'https://programmingwithmab.helmab.info/img/logo.jpg' },
      ],
    }
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
