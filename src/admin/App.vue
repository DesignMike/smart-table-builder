<template>
  <div class="" id="vue-backend-app">
    <div class="text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800" style="margin-left: -20px; margin-right: -20px;">
  <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div class="p-4 flex flex-row items-center justify-between">
      <h3 class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">{{ pageTitle }}</h3>
    </div>
    <nav class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
      <!-- <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Blog</a>
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Portfolio</a>
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">About</a>
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Contact</a>    -->
    </nav>
  </div>
</div>
    <div class="mt-8 relative flex items-center justify-between">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <!-- <h1 class="capitalize font-medium text-3xl font-sans">{{ pageTitle }}</h1> -->
      </div>
    </div>

    <router-view />
  </div>
</template>
<style>
#wpcontent, #wpfooter {
  background-color: white;
}
.wrap.wptable {
  margin-top: 0 !important;
}
</style>
<script>
// import 'tablesaw/dist/tablesaw.css'
export default {
  name: 'App',
  methods: {
    handleSave() {
      let data =  {
        title: this.$store.state.tableTitle,
        cells: this.$store.state.grid.data
      };
      jQuery.ajax({
        type: 'POST',
        url: ajaxurl+ '?action=create_new_table_entry',
        dataType: 'json',
        data: JSON.stringify(data),
        success: (responseData) => {
          this.$router.push({ name: "Edit Existing", query: {table_id : responseData.ok} });
        }
      });
    },
    handleUpdate() {
      let data =  {
        title: this.$store.state.tableTitle,
        cells: this.$store.state.grid.data
      };
      jQuery.ajax({
        type: 'POST',
        url: ajaxurl+ `?action=sprdsh_update_table_cells&id=${this.$store.state.editingTableId}`,
        dataType: 'json',
        data: JSON.stringify(data),
        success: () => {
        }
      });
    }
  },
  computed: {
    pageTitle: function () {
      return this.$store.state.pageTitle
    }
  },
  mounted() {
    jQuery('#vue-backend-app').parent().on('doPreview', () => {
      frontVue(jQuery('.excel-to-table-app').get(0));
  })
  },
}
</script>

<style>

</style>
