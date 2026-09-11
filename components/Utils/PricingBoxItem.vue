<template>
  <a
    href="https://forms.gle/5d5LfzNjM61Vb8Xs5"
    rel="noopener noreferrer"
    target="_blank"
    class="rounded-xl py-5 px-8 hover:bg-blue-200 hover:text-black border hover:border-blue-800 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
  >
    <div class="space-y-5">
      <div
        class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
      >
        <div class="text-center space-y-3 sm:space-y-0 sm:text-left">
          <h3 class="font-bold text-2xl">{{ pricing.title }}</h3>
          <p class="text-blue-500 text-2xl font-bold">
            {{ pricing.price }} ដុល្លា
          </p>
        </div>
        <div>
          <!--
            Rendered as a <span>, not a <button>: this whole card is already an
            <a>, and HTML forbids nesting interactive content. The surrounding
            anchor is the single focusable target.
          -->
          <span
            class="inline-block bg-blue-500 text-black rounded-lg py-2 px-5"
          >
            ចុះឈ្មោះឥឡូវ
          </span>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "PricingBoxItem",
  props: {
    pricing: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
