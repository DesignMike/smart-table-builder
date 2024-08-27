<template>
  <div>
    <div
      v-if="!fullscreenStatus"
      class="mb-4 bg-purple-200 rounded-lg p-6 flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-center"
    >
      <ul class="flex main-nav border-b tab-buttons">
        <li class="mr-1">
          <button
            data-tab-index="0"
            :class="[tabNavigation == 0 ? tabActiveClass : tabInactiveClass]"
            @click="handleTabSwitch"
            class="tab-item inline-block py-2 px-4 font-semibold"
          >
            Table Editor
          </button>
        </li>
        <li class="mr-1">
          <button
            data-tab-index="1"
            @click="handleTabSwitch"
            :class="[tabNavigation == 1 ? tabActiveClass : tabInactiveClass]"
            class="tab-item inline-block py-2 px-4 font-semibold"
          >
            Preview
          </button>
        </li>
        <li class="mr-1">
          <button
            data-tab-index="2"
            @click="handleTabSwitch"
            :class="[tabNavigation == 2 ? tabActiveClass : tabInactiveClass]"
            class="tab-item inline-block py-2 px-4 font-semibold"
          >
            Embed
          </button>
        </li>
      </ul>
    </div>
    <div
      v-if="tabNavigation == 0 && !fullscreenStatus"
      id="toolbar"
      class="mb-2 toolbar flex flex-row items-center justify-center"
    >
      <columntoolbar-dropdown animation="fade" color="blue" :styles="styles" />
      <rowtoolbar-dropdown animation="fade" color="blue" :styles="styles" />
    </div>
    <div
      v-if="tabNavigation == 0"
      :class="[fullscreenStatus ? 'maxxed' : 'minimal']"
      class="mb-4 bg-white rounded-lg p-6 flex flex-col space-y-4 lg:space-y-0 lg:flex-col"
    >
      <div class="flex">
        <div
          v-if="tabNavigation == 0 && fullscreenStatus"
          id="toolbar"
          class="mb-2 toolbar flex flex-row items-center justify-center"
        >
          <columntoolbar-dropdown
            animation="fade"
            color="blue"
            :styles="styles"
          />
          <rowtoolbar-dropdown animation="fade" color="blue" :styles="styles" />
        </div>
        <button
          v-if="!fullscreenStatus"
          class="tab-item inline-block py-2 px-4 font-semibold"
          style="margin-left: auto"
          @click="toggleFullScreenStatus(true)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
          >
            <path
              d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"
            />
          </svg>
        </button>
        <button
          v-if="fullscreenStatus"
          class="tab-item inline-block py-2 px-4 font-semibold"
          style="margin-left: auto"
          @click="toggleFullScreenStatus(false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
          >
            <path
              d="m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z"
            />
          </svg>
        </button>
      </div>
      <div class="px-5 py-3 w-full h-full">
        <canvas-datagrid
          v-if="grid.data.length"
          allowSorting="false"
          :style="{ width: canvasWidth, height: canvasHeight }"
          @contextmenu="handleRightClick"
          @sortcolumn="handleGridEvent"
          @afterrendercell="handleRender"
          @afterpaste="convertRowsToArray"
          ref="grid"
          :data.prop="grid.data"
          allow-sorting="0"
          columnHeaderClickBehavior="0"
        ></canvas-datagrid>
      </div>
    </div>
    <div
      class="pb-5"
      :style="{ display: tabNavigation == 1 ? 'block' : 'none' }"
    >
      <!-- <table-element v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle" :showSearchBar="showSearchBar"></table-element> -->

      <div
        :style="{ display: tabNavigation == 1 ? 'block' : 'none' }"
        class="table-container"
      >
        <div
          :style="{ display: tabNavigation == 1 ? 'block' : 'none' }"
          class="excel-to-table-app"
        >
          <iframe
            style="width: 100%; height: 50rem"
            :src="previewframe"
          ></iframe>
        </div>
      </div>
    </div>
    <div v-if="tabNavigation == 2">
      <div
        class="mb-4 bg-white rounded-lg p-6 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <p class="text-xl font-bold mt-3 mb-5">
            Insert the table to any of your posts or pages
          </p>
          <div v-if="editingTableId" class="text-xl mb-2">
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
            <span v-if="showCopyMessage">Copied!</span>
          </div>
          <div v-if="!editingTableId" class="text-xl mb-2">
            <span>Please save the table to get the shortcode</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import indexedDBHelper from '../../admin/utils/indexedDBHelper';
import canvasDatagrid from 'canvas-datagrid';
import dropDown from '../components/dropDown.vue';
import columntoolbarDropdown from '../components/columntoolbarDropdown.vue';
import rowtoolbarDropdown from '../components/rowtoolbarDropdown.vue';
export default {
  data() {
    return {
      showCopyMessage: false,
      tabNavigation: 0,
      tabActiveClass:
        'rounded-lg bg-brand inline-block py-2 px-4 font-semibold text-white',
      tabInactiveClass: 'text-brand hover:text-blue-800',
      currentStyle: 'Style 1',
      previewframe: '',
      styles: ['Style 1 (Active)', 'Style 2 (Premium)'],
    };
  },
  computed: {
    canvasHeight() {
      return window.innerHeight - 500 + 'px';
    },
    canvasWidth() {
      return window.innerWidth - 300 + 'px';
    },
    grid: {
      get: function () {
        return this.$store.state.grid;
      },
      // setter
      set: function (newGrid) {
        return this.$store.commit('updateGrid', newGrid.data);
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
    fullscreenStatus: function () {
      return this.$store.state.enableFullScreenEditing;
    },
  },
  methods: {
    getStateDump() {
      return JSON.stringify(this.$store.state);
    },
    async handleTabSwitch(event) {
      let selectedTabIndex = parseInt(
        event.target.getAttribute('data-tab-index'),
      );
      if (selectedTabIndex == 0) {
        this.setGridStyle(this);
      }
      if (typeof this.$refs.grid !== 'undefined') {
        try {
          this.$refs.grid.endEdit();
        } catch (error) {
          // no need to handle
        }
      }
      this.tabNavigation = selectedTabIndex;
      if (selectedTabIndex == 1) {
        let iframedPreview = this.$el.querySelector('iframe');
        let stateSnapshot = {
          ...this.$store.state.grid,
          tableTitle: this.$store.state.tableTitle,
          fonts: [
            this.$store.state.fontString,
            this.$store.state.tableBodyFontString,
          ],
          settingsItemProps: this.$store.state.settingsItemProps,
          fontConfig: [
            this.$store.state.fontSettings,
            this.$store.state.tableBodyFontSettings,
          ],
        };
        if (iframedPreview.contentWindow.hasOwnProperty('manipulateStore')) {
          iframedPreview.contentWindow.manipulateStore(
            JSON.parse(JSON.stringify(stateSnapshot)),
          );
        } else {
          console.log('empty preview iframe detected');
        }
      }
      if (selectedTabIndex !== 1) {
        // jQuery(".table-container").parent().hide();
      }
    },
    showSettings() {
      return this.$store.commit('setSettingsModalStatus', true);
    },
    toggleFullScreenStatus(status) {
      [1, 10, 50, 100, 200, 400, 700, 1000].forEach((n) => {
        setTimeout(() => {
          console.log('table resize adjustment kicked in!');
          if (!this.$refs.hasOwnProperty('grid')) return;
          this.$refs.grid.style.height = '100%';
          this.$refs.grid.style.width = '100%';
          this.$refs.grid.style.gridBackgroundColor = 'white';
          this.$refs.grid.style.scrollBarBackgroundColor = 'white';
          this.$refs.grid.style.scrollBarBorderColor = 'white';
          // this.$refs.grid.style.moveOverlayBorderColor = "blue";
          this.$refs.grid.style.cellHeight = status ? 40 : 35;
        }, n);
      });
      return this.$store.commit('setFullScreenEditing', status);
    },
    handleShortcodeCopy() {
      const shortcode = `[wp-table id="${this.editingTableId}"]`;
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(shortcode)
          .then(() => {
            this.showCopyMessage = true;
            setTimeout(() => {
              this.showCopyMessage = false;
            }, 3000);
          })
          .catch((err) => {
            console.error('Failed to copy shortcode to clipboard', err);
            // Optionally, show an error message to the user
          });
      } else {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement('textarea');
        textArea.value = shortcode;

        // Move textarea out of the viewport so it's not visible
        textArea.style.position = 'absolute';
        textArea.style.left = '-999999px';

        document.body.prepend(textArea);
        textArea.select();

        try {
          document.execCommand('copy');
          this.showCopyMessage = true;
          setTimeout(() => {
            this.showCopyMessage = false;
          }, 3000);
        } catch (error) {
          console.error(error);
        } finally {
          textArea.remove();
        }
      }
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
    convertRowsToArray(e) {
      let { $store: store } = this;
      let newCells = store.state.grid.data.map((ee) => {
        return Object.values(ee);
      });
      store.commit('updateGrid', newCells);
    },
    setGridStyle($this) {
      [1, 10, 50, 100, 200, 400, 700, 1000].forEach((n) => {
        setTimeout(() => {
          console.log('table resize adjustment kicked in!');
          if (!$this?.$refs?.grid?.style) return;
          $this.$refs.grid.style.height = '100%';
          $this.$refs.grid.style.width = '100%';
          $this.$refs.grid.style.gridBackgroundColor = 'white';
          $this.$refs.grid.style.scrollBarBackgroundColor = 'white';
          $this.$refs.grid.style.scrollBarBorderColor = 'white';
          // $this.$refs.grid.style.moveOverlayBorderColor = "blue";
          $this.$refs.grid.style.cellHeight = 35;
        }, n);
      });
    },
    handleRightClick(e, i, v, c) {
      let { $store: store } = this;
      for (let index = 0; index < e.items.length; index++) {
        // const element = array[index];
        delete e.items[index];
      }
      if (
        typeof e.cell.boundColumnIndex == 'number' &&
        typeof e.cell.boundRowIndex == 'number'
      ) {
        e.items.push(
          {
            title: 'Delete this row',
            click: function (w, q) {
              this.deleteRow(e.cell.boundRowIndex);
              console.log(e.cell.value, e.cell.data);
            },
          },
          {
            title: 'Add row',
            click: function () {
              this.insertRow([], e.cell.boundRowIndex);
            },
          },
          {
            title: 'Duplicate row',
            click: function () {
              this.insertRow(e.cell.data, e.cell.boundRowIndex);
            },
          },
          {
            title: 'Add column',
            click: () => {
              let newCells = store.state.grid.data.map((ee) => [
                ...ee.slice(0, e.cell.boundColumnIndex),
                '',
                ...ee.slice(e.cell.boundColumnIndex),
              ]);
              store.commit('updateGrid', newCells);
            },
          },
        );
      }
      if (
        typeof e.cell.boundColumnIndex == 'number' &&
        typeof e.cell.boundRowIndex == 'undefined' &&
        e.cell.boundColumnIndex >= 0
      ) {
        e.items.push({
          title: 'Delete this row',
          click: function (w, q) {
            this.deleteRow(e.cell.boundRowIndex);
            console.log(e.cell.value, e.cell.data);
          },
        });
      }
    },
  },
  components: {
    dropDown,
    columntoolbarDropdown,
    rowtoolbarDropdown,
  },
  mounted() {
    this.setGridStyle(this);
    var grid = canvasDatagrid();
    let previewframeLink = JSON.parse(
      document.querySelector('#homeurl').textContent,
    ).url;
    this.previewframe = previewframeLink + '/?df_stb_action=load_preview';
    var targetNode = document.querySelector('#toolbar');
    // jQuery(targetNode).after(grid);
    grid.data = [];
    grid.style.height = '100%';
    grid.style.width = '100%';
    grid.style.gridBackgroundColor = 'white';
    grid.style.scrollBarBackgroundColor = 'white';
    grid.style.scrollBarBorderColor = 'white';
    grid.style.cellHeight = 35;
  },
};
</script>
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
.maxxed {
  height: 90vh;
}
</style>
