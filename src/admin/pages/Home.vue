<template>
<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
	<div class="row"><div class="col-xs-12">
		<form class="form-inline">
			<div class="form-group">
				<label for="file">Spreadsheet</label>
				<input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change" />
			</div>
		</form>
	</div></div>
  <canvas-datagrid v-if="grid.data.length" @contextmenu="handleRightClick" :data.prop="grid.data"></canvas-datagrid>
</div>
</template>

<script>
import XLSX from 'xlsx';
import CanvasDatagrid from 'canvas-datagrid';
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
			SheetJSFT: _SheetJSFT
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
		handleRightClick(e,i,v,c) {
			e.items.push({
				title: 'delete this row',
				click: function (w,q) {
						this.deleteRow();
						console.log(e.cell.value, e.cell.data);
					}
        	},
			{
				title: 'add row',
				click: function () {
					// debugger;
					// this.addRow([]);
					this.insertRow([], e.cell.boundRowIndex);
				}
			});
		}
	}
};
</script>