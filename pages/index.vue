<template>
  <header class="h-[280px] bg-gray-800 relative"></header>
  <main class="absolute w-full -bottom-10">
    <div class="container mx-auto mb-5">
      <div class="flex mb-3">
        <div class="w-2/3">
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/0rDFtOjF_p4"
              title="ព្រះមហាវិមលធម្ម ពិន សែម ពុទ្ធកិច្ច៥យ៉ាង, Pin Sem Talk 2022, Dharma talk, Pov Muth Official"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="w-1/3 bg-white py-3 px-5 overflow-y-scroll">
          <h2 class="text-2xl mb-3 font-bold">
            កម្រងវីដេអូ <span>៣២ វីដេអូ (New)</span>
          </h2>
          <div>
            <ul class="flex flex-col gap-2">
              <li
                v-for="(video, index) in videos"
                :key="index"
                class="py-4 px-6 bg-gray-200 rounded-sm w-full"
              >
                <a href="" class="flex justify-between items-center">
                  <span class="font-bold">{{ video.title }}</span>
                  <span>
                    <template v-if="video.lock">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </template>
                    <template v-else>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
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
              getTabActive.slug === tab.slug ? 'bg-gray-900' : null
            }`"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="_tab = tab"
          >
            <h3 class="text-center">{{ tab.label }}</h3>
          </div>
        </div>
        <div class="w-full bg-white py-3 px-5 min-h-[350px]">
          <div v-if="getTabActive.slug == 'summary'">{{ _tab }}</div>
          <div v-else-if="getTabActive.slug == 'tools'">{{ _tab }}</div>
          <div v-else-if="getTabActive.slug == 'resource'">{{ _tab }}</div>
          <div v-else-if="getTabActive.slug == 'contact'">{{ _tab }}</div>
        </div>
      </div>
    </div>
    <div class="bg-gray-800 text-white py-8">
      <div class="container mx-auto flex justify-between">
        <div>
          <ul class="flex gap-3">
            <li>
              <a
                href="https://fb.com/programmingwithmab"
                rel="noopener noreferrer"
                target="_blank"
                >ហេ្វបុក</a
              >
            </li>
            <li>
              <a
                href="https://t.me/programmingwithmab"
                rel="noopener noreferrer"
                target="_blank"
                >តេឡេក្រាម</a
              >
            </li>
          </ul>
        </div>
        <div>
          <p>រក្សាសិទ្ធិ &copy; ២០២៣ - គ្រប់យ៉ាងដោយ Prog. With Mab</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
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
        { id: 1, url: "", title: "០១ - សេចក្តីផ្តើមនៃមេរៀន", lock: false },
        { id: 2, url: "", title: "០២ - សេចក្តីផ្តើមនៃមេរៀន", lock: true },
        { id: 3, url: "", title: "០៣ - សេចក្តីផ្តើមនៃមេរៀន", lock: true },
        { id: 3, url: "", title: "០៤ - សេចក្តីផ្តើមនៃមេរៀន", lock: true },
      ],
    };
  },
  computed: {
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
