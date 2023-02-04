<template>
  <UtilsNoticeBar />
  <header class="bg-white">
    <div class="container mx-auto flex items-center">
      <div
        class="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-2 py-12"
      >
        <div class="w-full lg:w-1/2">
          <div class="space-y-5 mt-5 lg:mt-0">
            <h1 class="text-3xl font-bold" data-aos-duration="1000" data-aos="fade-right">
              វីដេអូបង្រៀនមូលដ្ឋានគ្រឹះ​ WordPress
            </h1>
            <p class="text-lg" data-aos="fade-right" data-aos-duration="2000">
              តោះរៀនបង្កើតគេហទំព័រជាមួយ WordPress ទាំងអស់គ្នា!
            </p>
            <div class="mt-5" data-aos="fade-right" data-aos-duration="3000">
              <a
                href="https://forms.gle/5d5LfzNjM61Vb8Xs5"
                rel="noopener noreferrer"
                target="_blank"
                class="bg-blue-500 text-black rounded-lg py-2 px-5 focus:bg-blue-500 focus:ring-1 focus:ring-offset-2"
              >
                ចុះឈ្មោះឥឡូវ
              </a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <div class="aspect-w-16 aspect-h-9" data-aos="zoom-in" data-aos-duration="2000">
            <iframe
              width="1280"
              height="744"
              src="https://www.youtube.com/embed/N7LqaWtMs2I"
              title="Basic WordPress Theme Development"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped></style>
