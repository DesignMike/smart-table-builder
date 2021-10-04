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
      currentStyle: 'Style 1'
    },
    mutations: {
      updateGrid (state, newData) {
        state.grid.data = newData;
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
      }
    }
  })

export default store