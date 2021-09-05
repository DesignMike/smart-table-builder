import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import '../../assets/css/tail.css'
/* eslint-disable no-new */
let shortcodes = [...document.getElementsByClassName('excel-to-table-app')];
shortcodes.forEach(node => {
Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    grid: {
      data: [
      ],
      tableTitle: '',
      showSearchBar: true
    },
    editingTableId: null,
    tableList: []
  },
  mutations: {
    updateGrid (state, newData) {
      state.grid.data = newData.data;
    },
    setTitle (state, title) {
      state.grid.tableTitle = title;
    },
    setEditingTableId (state, tableId) {
      state.editingTableId = tableId;
    },
    availableTables (state, data) {
      state.tableList = data;
    }
  }
})
  new Vue({
    el: node,
    store: store,
    render: h => h(App)
  })
})
