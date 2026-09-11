<template>
  <!--
    aos.css sets `opacity: 0` on every [data-aos^="fade"|"zoom"] element and
    only aos.js reveals them. With scripting disabled that never happens, so
    reveal the content up front.
  -->
  <noscript>
    <style>
      [data-aos] {
        opacity: 1 !important;
        transform: none !important;
      }
    </style>
  </noscript>
  <slot></slot>
  <div id="fb-root"></div>
  <div id="fb-customer-chat" class="fb-customerchat"></div>
</template>

<script>
const FB_SDK_ID = "facebook-jssdk";
const FB_SDK_SRC = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
const FB_PAGE_ID = "105320392441126";
const FB_SDK_VERSION = "v16.0";

export default {
  name: "Default",
  mounted() {
    // Each initialiser is independent: a failure in one must not prevent the
    // other from running.
    this.initAos();
    this.initFacebookChat();
  },
  methods: {
    // Returns true once AOS has actually been initialised.
    tryInitAos() {
      if (typeof window.AOS === "undefined") return false;
      window.AOS.init();
      return true;
    },

    initAos() {
      if (this.tryInitAos()) return;

      // aos.js has not executed - it may still be in flight, or it may have
      // been blocked outright (ad blocker, CDN outage, SRI mismatch). Because
      // aos.css hides every animated element, failing to recover here would
      // leave the page blank, so always fall back to revealing the content.
      const giveUp = () => {
        document.documentElement.classList.add("aos-unavailable");
      };

      if (document.readyState === "complete") {
        giveUp();
        return;
      }

      window.addEventListener(
        "load",
        () => {
          if (!this.tryInitAos()) giveUp();
        },
        { once: true }
      );
    },

    initFacebookChat() {
      const chatbox = document.getElementById("fb-customer-chat");
      if (!chatbox) return;

      chatbox.setAttribute("page_id", FB_PAGE_ID);
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: FB_SDK_VERSION,
        });
      };

      if (document.getElementById(FB_SDK_ID)) return;

      const firstScript = document.getElementsByTagName("script")[0];
      if (!firstScript || !firstScript.parentNode) return;

      const js = document.createElement("script");
      js.id = FB_SDK_ID;
      js.src = FB_SDK_SRC;
      js.async = true;
      // Deliberately no crossOrigin / integrity here: connect.facebook.net
      // serves no Access-Control-Allow-Origin header, so requesting it in CORS
      // mode fails outright, and the SDK is an unversioned rolling script that
      // cannot be pinned to an SRI hash.
      firstScript.parentNode.insertBefore(js, firstScript);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Koh+Santepheap:wght@100;400;700&family=Montserrat:wght@400;700&display=swap");

/* Set when aos.js could not be loaded - undo the opacity:0 that aos.css
   applies, so the page stays readable without the animation library. */
.aos-unavailable [data-aos] {
  opacity: 1 !important;
  transform: none !important;
}

html {
  scroll-behavior: smooth;
}
body {
  background-color: #f1f1f1;
  font-family: "Montserrat", "Koh Santepheap", cursive, serif;
  font-size: 16px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "EB Garamond", "Koh Santepheap", cursive, serif;
}
article ul li::marker {
  content: "👉";
}
h1 {
  font-size: 96px;
}
h2 {
  font-size: 60px;
}
h3 {
  font-size: 48px;
}
p {
  font-size: 16px;
}
</style>
