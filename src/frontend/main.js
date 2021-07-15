import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    grid: {
      data: [
      ]
    },
    editingTableId: null,
    tableTitle: '',
    tableList: []
  },
  mutations: {
    updateGrid (state, newData) {
      state.grid = newData;
    },
    setTitle (state, title) {
      state.tableTitle = title;
    },
    setEditingTableId (state, tableId) {
      state.editingTableId = tableId;
    },
    availableTables (state, data) {
      state.tableList = data;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#excel-to-table-app',
  store: store,
  render: h => h(App)
})
