const dbOps = (state) => {
    return {
        title: state.tableTitle,
        cells: state.grid.data,
        fontSettings: state.fontSettings,
        tableBodyFontSettings: state.tableBodyFontSettings,
        settingsItemProps: state.settingsItemProps,
        fontUrls: state.fontUrls,
    };
}

export default dbOps;