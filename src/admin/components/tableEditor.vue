<template>
  <div>
    <div
      class="
        mb-4 bg-white rounded-lg p-6
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
      <button
            class="rounded-lg text-white font-bold py-2 px-4 whitespace-no-wrap rounded transition duration-300 bg-blue-500"
            @click="showSettings"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
          </button>
		  <drop-down animation="fade" color="blue" :styles="styles"></drop-down>
      </div>
    </div>
    <div v-if="tabNavigation == 0" class="
        mb-4 bg-white rounded-lg p-6
        flex flex-col
        space-y-4
        lg:space-y-0
        lg:flex-row
        lg:items-center
        lg:justify-between
      ">
      <div class="px-5 py-3 w-full h-full">
        <div class="mb-2 toolbar flex" style="width: fit-content">
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>
          </button>
          <columntoolbar-dropdown animation="fade" color="blue" :styles="styles"></columntoolbar-dropdown>
          <rowtoolbar-dropdown animation="fade" color="blue" :styles="styles"></rowtoolbar-dropdown>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"/></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></g></g></g></g></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"/></svg>
          </button>
          <button class="bg-gray-100 py-2 px-4">
            fontchoose
          </button>
          <button class="bg-gray-100 py-2 px-4">
            fontsize
          </button>
          <button class="bg-gray-100 py-2 px-4">
            Link
          </button>
          <button class="bg-gray-100 py-2 px-4">
            Image
          </button>
          <button class="bg-gray-100 py-2 px-4">
            shortcode
          </button>
          <button class="bg-gray-100 py-2 px-4">
            rating
          </button>
          <button class="bg-gray-100 py-2 px-4">
            clear
          </button>
        </div>
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
      class="pb-5" style="display: none">
      <!-- <table-element v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle" :showSearchBar="showSearchBar"></table-element> -->

      <div v-if="grid.data.length" class="table-container">
        <div class="excel-to-table-app"></div>
      </div>
    </div>
    <div v-if="tabNavigation == 2">
      <div
        class="mb-4 bg-white rounded-lg p-6
          flex flex-col
          space-y-4
          lg:space-y-0
          lg:flex-row
          lg:items-center
          lg:justify-between
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
.toolbar button svg {
  display: inline;
}
</style>
<script>
import tableElement from "../../common/components/tableElement.vue";
import indexedDBHelper from "../../admin/utils/indexedDBHelper";
import dropDown from '../components/dropDown.vue';
import columntoolbarDropdown from '../components/columntoolbarDropdown.vue';
import rowtoolbarDropdown from '../components/rowtoolbarDropdown.vue'
export default {
  data() {
    return {
      tabNavigation: 0,
      tabActiveClass:
        "rounded-lg bg-blue-500 inline-block py-2 px-4 font-semibold text-white",
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
        jQuery(".table-container").parent().show();
      }
      if (selectedTabIndex !== 1) {
        jQuery(".table-container").parent().hide();
      }
    },
    showSettings() {
      return this.$store.commit("setSettingsModalStatus", true);
    },
    handleShortcodeCopy() {
      window.navigator.clipboard.writeText(
        `[wp-table id=\"${this.editingTableId}\"]`
      );
    },
    handleRender(e) {
      // if (e.cell.columnIndex === 1 && e.cell.rowIndex > -1 && e.cell.value) {
      //   e.cell.innerHTML =
      //     '<a style="display: inline-block; color: dodgerblue;" href="https://bing.com">' +
      //     e.cell.value +
      //     "</a>";
      // }
    },
    handleGridEvent(e, v, i, c) {
      this.$refs.grid.setActiveCell(null);
    },
    setGridStyle() {
      [1, 10, 50, 100, 200, 400, 700, 1000].forEach((n) => {
        setTimeout(() => {
          if (!this.$refs.hasOwnProperty('grid')) return;
          this.$refs.grid.style.height = "100%";
          this.$refs.grid.style.width = "100%";
          this.$refs.grid.style.gridBackgroundColor = "white";
          this.$refs.grid.style.scrollBarBackgroundColor = "white";
          this.$refs.grid.style.scrollBarBorderColor = "white";
          // this.$refs.grid.style.moveOverlayBorderColor = "blue";
          this.$refs.grid.style.cellHeight = 35;
        }, n);
      });
    },
    handleRightClick(e, i, v, c) {
      // e.items.map((e,i) => e.title == 'Add/Remove columns' ? i : '').filter(ee => ee).forEach(eee => delete e.items[eee])
      let { $store: store } = this;
      for (let index = 0; index < e.items.length; index++) {
        // const element = array[index];
        delete e.items[index];
      }
      if (typeof(e.cell.boundColumnIndex) == "number" && typeof(e.cell.boundRowIndex) == "number") {
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
      }
      if (typeof(e.cell.boundColumnIndex) == "number" && typeof(e.cell.boundRowIndex) == "undefined" && e.cell.boundColumnIndex >= 0) {
        e.items.push(
          {
            title: "Delete this row",
            click: function (w, q) {
              this.deleteRow(e.cell.boundRowIndex);
              console.log(e.cell.value, e.cell.data);
            },
          }
        )
      }
    },
  },
  components: {
    tableElement,
	dropDown,
  columntoolbarDropdown,
  rowtoolbarDropdown
  },
  mounted() {
    this.setGridStyle();
  },
};
</script>