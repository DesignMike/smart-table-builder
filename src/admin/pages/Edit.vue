<template>
  <div>
    <div v-if="toEditTable" class="mb-4 bg-white rounded-lg p-6">
      <label class="block uppercase tracking-wide text-xs font-bold"
        >Name</label
      >
      <div class="flex">
        <input
          v-model="tableTitle"
          type="text"
          class="block w-full focus:outline-0 bg-white py-3 px-6 mr-2 mb-2 sm:mb-0"
          name="name"
          placeholder="Enter the Table Name"
          required=""
        />
        <div v-if="!isSaving" style="display: contents">
        <button v-if="!['/settings', '/edit', '/'].some(e => e == $route.path)" @click="handleSave" class="rounded-lg bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">Save</button>
        <button v-if="($route.path == '/edit') && $route.query.table_id" @click="handleUpdate" class="rounded-lg bg-blue-500 hover:bg-blue-800 text-white py-2 px-4">Update</button>
        </div>
        <div v-if="isSaving">
        <button class="rounded-lg bg-blue-500 hover:bg-blue-800 text-white py-2 px-4"><i class="gg-spinner-alt"></i></button>
        </div>
      </div>
    </div>
    <div v-if="!avaiableTables.length && !toEditTable && !isEmptyTableList" class="flex justify-center items-center">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
    <div v-if="isEmptyTableList" class="flex justify-center items-center" @click="goToAppHome">
        <div class="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
          <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <div>
              <span class="font-medium">You have no tables available. Click here to create a new table.</span>
          </div>
        </div>
    </div>
    <table-editor v-if="toEditTable" />
    <settings-modal v-if="showSettings" />
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
            rounded-lg
            overflow-hidden
            h-auto
            lg:h-32
            border
            shadow shadow-lg
          "
        >
          <div
            class="
              bg-blue-900 bg-opacity-75 transition duration-300
              rounded-b
              lg:rounded-b-none lg:rounded-r
              p-4
              flex flex-col
              justify-between
              leading-normal
              flex-grow-default
            "
          >
            <div class="text-white font-bold text-xl mb-2 leading-tight">
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
<style scoped>
.wrap.wptable {
  background-color: aqua;
}
 @keyframes spinneralt {
 0% { transform: rotate(0deg) }
 to { transform: rotate(359deg) }
}

.gg-spinner-alt {
 transform: scale(var(--ggs,1))
}

.gg-spinner-alt,
.gg-spinner-alt::before {
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 20px;
 height: 20px
}

.gg-spinner-alt::before {
 content: "";
 position: absolute;
 border-radius: 100px;
 animation: spinneralt 1s cubic-bezier(.6,0,.4,1) infinite;
 border: 3px solid transparent;
 border-top-color: currentColor
}
</style>
<script>
import tableEditor from "../components/tableEditor.vue";
import settingsModal from "../components/settings-modal.vue";
export default {
  name: "Edit",
  data() {
    return {
      isEmptyTableList: false,
      isSaving: false,
    };
  },
  methods: {
    sampleFunc: () => {},
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
      let setLoadingStatus = (status) => {
        this.isSaving = !Boolean(status.success)
      };
      jQuery.ajax({
        type: 'POST',
        url: ajaxurl+ `?action=sprdsh_update_table_cells&id=${this.$store.state.editingTableId}`,
        dataType: 'json',
        data: JSON.stringify(data),
        beforeSend: setLoadingStatus,
        success: setLoadingStatus
      });
    },
    goToAppHome() {
      this.$router.push({name: 'Create A new Table'});
    },
    handleEditBtn(tableId) {
      jQuery.ajax({
        type: "GET",
        url: ajaxurl + `?action=sprdsh_get_table_cells&id=${tableId}`,
        vm: this,
        success(data) {
          let { vm } = this;
          vm.$store.commit("updateGrid", data.grid.data);
          vm.$store.commit("setTitle", data.title);
          vm.$store.commit("setEditingTableId", data.id);
          vm.$router.push({
            name: "Edit Existing",
            query: { table_id: data.id },
          });
        },
      });
    },
    mountFonts() {
      var myobj = document.getElementById("gfonts");
      if(myobj) {
        myobj.remove();
      }

      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = 'gfonts';
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap';
      link.media = 'all';
      head.appendChild(link);
    }
  },
  computed: {
    toEditTable: (vm) => {
      return vm.$route.query.table_id ? vm.$route.query.table_id : null;
    },
    avaiableTables: (vm) => {
      return vm.$store.state.tableList;
    },
    showSettings: (vm) => {
      return vm.$store.state.showSettings;
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
    settingsModal
  },
  mounted() {
    if (this.toEditTable) {
      jQuery.ajax({
        type: "GET",
        vm: this,
        url: ajaxurl + `?action=sprdsh_get_table_cells&id=${this.toEditTable}`,
        success(data) {
          let { vm } = this;
          vm.$store.commit("updateGrid", data.grid.data);
          vm.$store.commit("setTitle", data.title);
          vm.$store.commit("setEditingTableId", data.id);
        },
      });
      this.$store.commit("setPageTitle", "Editing Table");
      this.mountFonts();
    }
    if (!this.toEditTable) {
      let updateListTables = (data) => {
        if (data.length == 0) {
          this.isEmptyTableList = true
        }
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