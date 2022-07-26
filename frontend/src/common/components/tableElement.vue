<template>
<div class="bg-white pb-4 px-4 rounded-md w-full">
      <div class="flex justify-between w-full pt-6 ">
        <iframe style="width: 100%; height: 50rem;" src="http://myplugindev.test/?wut_action=load_preview"></iframe>
    </div>
    </div>
</template>


<style scoped>
.table-row {
  background-color: var(--bg-color);
}
.table-row:hover {
  background-color: var(--color-hover);
}
</style>
<script>
import Color from '../../color.cjs.js';
export default{
  props:{'cellItems': {dafault: [], type: Array}, 'tableTitle': {default: "my tite", type: String}, 'showSearchBar': false, 'fontSettings': {default: ['Montserrat', '20px', '400'], type: Array}, 'settingsItemProps': {
    tableHeaderBg: '#4A5568',
    tableRowsBg: '#EDF2F7',
    tableCellsBorderBg: '#FFFFF',
    tableHeaderTextColor: '#000000',
    addBorderToTableCells: false
  }, type: Object},
  mounted() {
    debugger;
    const color = Color(this.settingsItemProps.tableRowsBg).alpha(0.5).lighten(0.5);
    let iframedPreview = this.$el.querySelector('iframe');
    let stateSnapshot = {...this.$store.state.grid, tableTitle: this.$store.state.tableTitle};
    iframedPreview.onload = function() {
      iframedPreview.contentWindow.manipulateStore(JSON.parse(JSON.stringify(stateSnapshot)));
    }
    // debugger;
    // console.log(color.hsl().string());
    // console.log({...this.$store.state.grid})
  },
  data() {
    return {
      searchQuery : '',
      nonHeaderCells: this.cellItems.filter((e,i) => i !== 0),
      headCells: this.cellItems.filter((e,i) => i == 0)
    }
  },
  watch: {
    searchQuery: 'handleSearchQuery',
  },
  methods: {
    handleSearchQuery(val, oldVal) {

      this.nonHeaderCells = this.cellItems.filter((e,i) => i !== 0).filter(ee => ee.some(eee => {
        if (Boolean(eee) == false) {
          return false
        }
        return Boolean(eee.toUpperCase().startsWith(val.toUpperCase()))
      }))
    }
  },
  computed: {
    styleObject: function() {
      let color = Color(this.settingsItemProps.tableRowsBg).alpha(0.5).darken(0.5);
      color = color.isDark() ? Color(this.settingsItemProps.tableRowsBg).alpha(0.5).darken(0.5) : Color(this.settingsItemProps.tableRowsBg).alpha(0.5).lighten(0.5);
      return {
        '--bg-color': this.settingsItemProps.tableRowsBg,
        '--color-hover': color
      }
    }
  }
}
</script>