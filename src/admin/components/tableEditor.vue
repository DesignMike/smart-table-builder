<template>
  <div>
    <div
      class="
        flex flex-col
        space-y-4
        lg:space-y-0
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <ul class="flex main-nav border-b tab-buttons">
        <li class="mr-1">
          <button
            data-tab-index="0"
            @click="handleTabSwitch"
            v-bind:class="[
              tabNavigation == 0 ? tabActiveClass : tabInactiveClass,
            ]"
            class="tab-item bg-white inline-block py-2 px-4 font-semibold"
          >
            Table Editor
          </button>
        </li>
        <li class="mr-1">
          <button
            data-tab-index="1"
            @click="handleTabSwitch"
            v-bind:class="[
              tabNavigation == 1 ? tabActiveClass : tabInactiveClass,
            ]"
            class="tab-item bg-white inline-block py-2 px-4 font-semibold"
          >
            Preview
          </button>
        </li>
        <li class="mr-1">
          <button
            data-tab-index="2"
            @click="handleTabSwitch"
            v-bind:class="[
              tabNavigation == 2 ? tabActiveClass : tabInactiveClass,
            ]"
            class="tab-item bg-white inline-block py-2 px-4 font-semibold"
          >
            Embed
          </button>
        </li>
      </ul>
      <div class="flex items-center justify-center space-x-4">
		  <drop-down animation="fade" color="blue" :styles="styles"></drop-down>
      </div>
    </div>
    <div v-if="tabNavigation == 0">
      <div class="px-5 py-3 w-full h-full">
        <canvas-datagrid
          v-if="grid.data.length"
          allowSorting="false"
          v-bind:style="{ width: canvasWidth, height: canvasHeight }"
          @contextmenu="handleRightClick"
          @sortcolumn="handleGridEvent"
          @afterrendercell="handleRender"
          ref="grid"
          :data.prop="grid.data"
          allow-sorting="0"
          columnHeaderClickBehavior="0"
        ></canvas-datagrid>
      </div>
    </div>
    <div
      class="px-5 py-3"
      v-bind:style="{ display: tabNavigation == 1 ? 'block' : 'none' }"
    >
      <!-- <table-element v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle" :showSearchBar="showSearchBar"></table-element> -->

      <div v-if="grid.data.length" class="table-container">
        <div class="excel-to-table-app"></div>
      </div>
    </div>
    <div v-if="tabNavigation == 2">
      <div
        class="
          flex flex-col
          bg-gradient-to-r
          from-blue-500
          via-purple-500
          to-purple-600
          p-4
          rounded-xl
          text-white
          w-8/12
          mx-auto
          my-auto
        "
      >
        <div>
          <p class="text-xl font-bold mt-3 mb-5">
            Insert the table to any of your posts or pages
          </p>
        </div>
        <div class="text-xl mb-2">
          <span>[wp-table id="{{ editingTableId }}"]</span>
          <span @click="handleShortcodeCopy" class="copy-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 7H7V5H13V7Z" fill="currentColor" />
              <path d="M13 11H7V9H13V11Z" fill="currentColor" />
              <path d="M7 15H13V13H7V15Z" fill="currentColor" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.copy-icon svg {
  display: inline;
}
.copy-icon {
  cursor: pointer;
}
</style>
<script>
import tableElement from "../../common/components/tableElement.vue";
import indexedDBHelper from "../../admin/utils/indexedDBHelper";
import dropDown from '../components/dropDown.vue';
export default {
  data() {
    return {
      tabNavigation: 0,
      tabActiveClass:
        "border-l border-t border-r rounded-t text-blue-700 active",
      tabInactiveClass: "text-blue-500 hover:text-blue-800",
      styles: [
        "Style 1",
        "Style 2"
      ],
      currentStyle: 'Style 1'
    };
  },
  computed: {
    canvasHeight() {
      return window.innerHeight - 500 + "px";
    },
    canvasWidth() {
      return window.innerWidth - 300 + "px";
    },
    grid: {
      get: function () {
        return this.$store.state.grid;
      },
      // setter
      set: function (newGrid) {
        debugger;
        return this.$store.commit("updateGrid", newGrid.data);
      },
    },
    tableTitle: {
      get: function () {
        return this.$store.state.tableTitle;
      },
    },
    showSearchBar: {
      get: function () {
        return this.$store.state.grid.showSearchBar || true;
      },
    },
    editingTableId: function () {
      return this.$store.state.editingTableId;
    },
  },
  methods: {
    getStateDump() {
      return JSON.stringify(this.$store.state);
    },
    async handleTabSwitch(event) {
      debugger;
      let selectedTabIndex = parseInt(
        event.target.getAttribute("data-tab-index")
      );
      if (selectedTabIndex == 0) {
        this.setGridStyle();
      }
      if (typeof this.$refs.grid !== "undefined") {
        try {
          this.$refs.grid.endEdit();
        } catch (error) {
          // no need to handle
        }
      }
      this.tabNavigation = selectedTabIndex;
      if (selectedTabIndex == 1) {
        // jQuery('#vue-backend-app').parent().trigger('doPreview')
        jQuery("#vue-backend-app")
          .parent()
          .data("table", JSON.stringify(this.$store.state));
        // await indexedDBHelper.saveCat(this.$store.state.grid)
        frontVue(jQuery(".excel-to-table-app").get(0));
        setTimeout(() => {
          debugger;
          // frontVue(jQuery('.excel-to-table-app').get(0));
          // let tablePreview = document.getElementById('table-preview');
          // Tablesaw.init(tablePreview);
        }, 3000);
      }
    },
    handleShortcodeCopy() {
      window.navigator.clipboard.writeText(
        `[wp-table id=\"${this.editingTableId}\"]`
      );
    },
    handleRender(e) {
      if (e.cell.columnIndex === 1 && e.cell.rowIndex > -1 && e.cell.value) {
        e.cell.innerHTML =
          '<a style="display: inline-block; color: dodgerblue;" href="https://bing.com">' +
          e.cell.value +
          "</a>";
      }
    },
    handleGridEvent(e, v, i, c) {
      this.$refs.grid.setActiveCell(null);
    },
    setGridStyle() {
      [1, 10, 50, 100, 200, 400, 700, 1000].forEach((n) => {
        setTimeout(() => {
          this.$refs.grid.style.height = "100%";
          this.$refs.grid.style.width = "100%";
          this.$refs.grid.style.gridBackgroundColor = "white";
          this.$refs.grid.style.cellHeight = 35;
        }, n);
      });
    },
    handleRightClick(e, i, v, c) {
      // e.items.map((e,i) => e.title == 'Add/Remove columns' ? i : '').filter(ee => ee).forEach(eee => delete e.items[eee])
      let { $store: store } = this;
      let manipulateStore = (evt) => {
        store;
        debugger;
      };
      for (let index = 0; index < e.items.length; index++) {
        // const element = array[index];
        delete e.items[index];
      }
      e.items.push(
        {
          title: "Delete this row",
          click: function (w, q) {
            this.deleteRow(e.cell.boundRowIndex);
            console.log(e.cell.value, e.cell.data);
          },
        },
        {
          title: "Add row",
          click: function () {
            this.insertRow([], e.cell.boundRowIndex);
          },
        },
        {
          title: "Duplicate row",
          click: function () {
            debugger;
            this.insertRow(e.cell.data, e.cell.boundRowIndex);
          },
        },
        {
          title: "Add column",
          click: () => {
            let newCells = store.state.grid.data.map((ee) => [
              ...ee.slice(0, e.cell.boundColumnIndex),
              "",
              ...ee.slice(e.cell.boundColumnIndex),
            ]);
            store.commit("updateGrid", newCells);
          },
        }
      );
    },
  },
  components: {
    tableElement,
	dropDown
  },
  mounted() {
    this.setGridStyle();
  },
};
</script>