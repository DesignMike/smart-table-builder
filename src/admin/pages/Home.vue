<template>
<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
		<form class="form-inline">
			<div class="form-group">
				<label for="file">Spreadsheet</label>
				<input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change" />
			</div>
		</form>
		<ul class="flex main-nav border-b tab-buttons">
			<li class="mr-1">
				<button data-tab-index="0" @click="handleTabSwitch" v-bind:class="[tabNavigation == 0 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Excel Sheet</button>
			</li>
			<li class="mr-1">
				<button data-tab-index="1" @click="handleTabSwitch" v-bind:class="[tabNavigation == 1 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Table</button>
			</li>
		</ul>
		<div v-if="tabNavigation == 0">
			<canvas-datagrid v-if="grid.data.length" @contextmenu="handleRightClick" :data.prop="grid.data"></canvas-datagrid>
		</div>
		<div v-if="tabNavigation == 1">
			<div  class="px-5 py-3">
				<table-preview v-if="grid.data.length" :cellItems="grid.data"></table-preview>
			</div>
		</div>
</div>
</template>
<style scoped>
.main-nav li {
	margin-bottom: 0;
}
</style>
<script>
import XLSX from 'xlsx';
import tablePreview from '../components/tablePreview.vue';
import CanvasDatagrid from 'canvas-datagrid';
import tablesaw from 'tablesaw';
const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));
const _SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",");
export default {
	data() {
		return {
			grid: {
				data: [
				]
			},
			SheetJSFT: _SheetJSFT,
			tabNavigation: 0,
			tabActiveClass: 'border-l border-t border-r rounded-t text-blue-700 active',
			tabInactiveClass: 'text-blue-500 hover:text-blue-800'
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
				debugger;
        /* Resize canvas */
        let canvas = document.getElementsByTagName('canvas-datagrid');
        if(canvas.length && window) {
          ;(() => {canvas[0].style.width = (window.innerWidth - 200) + "px"; canvas[0].style.height = (window.innerHeight - 200) + "px";})();
        };
				/* Update state */
				this.grid = {data: json};
				this.cols = make_cols(ws['!ref']);
			};
			reader.readAsBinaryString(file);
		},
		handleTabSwitch(event) {
			let selectedTabIndex = parseInt(event.target.getAttribute('data-tab-index'));
			this.tabNavigation = selectedTabIndex;
			if (selectedTabIndex == 1) {
				debugger;
				setTimeout(() => {
					let tablePreview = document.getElementById('table-preview');
					Tablesaw.init(tablePreview);
				}, 3000);
			};
		},
		handleRightClick(e,i,v,c) {
			e.items.push({
				title: 'Delete this row',
				click: function (w,q) {
						this.deleteRow(e.cell.boundRowIndex);
						console.log(e.cell.value, e.cell.data);
					}
        	},
			{
				title: 'Add row',
				click: function () {
					// debugger;
					// this.addRow([]);
					this.insertRow([], e.cell.boundRowIndex);
				}
			});
		}
	},
	components: {
		tablePreview
  	},
	mounted() {
		// Tablesaw.init();
	},
};
</script>