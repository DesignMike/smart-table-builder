<template>
  <div class="excel-to-table-app">
	  <h3>h</h3>
    <table-element v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle"></table-element>
  </div>
</template>

<script>
import tableElement from "../common/components/tableElement.vue"
export default {
  name: 'App',
  data() {
	  return {
		  tableId : this.$parent.$el.getAttribute('data-table-id')
	  }
  },
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
  },
  mounted() {
	  debugger;
	  jQuery;
  },
}
</script>

<style>

</style>
