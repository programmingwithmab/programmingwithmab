<template>
  <Head>
    <Title>Home - Programming With Mab</Title>
  </Head>
  <LayoutsHeader />
  <main class="w-full">
    <div class="container mx-auto space-y-12">
      <div class="bg-white rounded-xl p-8 my-12">
        <div class="space-y-3">
          <h2
            class="font-bold text-2xl pl-3 border-t-0 border-r-0 border-b-0 border-[4px] border-blue-500"
          >
            តើយើងសិក្សាអ្វីខ្លះក្នុងកម្រងវីដេអូមេរៀននេះ?
          </h2>
          <article class="prose prose-slate">
            <p>
              សួស្តីអ្នកទាំងអស់គ្នា! យើងខ្ញុំសូមណែនាំវីដេអូសិក្សាមូលដ្ឋានគ្រឹះ
              និងការបង្កើត WordPress Theme! វីដេអូនេះផងដែលមានមាតិកាដូចជា៖
            </p>
            <ul class="ml-5">
              <li>សិក្សាអំពី Tools ដែលត្រូវប្រើប្រាស់ជាមួយ WordPress</li>
              <li>សិក្សាមុខងារសំខាន់ៗដែលមានក្នុង WordPress</li>
              <li>បង្កើត WordPress Theme</li>
              <li>សិក្សា និងប្រើប្រាស់ Plugins ក្នុងការបង្កើត Theme</li>
              <li>សិក្សា និងបង្កើត Block Theme</li>
              <li>សិក្សា បង្កើត និងប្រើប្រាស់ Custom Post Type</li>
              <li>សិក្សា បង្កើត និងប្រើប្រាស់ Custom Taxonomy</li>
            </ul>
            <p>
              បើសិនអ្នកទាំងអស់គ្នាមានចំណាប់អារម្មណ៌ចង់ជាវ សូមទំទាក់ទំនងតាមរយ:
            </p>
            <p>
              Telegram: <a href="tel:0974332197">0974332197</a> /
              <a href="tel:0878488679">0878488679</a>
            </p>
          </article>
        </div>
      </div>
    </div>
    <div class="bg-white" id="pricing">
      <div class="container mx-auto space-y-8 py-12">
        <div class="text-center space-y-5">
          <h2 class="font-blod text-3xl text-blue-500">
            តម្លៃលក់មេរៀន
          </h2>
          <div class="w-1/2 mx-auto">
            <p>
              យើងរីករាយសូមជ្រាបជូនថាយើងបែងចែកតម្លៃលក់នៃកម្រងវីដេអូនជាពីរផ្នែក​<br />សូមពិនិត្យមើលតារាងតម្លៃដែលសមស្របសម្រាប់អ្នក!
            </p>
          </div>
        </div>
        <UtilsPricingBox />
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
