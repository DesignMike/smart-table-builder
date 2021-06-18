<template>
  <div class="border mx-auto rounded p-6 tab-component bg-gray-100 w-full" id="vue-backend-app">
    <div class="relative flex items-center justify-between">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <h1>WP Spreadsheet &amp; Table Builder</h1>
      </div>
      <p>Save</p>
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
import 'windi.css'
// import 'tablesaw/dist/tablesaw.css'
export default {
  name: 'App'
}
</script>

<style>

</style>
