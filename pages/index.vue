<template>
  <Head>
    <Title>Home</Title>
  </Head>
  <LayoutsHeader />
  <main class="w-full py-8">
    <div class="container mx-auto mb-5">
      <div class="flex mb-3">
        <VideosPlayerVideo />
        <div class="w-1/3 bg-white">
          <div class="py-3 px-5 bg-gray-900 text-white">
            <h2 class="text-2xl mb-3 font-bold m-0 p-0">
              កម្រងវីដេអូ <span>៣២ វីដេអូ</span>
            </h2>
          </div>
          <div class="py-3 px-5">
            <ul class="flex flex-col gap-2">
              <li
                v-for="(video, index) in videos"
                :key="index"
                :class="`py-4 px-6 bg-gray-200 rounded-sm w-full ${
                  video.active
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-200 text-black'
                }`"
              >
                <a href="" class="flex justify-between items-center">
                  <span class="font-bold">{{ video.title }}</span>
                  <span>
                    <template v-if="video.lock">
                      <IconsLock />
                    </template>
                    <template v-else>
                      <IconsUnlock />
                    </template>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-between gap-2 bg-gray-800 shadow-md">
          <div
            :class="`w-full py-3 px-5 text-white cursor-pointer ${
              _tab.slug === tab.slug ? 'bg-yellow-500' : ''
            }`"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="() => (_tab = tab)"
          >
            <h3 class="text-center font-bold">{{ tab.label }}</h3>
          </div>
        </div>
        <div class="w-full bg-white py-3 px-5 min-h-[350px]">
          <template v-if="_tab.slug == 'summary'">
            <TabsSummaryTab />
          </template>
          <template v-else-if="_tab.slug == 'tools'">
            <TabsToolsTab />
          </template>
          <template v-else-if="_tab.slug == 'resource'">
            <TabsSourceCodeTab />
          </template>
          <template v-else-if="_tab.slug == 'contact'">
            <TabsContactUsTab />
          </template>
        </div>
      </div>
    </div>
  </main>
  <LayoutsFooter />
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      tabs: [
        { slug: "summary", label: "មាតិការវីដេអូ" },
        { slug: "tools", label: "ឧបការណ៌ប្រើប្រាស់" },
        { slug: "resource", label: "ប្រភពកូដ" },
        { slug: "contact", label: "ទំនាក់ទំនង" },
      ],
      _tab: { slug: "summary", label: "មាតិការវីដេអូ" },
      videos: [
        {
          id: 1,
          url: "",
          title: "០១ - សេចក្តីផ្តើមនៃមេរៀន",
          lock: false,
          active: false,
        },
        {
          id: 2,
          url: "",
          title: "០២ - សេចក្តីផ្តើមនៃមេរៀន",
          lock: true,
          active: true,
        },
        {
          id: 3,
          url: "",
          title: "០៣ - សេចក្តីផ្តើមនៃមេរៀន",
          lock: true,
          active: false,
        },
        {
          id: 3,
          url: "",
          title: "០៤ - សេចក្តីផ្តើមនៃមេរៀន",
          lock: true,
          active: false,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      counter: "video/counter",
    }),
    getTabActive() {
      return this.tabs.find((item) => (item.slug = this._tab.slug));
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Koh+Santepheap:wght@100;400;700&family=Raleway:wght@100;400;700&display=swap");

body {
  background-color: #f1f1f1;
  font-family: "Raleway", sans-serif, "Koh Santepheap", cursive;
}
</style>
