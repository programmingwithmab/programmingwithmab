<template>
  <header>
    <nav>
        <ul class="d-flex">
            <li><a href="/">Home</a></li>
            <li><a href="/example">Example</a></li>
        </ul>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Default",
};
</script>

<style lang="scss" scoped></style>
