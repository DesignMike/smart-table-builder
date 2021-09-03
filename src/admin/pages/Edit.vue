<template>
  <div>
    <div v-if="toEditTable" class="mb-4">
      <label class="block uppercase tracking-wide text-xs font-bold"
        >Name</label
      >
      <input
        v-model="tableTitle"
        type="text"
        class="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0"
        name="name"
        placeholder="Enter the Table Name"
        required=""
      />
    </div>
    <div v-if="!avaiableTables.length" class="flex justify-center items-center">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
    <table-editor v-if="toEditTable" />
    <div
      v-if="!toEditTable"
      class="
        container container
        m-auto
        flex flex-wrap flex-col
        md:flex-row
        items-center
        justify-start
      "
    >
      <div
        v-for="(tableName, key) in avaiableTables"
        class="w-full md:w-1/3 p-3"
        :key="key"
      >
        <div
          class="
            flex flex-col
            lg:flex-row
            rounded
            overflow-hidden
            h-auto
            lg:h-32
            border
            shadow shadow-lg
          "
        >
          <div
            class="
              bg-grey
              rounded-b
              lg:rounded-b-none lg:rounded-r
              p-4
              flex flex-col
              justify-between
              leading-normal
              flex-grow-default
            "
          >
            <div class="text-black font-bold text-xl mb-2 leading-tight">
              {{ tableName.post_title }}
            </div>
            <ul class="flex main-nav border-b tab-buttons">
              <li class="mr-1">
                <button
                  @click="handleEditBtn(tableName.ID)"
                  class="
                    tab-item
                    bg-white
                    inline-block
                    py-2
                    px-4
                    font-semibold
                    border-l border-t border-r
                    rounded-t
                    text-blue-700
                    active
                  "
                >
                  Edit
                </button>
              </li>
              <li class="mr-1">
                <button
                  class="
                    tab-item
                    bg-white
                    inline-block
                    py-2
                    px-4
                    font-semibold
                    border-l border-t border-r
                    rounded-t
                    text-red-700
                    active
                  "
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableEditor from "../components/tableEditor.vue";
export default {
  name: "Edit",
  data() {
    return {};
  },
  methods: {
    sampleFunc: () => {},
    handleEditBtn(tableId) {
      jQuery.ajax({
        type: "GET",
        url: ajaxurl + `?action=sprdsh_get_table_cells&id=${tableId}`,
        vm: this,
        success(data) {
          let { vm } = this;
          debugger;
          vm.$store.commit("updateGrid", data.grid);
          vm.$store.commit("setTitle", data.title);
          vm.$store.commit("setEditingTableId", data.id);
          vm.$router.push({
            name: "Edit Existing",
            query: { table_id: data.id },
          });
        },
      });
    },
  },
  computed: {
    toEditTable: (vm) => {
      return vm.$route.query.table_id ? vm.$route.query.table_id : null;
    },
    avaiableTables: (vm) => {
      return vm.$store.state.tableList;
    },
    tableTitle: {
      get: function () {
        return this.$store.state.tableTitle;
      },
      set: function (newString) {
        return (this.$store.state.tableTitle = newString);
      },
    },
  },
  components: {
    tableEditor,
  },
  mounted() {
    if (this.toEditTable) {
      let doProcess = (initialGridData) => {
        this.$store.commit("updateGrid", initialGridData);
      };
      jQuery.ajax({
        type: "GET",
        vm: this,
        url: ajaxurl + `?action=sprdsh_get_table_cells&id=${this.toEditTable}`,
        success(data) {
          let { vm } = this;
          vm.$store.commit("updateGrid", data.grid);
          vm.$store.commit("setTitle", data.title);
          vm.$store.commit("setEditingTableId", data.id);
        },
      });
      this.$store.commit("setPageTitle", "Editing Table");
    }
    if (!this.toEditTable) {
      let updateListTables = (data) => {
        this.$store.commit("availableTables", data);
      };
      jQuery.ajax({
        type: "GET",
        url: ajaxurl + "?action=sprdsh_list_tables",
        success: updateListTables,
      });
    }
  },
};
</script>