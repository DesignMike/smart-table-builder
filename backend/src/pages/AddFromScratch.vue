<template>
  <div>
    <div class="mb-4 bg-gray-100 rounded-lg p-6">
      <label class="block uppercase tracking-wide text-xs font-bold"
        >Name</label
      >
      <div class="flex justify-between">
        <input
          v-model="tableTitle"
          type="text"
          class="block w-full focus:outline-0 bg-white py-3 px-6 mr-2 mb-2 sm:mb-0"
          name="name"
          placeholder="Enter the Table Name"
          required=""
        />
        <div v-if="!isSaving" style="display: contents">
          <button
            v-if="!['/settings', '/edit', '/'].some((e) => e == $route.path)"
            @click="handleSave"
            class="rounded-lg bg-blue-500 hover:bg-blue-800 text-white py-2 px-4"
          >
            Save
          </button>
          <button
            v-if="$route.path == '/edit' && $route.query.table_id"
            @click="handleUpdate"
            class="rounded-lg bg-blue-500 hover:bg-blue-800 font-bold text-white py-2 px-4"
          >
            Update
          </button>
          <div v-if="isSaving">
            <button
              class="rounded-lg bg-blue-500 hover:bg-blue-800 text-white py-2 px-4"
            >
              <i class="gg-spinner-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <table-editor v-if="grid.data.length" />
    <settings-modal v-if="showSettings" />
    <feedback-modal v-if="showFeedback" />
  </div>
</template>

<script>
import tableEditor from '../components/tableEditor.vue';
import settingsModal from '../components/settings-modal/index.vue';
import feedbackModal from '../components/FeedbackModal.vue';
import storeUtils from '../utils/storeUtils';
import defaultState from '../../../default_state';
const defautlSheetData = ({ title, col, row }) => {
  let colsArray = new Array();
  let rowsArray = new Array();
  for (let index = 0; index < parseInt(col); index++) {
    colsArray.push('');
  }
  for (let index = 0; index < parseInt(row); index++) {
    rowsArray[index] = colsArray;
  }
  return {
    id: null,
    grid: {
      data: JSON.parse(JSON.stringify(rowsArray)),
    },
    title: title,
  };
};
export default {
  name: 'AddFromScratch',
  data() {
    return {
      loaded: false,
      isSaving: false,
    };
  },
  components: {
    tableEditor,
    settingsModal,
    feedbackModal,
  },
  methods: {
    handleSave() {
      let data = storeUtils.read(this.$store.state);
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
  },
  computed: {
    grid: {
      get: function () {
        return this.$store.state.grid;
      },
    },
    tableTitle: {
      get: function () {
        return this.$store.state.tableTitle;
      },
      set: function (newString) {
        return (this.$store.state.tableTitle = newString);
      },
    },
    showSettings: (vm) => {
      return vm.$store.state.showSettings;
    },
    showFeedback: (vm) => {
      return vm.$store.state.showFeedbackModal;
    },
  },
  mounted() {
    this.$store.commit(
      'updateGrid',
      defautlSheetData(this.$route.query).grid.data,
    );
    this.$store.commit('setTitle', defautlSheetData(this.$route.query).title);
    this.$store.commit('updateSettings', defaultState.settingsItemProps);
    this.$store.commit('updatefontSettings', ['Armata', '20px', '400']);
    this.$store.commit('updateTableBodyfontSettings', [
      'Montserrat',
      '12 px',
      '400',
    ]);
    this.$store.commit(
      'updateTableBodyFontString',
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@400',
    );
    this.$store.commit(
      'updateFontString',
      'https://fonts.googleapis.com/css2?family=Armata:wght@400',
    );
    // this.$store.commit('updateFontUrls', [] );
  },
};
</script>
