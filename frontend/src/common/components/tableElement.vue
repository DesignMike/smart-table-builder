<template>
<div class="bg-white pb-4 px-4 rounded-md w-full">
      <div class="flex justify-between w-full pt-6 ">
        <h3 v-if="tableTitle.length" class="ml-3 text-lg">{{ tableTitle }}</h3>

      </div>
  <div class="w-full flex justify-end px-2 mt-2">
        <div class="w-full sm:w-64 inline-block relative ">
          <input v-model="searchQuery" class="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-gray-600 py-1 px-4 pl-8 rounded-lg" placeholder="Search" />

          <div class="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">

            <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
              <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
            </svg>
          </div>
        </div>
      </div>
    <div class="overflow-x-auto mt-6">

      <table class="table-auto border-collapse w-full">
        <thead>
          <tr class="rounded-lg font-medium text-gray-700 text-left">
            <th v-for="(cell, key1) in headCells[0]" :key="key1" class="px-4 py-2" v-bind:style="{ backgroundColor: settingsItemProps.tableHeaderBg, color: settingsItemProps.tableHeaderTextColor }">{{ cell }}</th>
          </tr>
        </thead>
        <tbody class="font-normal text-gray-700">
          <tr v-for="(row, key) in nonHeaderCells" :key="key" v-bind:style="styleObject" class="border-b table-row border-gray-200 py-10">
            <td v-for="(cell, key1) in row" :key="key1" class="px-4 py-4">
              <p class="text-gray-900 whitespace-no-wrap" v-bind:style="{ color: settingsItemProps.tableRowsTextColor }">
                      {{ cell }}
                    </p>
            </td>
          </tr>
        </tbody>
      </table>
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
    const color = Color(this.settingsItemProps.tableRowsBg).alpha(0.5).lighten(0.5);
    console.log(color.hsl().string());
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