<template>
  <div class="w-full h-[350px] grid place-items-center">
    <div class="flex gap-2 items-center">
      <IconsCode />
      <p class="font-bold">កំពុងអភិវឌ្ឍន៌ - {{ tab }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevelopmentMode",
  props: {
    tab: {
      type: String,
      default: "មាតិការវីដេអូ",
    },
  },
};
</script>

<style lang="scss" scoped></style>
