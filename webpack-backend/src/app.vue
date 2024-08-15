<template>
  <div id="vue-backend-app" class="">
    <div class="text-gray-700" style="margin-left: -20px; margin-right: -20px">
      <div class="mx-2 mt-3 antialiased">
        <div
          v-if="!fullscreenStatus"
          class="rounded-lg dark-mode:text-gray-200 dark-mode:bg-gray-800 w-full bg-white text-gray-700"
        >
          <div
            x-data="{ open: true }"
            class="mx-auto py-3 flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
          >
            <div class="flex flex-row items-center justify-between p-4">
              <a
                class="dark-mode:text-white focus:shadow-outline rounded-lg text-lg font-semibold uppercase tracking-widest text-gray-900 focus:outline-none"
                target="_blank"
                >{{ pageTitle }}</a
              >
              <button
                class="focus:shadow-outline rounded-lg focus:outline-none md:hidden"
                @click="open = !open"
              >
                <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                  <path
                    x-show="!open"
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                    style="display: none"
                  />
                  <path
                    x-show="open"
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <nav
              class="flex flex-grow flex-col pb-4 md:flex md:flex-row md:justify-end md:pb-0"
            >
              <a
                v-for="(item, index) in navItems"
                :key="index"
                @click="navigateTo(item)"
                class="cursor-pointer dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 flex flex-col items-center rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:ml-4 md:mt-0"
                target="_blank"
              >
                <span v-html="item.icon" />
                <span>{{ item.title }}</span></a
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 relative flex items-center justify-between">
      <div
        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
      >
        <!-- <h1 class="capitalize font-medium text-3xl font-sans">{{ pageTitle }}</h1> -->
      </div>
    </div>

    <router-view />
  </div>
</template>
<style>
#wpcontent,
#wpfooter {
  background-color: white;
}
.wrap.wptable {
  margin-top: 0 !important;
}
</style>
<script>
// import 'tablesaw/dist/tablesaw.css'
import storeUtils from './utils/storeUtils';
export default {
  name: 'App',
  data() {
    return {
      navItems: [
        {
          title: 'Add New Table',
          icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 5.5V19.5" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 12.5H19.5" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
          link: '/',
        },
        {
          title: 'Upload Spreadsheet',
          icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 15.5V19.5C21.5 20.0304 21.2893 20.5391 20.9142 20.9142C20.5391 21.2893 20.0304 21.5 19.5 21.5H5.5C4.96957 21.5 4.46086 21.2893 4.08579 20.9142C3.71071 20.5391 3.5 20.0304 3.5 19.5V15.5" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 8.5L12.5 3.5L7.5 8.5" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 3.5V15.5" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
          link: '/create-from-excel',
        },
        {
          title: 'Feedback',
          icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 15.5C21.5 16.0304 21.2893 16.5391 20.9142 16.9142C20.5391 17.2893 20.0304 17.5 19.5 17.5H7.5L3.5 21.5V5.5C3.5 4.96957 3.71071 4.46086 4.08579 4.08579C4.46086 3.71071 4.96957 3.5 5.5 3.5H19.5C20.0304 3.5 20.5391 3.71071 20.9142 4.08579C21.2893 4.46086 21.5 4.96957 21.5 5.5V15.5Z" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
          action: () => {
            this.$store.commit('setFeedbackModalStatus', true);
          },
        },
        {
          title: 'Support',
          icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.5C14.2091 16.5 16 14.7091 16 12.5C16 10.2909 14.2091 8.5 12 8.5C9.79086 8.5 8 10.2909 8 12.5C8 14.7091 9.79086 16.5 12 16.5Z" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.92999 5.43005L9.16999 9.67005" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.83 15.33L19.07 19.57" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.83 9.67005L19.07 5.43005" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.83 9.67001L18.36 6.14001" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.92999 19.57L9.16999 15.33" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
          action: () => {
            this.$store.commit('setFeedbackModalStatus', true);
          },
        },
      ],
    };
  },
  computed: {
    pageTitle: function () {
      return this.$store.state.pageTitle;
    },
    fullscreenStatus: function () {
      return this.$store.state.enableFullScreenEditing;
    },
  },
  mounted() {
    jQuery('#vue-backend-app')
      .parent()
      .on('doPreview', () => {
        frontVue(jQuery('.excel-to-table-app').get(0));
      });
  },
  methods: {
    handleSave() {
      let data = {
        title: this.$store.state.tableTitle,
        cells: this.$store.state.grid.data,
      };
      jQuery.ajax({
        type: 'POST',
        url:
          ajaxurl +
          '?action=sprdsh_create_new_table_entry' +
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
    navigateTo(item) {
      if (item.link) {
        this.$router.push(item.link);
      }
      if (item.action) {
        item.action();
      }
    },
    handleUpdate() {
      let data = storeUtils.read(this.$store.state);
      jQuery.ajax({
        type: 'POST',
        url:
          ajaxurl +
          `?action=sprdsh_update_table_cells&id=${this.$store.state.editingTableId}&nonce=${this.$store.state.backendConfig.nonce}`,
        dataType: 'json',
        data: JSON.stringify(data),
        success: () => {},
      });
    },
  },
};
</script>

<style></style>
