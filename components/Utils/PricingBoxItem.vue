<template>
  <a
    href="https://forms.gle/5d5LfzNjM61Vb8Xs5"
    rel="noopener noreferrer"
    target="_blank"
    class="rounded-xl py-5 px-8 hover:bg-blue-200 hover:text-black border hover:border-blue-800 cursor-pointer"
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
          <button
            class="bg-blue-500 text-white rounded-lg py-2 px-5 focus:bg-blue-500 focus:ring-1 focus:ring-offset-2"
          >
            ចុះឈ្មោះឥឡូវ
          </button>
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
