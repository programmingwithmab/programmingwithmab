<template>
  <slot></slot>
</template>

<script>
export default {
  name: "Default",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Koh+Santepheap:wght@100;400;700&family=Montserrat:wght@400;700&display=swap");

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
