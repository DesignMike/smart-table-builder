import Vue from 'vue'
import Vuex from 'vuex'
import gfontsHelper from 'google-fonts-helper'
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
      tableBodyFontSettings: ['Montserrat', '20px', '400'],
      settingsItemProps: {
        tableHeaderBg: '#4A5568',
        tableRowsBg: '#EDF2F7',
        tableCellsBorderBg: '#FFFFFF',
        tableHeaderTextColor: '#FFFFFF',
        tableRowsTextColor: '#000000',
        addBorderToTableCells: false
      },
      fontUrls: []
    },
    mutations: {
      updateGrid (state, newData) {
        var maxColumnLength = 0;
        if (!newData.length) return;
        newData.forEach(function(r) { if(maxColumnLength < r.length) maxColumnLength = r.length; });
        for(var i = newData[0].length; i < maxColumnLength; ++i) {
          newData[0][i] = "";
        }
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
        console.log(gfontsHelper.constructURL({ families: { [data[0]]: {wght: [400], ital: [100, 400]} } }));
      },
      updateTableBodyfontSettings (state, data) {
        state.tableBodyFontSettings = data;
        console.log(gfontsHelper.constructURL({ families: { [data[0]]: {wght: [400], ital: [100, 400]} } }));
      },
      updateFontUrls (state, data) {
        state.fontUrls = data;
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

export default store