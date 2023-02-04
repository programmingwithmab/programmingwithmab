<template>
  <slot></slot>
  <div id="fb-root"></div>
  <div id="fb-customer-chat" class="fb-customerchat"></div>
</template>

<script>
export default {
  name: "Default",
  mounted() {
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "105320392441126");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v16.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Koh+Santepheap:wght@100;400;700&family=Montserrat:wght@400;700&display=swap");
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
