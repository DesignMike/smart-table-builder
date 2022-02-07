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
      tableHeaderBg: '#4A5568',
      tableRowsBg: '#EDF2F7',
      tableCellsBorderBg: '#FFFFFF',
      tableHeaderTextColor: '#FFFFFF',
      tableRowsTextColor: '#000000',
      addBorderToTableCells: false
    }
  },
  mutations: {
    updateGrid (state, newData) {
      state.grid.data = newData.data;
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
    updateSettingsByKey (state, args) {
      // let tmpSettings = state.settingsItemProps;
      let {key, value} = args;
      // tmpSettings[key] = 
      state.settingsItemProps[key] = value;
    },
    updateSettings (state, data) {
      state.settingsItemProps = data;
    }
  }
})
  new Vue({
    el: node,
    store: store,
    render: h => h(App)
  })
})

if (jQuery('#vue-backend-app').length) {
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
  })
  window['frontVue'] = (node) => {
    // Vue.destroy(node);
    if (window.hasOwnProperty('frontInstance')) {
      frontInstance.$destroy(node);
    }
    let tableData = JSON.parse(jQuery('#vue-backend-app').parent().data('table'));
    tableData.isBackend = true;
    if (!tableData.tableTitle) {
      tableData.tableTitle = '';
    }
    const instance = new Vue({
      el: node,
      store: new Vuex.Store({
        state:tableData,
      }),
      render: h => h(App)
    });
    window['frontInstance'] = instance;
  };
}
