<template>
<div class="container container m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
    <div v-for="(tableName, key) in avaiableTables" class="w-full p-3" :key="key">
      <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
        <img class="block h-auto w-full lg:w-48 flex-none bg-cover"
             src="https://source.unsplash.com/random/200x125">
        <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="text-black font-bold text-xl mb-2 leading-tight">{{ tableName.post_name }}</div>
          <p class="text-red-100 text-base">Read more</p>
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