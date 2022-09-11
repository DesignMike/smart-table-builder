const storeUtils = {
	read: (state) => {
		return {
			title: state.tableTitle,
			cells: state.grid.data,
			fontSettings: state.fontSettings,
			tableBodyFontSettings: state.tableBodyFontSettings,
			settingsItemProps: state.settingsItemProps,
			fontUrls: state.fontUrls,
			fontString: state.fontString,
			tableBodyFontString: state.tableBodyFontString,
		};
	},
	write: (vm, data, type) => {
		vm.$store.commit('updateGrid', data.grid.data);
		vm.$store.commit('setTitle', data.title);
		vm.$store.commit('setEditingTableId', data.id);
		data.settingsItemProps &&
			vm.$store.commit('updateSettings', data.settingsItemProps);
		data.fontSettings &&
			vm.$store.commit('updatefontSettings', data.fontSettings);
		vm.$store.commit('updateTableBodyfontSettings', data.tableBodyFontSettings);
		vm.$store.commit('updateTableBodyFontString', data.tableBodyFontString);
		vm.$store.commit('updateFontString', data.fontString);
		// if (type == 'postmount') {
		//     // data.updateFontUrls &&
		//     //     vm.$store.commit('updateFontUrls', data.fontUrls);
		// }
		if (type == 'btnclick') {
			vm.$router.push({
				name: 'Edit Existing',
				query: { table_id: data.id },
			});
		}
	},
};

export default storeUtils;
