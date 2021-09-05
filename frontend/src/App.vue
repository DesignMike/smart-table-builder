<template>
  <div class="excel-to-table-app" v-bind:data-table-id=[tableId] >
    <table-element v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle" :showSearchBar="showSearchBar"></table-element>
  </div>
</template>

<script>
import tableElement from "../../src/common/components/tableElement.vue"
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
		},
	showSearchBar: {
		get: function () {
			return this.$store.state.grid.showSearchBar;
		}
	}
  },
  mounted() {
	  jQuery.ajax({
			type: "GET",
			vm: this,
			url: `http://modernwp.test/wp-json/tablecells/v1/get-table-cells/${this.tableId}`,
			success(data) {
				let {vm} = this;
				vm.$store.commit('updateGrid', data.grid );
				vm.$store.commit('setTitle', data.title);
			}
		})
  },
}
</script>

<style>

</style>
