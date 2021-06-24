<template>
  <div class="border mx-auto rounded p-6 tab-component bg-gray-100 w-full" id="vue-backend-app">
    <div class="relative flex items-center justify-between">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <h1 class="capitalize font-medium text-3xl font-sans">WP Spreadsheet &amp; Table Builder</h1>
      </div>
      <button v-if="$route.path !== '/settings' " @click="handleSave" class="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">Save</button>
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
  name: 'App',
  methods: {
    handleSave() {
      let data =  this.$store.state.grid.data;
      jQuery.ajax({
        type: 'POST',
        url: ajaxurl+ '?action=create_new_table_entry',
        dataType: 'json',
        data: JSON.stringify(data),
        success: () => {
          debugger;
        }
      });
    }
  }
}
</script>

<style>

</style>
