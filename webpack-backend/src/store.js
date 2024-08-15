import Vue from 'vue';
import Vuex from 'vuex';
import vClickOutside from 'v-click-outside';
import {constructURL} from './google-fonts-helper/index.ts';
import mock from '../../default_state';
// import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);
Vue.use(vClickOutside);

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });
const store = new Vuex.Store({
	state: {
		grid: {
			data: [],
			showSearchBar: true,
		},
		editingTableId: null,
		tableTitle: '',
		tableList: [],
		pageTitle: 'WP Spreadsheet & Table Builder',
		currentStyle: 'Style 1',
		showSettings: false,
		showFeedbackModal: false,
		fontSettings: ['Montserrat', '20px', '400'],
		tableBodyFontSettings: ['Montserrat', '20px', '400'],
		fontString: '',
		tableBodyFontString: '',
		settingsItemProps: mock.settingsItemProps,
		fontUrls: [],
		backendConfig: {
			nonce: '',
		},
		enableFullScreenEditing: false,
	},
	mutations: {
		updateGrid(state, newData) {
			var maxColumnLength = 0;
			if (!newData.length) return;
			newData.forEach(function (r) {
				if (maxColumnLength < r.length) maxColumnLength = r.length;
			});
			for (var i = newData[0].length; i < maxColumnLength; ++i) {
				newData[0][i] = '';
			}
			state.grid.data = newData;
		},
		emptyGrid(state) {
			state.grid.data = [];
		},
		setFullScreenEditing(state, status) {
			state.enableFullScreenEditing = status;
		},
		setConfig(state, config) {
			state.backendConfig = config;
		},
		setSettingsModalStatus(state, status) {
			state.showSettings = status;
		},
		setFeedbackModalStatus(state, status) {
			state.showFeedbackModal = status;
		},
		setTitle(state, title) {
			state.tableTitle = title;
		},
		setEditingTableId(state, tableId) {
			state.editingTableId = tableId;
		},
		availableTables(state, data) {
			state.tableList = data;
		},
		setPageTitle(state, data) {
			state.pageTitle = data;
		},
		updatefontSettings(state, data) {
			state.fontSettings = data;
			if (new RegExp(/i/i).test(data[2])) {
				let fontWeight = data[2].replace('i', '');
				console.log(constructURL({ families: { [data[0]]: {ital: [fontWeight]} } }));
				state.fontString = constructURL({ families: { [data[0]]: {ital: [fontWeight]} } });
			}
			if (! new RegExp(/i/i).test(data[2])) {
				console.log(constructURL({ families: { [data[0]]: {wght: [data[2]]} } }));
				state.fontString = constructURL({ families: { [data[0]]: {wght: [data[2]]} } });
			}
			// console.log(constructURL({ families: { [data[0]]: {ital: [100, 400]} } }));
		},
		updateTableBodyfontSettings(state, data) {
			state.tableBodyFontSettings = data;
			if (new RegExp(/i/i).test(data[2])) {
				let fontWeight = data[2].replace('i', '');
				state.tableBodyFontString = constructURL({ families: { [data[0]]: {ital: [fontWeight]} } });
			}
			if (! new RegExp(/i/i).test(data[2])) {
				state.tableBodyFontString = constructURL({ families: { [data[0]]: {wght: [data[2]]} } });
			}
		},
		updateTableBodyFontString(state, data) {
			state.tableBodyFontString = data;
		},
		updateFontString(state, data) {
			state.fontString = data;
		},
		updateFontUrls(state, data) {
			state.fontUrls = data;
		},
		updateSettingsByKey(state, args) {
			// let tmpSettings = state.settingsItemProps;
			let { key, value } = args;
			// tmpSettings[key] =
			state.settingsItemProps[key] = value;
		},
		updateSettings(state, data) {
			state.settingsItemProps = data;
		},
	},
});

export default store;
