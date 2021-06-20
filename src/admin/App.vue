<template>
  <div class="border mx-auto rounded p-6 tab-component bg-gray-100 w-full" id="vue-backend-app">
    <div class="relative flex items-center justify-between">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <h1 class="capitalize font-medium text-3xl font-sans">WP Spreadsheet &amp; Table Builder</h1>
      </div>
      <button class="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">Save</button>
    </div>

    <router-view />
  </div>
</template>
<style>
#wpcontent, #wpfooter {
  background-color: white;
}
</style>
<script>
// import 'tablesaw/dist/tablesaw.css'
export default {
  name: 'App'
}
</script>

<style>

</style>
