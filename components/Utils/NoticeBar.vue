<template>
  <div class="bg-blue-500 text-white py-2" v-if="show">
    <div class="container mx-auto">
      <div class="flex gap-2">
        <IconsInfo />
        <div class="flex justify-between w-full gap-3">
          <p>
            យើងមានប្រូម៉ូសិនថ្មី!
            <a
              href="https://www.facebook.com/programmingwithmab"
              class="underline"
              rel="noopener noreferrer"
              target="_blank"
              >ចូលទៅពិនិត្យប្រម៉ូសិន &RightArrow;</a
            >
          </p>
          <span
            class="cursor-pointer px-2 rounded-full text-blue-800 bg-white"
            @click="
              () => {
                show = false;
              }
            "
            >&times;</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeBar",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
