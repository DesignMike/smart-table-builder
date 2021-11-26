import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });
const store = new Vuex.Store({
    state: {
      grid: {
        data: [
        ],
        showSearchBar: true
      },
      editingTableId: null,
      tableTitle: '',
      tableList: [],
      pageTitle: "WP Spreadsheet & Table Builder",
      currentStyle: 'Style 1',
      showSettings: false,
      fontSettings: ['Montserrat', '20px', '400'],
      settingsItemProps: {
        tableHeaderBg: '#000',
        tableCellsBg: '#000',
        tableCellsBorderBg: '#000',
        addBorderToTableCells: true
      }
    },
    mutations: {
      updateGrid (state, newData) {
        state.grid.data = newData;
      },
      setSettingsModalStatus (state, status) {
        state.showSettings = status;
      },
      setTitle (state, title) {
        state.tableTitle = title;
      },
      setEditingTableId (state, tableId) {
        state.editingTableId = tableId;
      },
      availableTables (state, data) {
        state.tableList = data;
      },
      setPageTitle (state, data) {
        state.pageTitle = data;
      },
      updatefontSettings (state, data) {
        state.fontSettings = data;
      },
      updateSettings (state, data) {
        debugger;
        state;
      }
    }
  })

export default store