<template>
<div>
    <div class="mb-4 bg-white rounded-lg p-6">
        <label class="block uppercase tracking-wide text-xs font-bold">Name</label>
        <input v-model="tableTitle" type="text" class="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0" name="name" placeholder="Enter the Table Name" required="">
    </div>
    <table-editor v-if="grid.data.length" />
</div>
</template>

<script>
import tableEditor from '../components/tableEditor.vue';
const defautlSheetData = ({title, col, row}) => {
    let colsArray = new Array()
    let rowsArray = new Array()
    for (let index = 0; index < parseInt(col); index++) {
        colsArray.push("")
    }
    for (let index = 0; index < parseInt(row); index++) {
        rowsArray[index] = colsArray;
    }
    return {
    "id": null,
    "grid": {
        "data": JSON.parse(JSON.stringify(rowsArray))
    },
    "title": title
}}
export default {
    name: 'AddFromScratch',
    data() {
        return {
            loaded: false
        }
    },
    components: {
		tableEditor
  	},
    computed: {
        grid: {
			get: function () {
				return this.$store.state.grid;
			},
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
        this.$store.commit('updateGrid', defautlSheetData(this.$route.query).grid.data );
        this.$store.commit('setTitle', defautlSheetData(this.$route.query).title );
    },
}
</script>