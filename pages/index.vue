<template>
  <Head>
    <Title>Home - Programming With Mab</Title>
  </Head>
  <LayoutsHeader />
  <main class="w-full">
    <div class="container mx-auto space-y-12" data-aos="fade-up">
      <div class="bg-white rounded-xl p-4 lg:p-8 my-12">
        <div class="space-y-3">
          <h2
            class="font-bold text-2xl pl-3 border-t-0 border-r-0 border-b-0 border-[4px] border-blue-500"
          >
            តើយើងនិងសិក្សាអ្វីខ្លះក្នុងវីដេអូមេរៀននេះ?
          </h2>
          <article class="prose prose-sm lg:prose-lg max-w-none">
            <p>
              សួស្តីអ្នកទាំងអស់គ្នា! យើងខ្ញុំសូមណែនាំវីដេអូសិក្សាមូលដ្ឋានគ្រឹះ
              និងការបង្កើត WordPress Theme! វីដេអូនេះផងដែលមានមាតិកាដូចជា៖
            </p>
            <ul class="ml-0 lg:ml-5">
              <li>សិក្សាអំពី Tools ដែលត្រូវប្រើប្រាស់ជាមួយ WordPress</li>
              <li>សិក្សាមុខងារសំខាន់ៗដែលមានក្នុង WordPress</li>
              <li>បង្កើត WordPress Theme</li>
              <li>សិក្សា និងប្រើប្រាស់ Plugins ក្នុងការបង្កើត Theme</li>
              <li>សិក្សា និងបង្កើត Block Theme</li>
              <li>សិក្សា បង្កើត និងប្រើប្រាស់ Custom Post Type</li>
              <li>សិក្សា បង្កើត និងប្រើប្រាស់ Custom Taxonomy</li>
            </ul>
            <p>
              បើសិនបងប្អួនមានចំណាប់អារម្មណ៌ចង់ទិញវីដេអូមេរៀននេះ សូមទំទាក់ទំនងតាមរយ:
            </p>
            <p>
              លេខតេឡេក្រាម: <a href="tel:0974332197">0974332197</a> /
              <a href="tel:0878488679">0878488679</a>
            </p>
          </article>
        </div>
      </div>
    </div>
    <div class="bg-white" id="pricing">
      <div class="container mx-auto space-y-12 py-12 lg:py-24">
        <div class="text-center space-y-5" data-aos="zoom-in">
          <h2 class="font-bold text-2xl text-blue-500">
            តម្លៃលក់មេរៀន
          </h2>
          <div class="w-3/4 lg:w-1/2 mx-auto">
            <p>
              យើងសូមជម្រាបជូនបងប្អួនជាដំណឹងថាយើងបែងចែកតម្លៃលក់មេរៀនជាពីរប្រភេទ​<br />សូមពិនិត្យមើលប្រភេទតម្លៃដែលសមស្របសម្រាប់បងប្អួន!
            </p>
          </div>
        </div>
        <UtilsPricingBox data-aos="zoom-in" />
      </div>
    </div>
  </main>
  <LayoutsFooter />
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss"></style>
