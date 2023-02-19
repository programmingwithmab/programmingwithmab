<template>
  <div class="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-12">
    <UtilsPricingBoxItem :pricing="pricings[0]" />
    <UtilsPricingBoxItem :pricing="pricings[1]" />
  </div>
</template>

<script>
export default {
  name: "PricingBox",
  data() {
    return {
      pricings: [
        /*{
          title: "សម្រាប់និស្សិត",
          price: "១២",
          features: [
            { label: "32 Videos Provided", check: true },
            { label: "Source Code Provided", check: true },
            { label: "One Time Purchase", check: true },
            { label: "Support", check: true },
          ],
        },*/
        {
          title: "សម្រាប់បុគ្គលទូទៅ",
          price: "១២",
          features: [
            { label: "32 Videos Provided", check: true },
            { label: "Source Code Provided", check: true },
            { label: "One Time Purchase", check: true },
            { label: "Support", check: true },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
