<template>
  <div>
    <div
      v-if="toEditTable && !fullscreenStatus"
      class="mb-4 bg-white rounded-lg p-6"
    >
      <div class="flex justify-between">
        <div class="flex items-center">
          <input
            v-if="showTableNameEditingInputBox"
            v-model="tableTitle"
            type="text"
            class="block w-8/12 focus:outline-0 bg-white py-3 px-6 mr-2 mb-2 sm:mb-0"
            name="name"
            placeholder="Enter the Table Name"
            required=""
          />
          <p v-if="!showTableNameEditingInputBox" class="font-semibold">
            {{ $store.state.tableTitle }}
          </p>
          <svg
            v-if="!showTableNameEditingInputBox"
            @click="showTableNameEditingInputBox = true"
            class="ml-2 cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2.0003C16.2626 1.73766 16.5744 1.52932 16.9176 1.38718C17.2608 1.24503 17.6286 1.17188 18 1.17188C18.3714 1.17187 18.7392 1.24503 19.0824 1.38718C19.4256 1.52932 19.7374 1.73766 20 2.0003C20.2626 2.26295 20.471 2.57475 20.6131 2.91791C20.7553 3.26107 20.8284 3.62887 20.8284 4.0003C20.8284 4.37174 20.7553 4.73953 20.6131 5.08269C20.471 5.42585 20.2626 5.73766 20 6.0003L6.5 19.5003L1 21.0003L2.5 15.5003L16 2.0003Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-if="showTableNameEditingInputBox"
            @click="showTableNameEditingInputBox = false"
            class="ml-2 cursor-pointer"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
          >
            <path
              d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"
            ></path>
          </svg>
        </div>
        <div class="flex w-4/12 justify-end">
          <drop-down
            animation="fade"
            color="brand"
            :styles="styles"
          ></drop-down>
          <span class="mr-2"></span>
          <button
            class="rounded-lg font-bold py-2 px-4 whitespace-no-wrap rounded transition duration-300 border-2 border-brand"
            @click="toggleShowSettings"
            type="button"
          >
            <svg
              class="text-brand"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                fill="currentColor"
                d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
              />
            </svg>
          </button>
          <span class="mr-4" />
          <div class="border-2 border-gray-400 h-full" />
          <span class="mr-4" />
          <div v-if="!isSaving">
            <button
              v-if="!['/settings', '/edit', '/'].some((e) => e == $route.path)"
              @click="handleSave"
              class="h-full rounded-lg bg-brand text-white py-2 px-4"
            >
              Save
            </button>
            <button
              v-if="$route.path == '/edit' && $route.query.table_id"
              @click="handleUpdate"
              class="h-full rounded-lg bg-brand font-bold text-white py-2 px-4"
            >
              Update
            </button>
          </div>
          <div v-if="isSaving">
            <button class="h-full rounded-lg bg-brand text-white py-2 px-4">
              <i class="gg-spinner-alt" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!avaiableTables.length && !toEditTable && !isEmptyTableList"
      class="flex justify-center items-center"
    >
      <div
        class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
      ></div>
    </div>
    <div
      v-if="isEmptyTableList"
      class="flex justify-center items-center"
      @click="goToAppHome"
    >
      <div
        class="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700"
        role="alert"
      >
        <svg
          class="w-5 h-5 inline mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>
          <span class="font-medium"
            >You have no tables available. Click here to create a new
            table.</span
          >
        </div>
      </div>
    </div>
    <table-editor v-if="toEditTable" />
    <settings-modal v-if="showSettings" />
    <div
      v-if="!toEditTable"
      class="container container m-auto flex flex-wrap flex-col md:flex-row items-center justify-start"
    >
      <v-tailwind-modal
        v-model="showDeleteConfirmation"
        @confirm="delConfirm"
        @cancel="delCancel"
      >
        <template v-slot:title>
          Are you sure? Do you want to delete this table?
        </template>
        <p>You cannot restore the table after deletion.</p>
      </v-tailwind-modal>
      <div
        v-for="(tableName, key) in avaiableTables"
        class="w-full md:w-1/3 p-3"
        :key="key"
      >
        <div
          class="flex flex-col lg:flex-row rounded-lg overflow-hidden h-auto lg:h-32 border shadow shadow-lg"
        >
          <div
            class="bg-blue-500 bg-opacity-75 transition duration-300 rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal flex-grow-default"
          >
            <div class="text-white font-bold text-xl mb-2 leading-tight">
              {{ tableName.post_title }}
            </div>
            <ul class="flex main-nav border-b tab-buttons">
              <li class="mr-1">
                <button
                  @click="handleEditBtn(tableName.ID)"
                  class="tab-item bg-white inline-block py-2 px-4 font-semibold border-l border-t border-r rounded-t text-blue-700 active"
                >
                  Edit
                </button>
              </li>
              <li class="mr-1">
                <button
                  @click="handleDeleteBtn(tableName.ID)"
                  class="tab-item bg-white inline-block py-2 px-4 font-semibold border-l border-t border-r rounded-t text-red-700 active"
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
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.gg-spinner-alt {
  transform: scale(var(--ggs, 1));
}

.gg-spinner-alt,
.gg-spinner-alt::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
}

.gg-spinner-alt::before {
  content: '';
  position: absolute;
  border-radius: 100px;
  animation: spinneralt 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
  border: 3px solid transparent;
  border-top-color: currentColor;
}
</style>
<script>
import tableEditor from '../components/tableEditor.vue';
import settingsModal from '../components/settings-modal/index.vue';
import storeUtils from '../utils/storeUtils';
import dropDown from '../components/dropDown.vue';
import VTailwindModal from '../hoc-components/VTailwindModal.vue';
export default {
  name: 'Edit',
  components: {
    tableEditor,
    settingsModal,
    VTailwindModal,
    dropDown,
  },
  data() {
    return {
      showTableNameEditingInputBox: false,
      isEmptyTableList: false,
      isSaving: false,
      showDeleteConfirmation: false,
      deletionTarget: 0,
      styles: ['Style 1 (Active)', 'Style 2 (Premium)'],
    };
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
    fullscreenStatus: function () {
      return this.$store.state.enableFullScreenEditing;
    },
  },
  mounted() {
    if (this.toEditTable) {
      jQuery.ajax({
        type: 'GET',
        vm: this,
        url:
          ajaxurl +
          `?action=sprdsh_get_table_cells&id=${this.toEditTable}&nonce=${this.$store.state.backendConfig.nonce}`,
        success(data) {
          let { vm } = this;
          storeUtils.write(vm, data, 'postmount');
        },
      });
      this.$store.commit('setPageTitle', 'Table Editor');
      this.mountFonts();
    }
    if (!this.toEditTable) {
      let updateListTables = (data) => {
        if (data.length == 0) {
          this.isEmptyTableList = true;
        }
        this.$store.commit('availableTables', data);
      };
      jQuery.ajax({
        type: 'GET',
        url: ajaxurl + '?action=sprdsh_list_tables',
        success: updateListTables,
      });
    }
  },
  methods: {
    handleSave() {
      let data = storeUtils.read(this.$store.state);
      jQuery.ajax({
        type: 'POST',
        url:
          ajaxurl +
          '?action=create_new_table_entry' +
          '&nonce=' +
          this.$store.state.backendConfig.nonce,
        dataType: 'json',
        data: JSON.stringify(data),
        success: (responseData) => {
          this.$router.push({
            name: 'Edit Existing',
            query: { table_id: responseData.ok },
          });
        },
      });
    },
    toggleShowSettings() {
      return this.$store.commit('setSettingsModalStatus', true);
    },
    delConfirm() {
      jQuery.ajax({
        type: 'POST',
        url:
          ajaxurl +
          '?action=sprdsh_delete_table' +
          '&nonce=' +
          this.$store.state.backendConfig.nonce,
        data: {
          id: this.deletionTarget,
        },
        success: (responseData) => {
          this.showDeleteConfirmation = false;
          let clonedTables = [...this.avaiableTables];
          clonedTables.forEach((e, i) => {
            if (e.ID == this.deletionTarget) {
              delete clonedTables[i];
              this.$store.state.tableList = clonedTables.filter(Boolean);
              if (this.$store.state.tableList.length == 0) {
                this.isEmptyTableList = true;
              }
            }
          });
          this.deletionTarget = 0;
        },
      });
    },
    delCancel() {
      this.showDeleteConfirmation = false;
    },
    handleUpdate() {
      let data = storeUtils.read(this.$store.state);
      let setLoadingStatus = (status) => {
        this.isSaving = !Boolean(status.success);
      };
      jQuery.ajax({
        type: 'POST',
        url:
          ajaxurl +
          `?action=sprdsh_update_table_cells&id=${this.$store.state.editingTableId}&nonce=${this.$store.state.backendConfig.nonce}`,
        dataType: 'json',
        data: JSON.stringify(data),
        beforeSend: setLoadingStatus,
        success: setLoadingStatus,
      });
    },
    goToAppHome() {
      this.$router.push({ name: 'Create A new Table' });
    },
    handleEditBtn(tableId) {
      jQuery.ajax({
        type: 'GET',
        url:
          ajaxurl +
          `?action=sprdsh_get_table_cells&id=${tableId}&nonce=${this.$store.state.backendConfig.nonce}`,
        vm: this,
        success(data) {
          let { vm } = this;
          storeUtils.write(vm, data, 'btnclick');
        },
      });
    },
    mountFonts() {
      var myobj = document.getElementById('gfonts');
      if (myobj) {
        myobj.remove();
      }

      var head = document.getElementsByTagName('head')[0];
      var link = document.createElement('link');
      link.id = 'gfonts';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href =
        'https://fonts.googleapis.com/css2?family=Montserrat&display=swap';
      link.media = 'all';
      head.appendChild(link);
    },
    handleDeleteBtn(id) {
      // this.$modal.show('example');
      this.showDeleteConfirmation = true;
      this.deletionTarget = id;
    },
  },
};
</script>
