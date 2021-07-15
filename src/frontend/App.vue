<template>
  <div id="excel-to-table-app">
    <table-element v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle"></table-element>
  </div>
</template>

<script>
import tableElement from "../common/components/tableElement.vue"
export default {
  name: 'App',
  components: {
		tableElement,
  },
  computed: {
    grid: {
			get: function () {
				debugger;
				return this.$store.state.grid;
			},
			// setter
			set: function (newGrid) {
				return this.$store.commit('updateGrid', newGrid);
			}
		},
    tableTitle: {
			get: function () {
				return this.$store.state.tableTitle;
			},
			set: function (newString) {
				return this.$store.state.tableTitle = newString;
			}
		}
  }
}
</script>

<style>

</style>
