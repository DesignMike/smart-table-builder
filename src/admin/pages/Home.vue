<template>
<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
		<form>
			<div class="mb-4">
				<label class="block uppercase tracking-wide text-xs font-bold">Name</label>
				<input v-model="tableTitle" type="text" class="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0" name="name" placeholder="Enter the Table Name" required="">
			</div>
			<div class="mb-4">
				<label class="block uppercase tracking-wide text-xs font-bold">Upload a Spreadsheet</label>
				<input type="file" class="w-full shadow-inner p-4 border-0" id="file" :accept="SheetJSFT" @change="_change" />
			</div>
		</form>
		<table-editor />
</div>
</template>
<style>
.main-nav li {
	margin-bottom: 0;
}
canvas-datagrid {
	overflow: scroll;
}
</style>
<script>
import XLSX from 'xlsx';
import CanvasDatagrid from 'canvas-datagrid';
import tablesaw from 'tablesaw';
import tableEditor from '../components/tableEditor.vue';
const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));
const _SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",");
export default {
	data() {
		return {
			SheetJSFT: _SheetJSFT,
		}; 
	},
	methods: {
		_suppress(evt) { evt.stopPropagation(); evt.preventDefault(); },
		_drop(evt) {
			evt.stopPropagation(); evt.preventDefault();
			const files = evt.dataTransfer.files;
			if(files && files[0]) this._file(files[0]);
		},
		_change(evt) {
			const files = evt.target.files;
			if(files && files[0]) this._file(files[0]);
		},
		_export(evt) {
			/* convert state to workbook */
			const ws = XLSX.utils.aoa_to_sheet(this.data);
			const wb = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
			/* generate file and send to client */
			XLSX.writeFile(wb, "sheetjs.xlsx");
		},
		to_json(workbook) {
			if(workbook.SSF) XLSX.SSF.load_table(workbook.SSF);
			var result = {};
			workbook.SheetNames.forEach(function(sheetName) {
			var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {raw:false, header:1});
			if(roa.length > 0) result[sheetName] = roa;
			});
			return result;
  		},
		_file(file) {
			/* Boilerplate to set up FileReader */
			const reader = new FileReader();
			reader.onload = (e) => {
				/* Parse data */
				const bstr = e.target.result;
				const wb = XLSX.read(bstr, {type:'binary'});
				/* Get first worksheet */
				const wsname = wb.SheetNames[0];

				var json = this.to_json(wb)[wsname];
				const ws = wb.Sheets[wsname];
				/* Convert array of arrays */
				const data = XLSX.utils.sheet_to_json(ws, {raw:true, cellDates:false});
				/* Update state */
				// this.grid = {data: json};
				this.$store.state.grid = {data: json};
				this.cols = make_cols(ws['!ref']);
			};
			reader.readAsBinaryString(file);
		},
	},
	computed: {
		tableTitle: {
			get: function () {
				return this.$store.state.tableTitle;
			},
			set: function (newString) {
				return this.$store.state.tableTitle = newString;
			}
		}
	},
	components: {
		tableEditor
  	},
	mounted() {
		// Tablesaw.init();
	},
};
</script>