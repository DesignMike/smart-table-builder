<template>
<div class="container container m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
    <div v-for="(tableName, key) in avaiableTables" class="w-full md:w-1/3 p-3" :key="key">
      <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg ">
        <div class="bg-grey rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow-default">
          <div class="text-black font-bold text-xl mb-2 leading-tight">{{ tableName.post_name }}</div>
          <ul class="flex main-nav border-b tab-buttons">
              <li class="mr-1">
                <button class="tab-item bg-white inline-block py-2 px-4 font-semibold border-l border-t border-r rounded-t text-blue-700 active">Edit</button>
              </li>
              <li class="mr-1">
                <button class="tab-item bg-white inline-block py-2 px-4 font-semibold border-l border-t border-r rounded-t text-red-700 active">Delete</button>
              </li>
          </ul>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Edit',
    data() {
        return {
            
        }
    },
    methods: {
        sampleFunc: () => {
        }
    },
    computed: {
        toEditTable: (vm) => {
            debugger;
            return vm.$route.query.table_id ? vm.$route.query.table_id : null;
        },
        avaiableTables: (vm) => {
            debugger;
            return vm.$store.state.tableList;
        }

    },
    mounted() {
        debugger;
        if (this.toEditTable) {
            let doProcess = (initialGridData) => {
                this.$store.commit('updateGrid', initialGridData );
            }
            jQuery.ajax({
                type: "GET",
                url: ajaxurl + '?action=sprdsh_get_table_cells',
                success: doProcess
            })
        }
        if (!this.toEditTable) {
            let updateListTables = (data) => {
                this.$store.commit('availableTables', data );
            }
            jQuery.ajax({
                type: "GET",
                url: ajaxurl + '?action=sprdsh_list_tables',
                success: updateListTables
            })
        }
    },
}
</script>