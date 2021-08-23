<template>
  <div class="border mx-auto my-auto rounded p-6 tab-component bg-gray-100 w-full" id="vue-backend-app">
    <div class="relative flex items-center justify-between">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <h1 class="capitalize font-medium text-3xl font-sans">{{ pageTitle }}</h1>
      </div>
      <button v-if="!['/settings', '/edit', '/'].some(e => e == $route.path)" @click="handleSave" class="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">Save</button>
      <button v-if="($route.path == '/edit') && $route.query.table_id" @click="handleUpdate" class="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">Update</button>
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
      let data =  {
        title: this.$store.state.tableTitle,
        cells: this.$store.state.grid.data
      };
      debugger;
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
    debugger;
  },
}
</script>

<style>

</style>
