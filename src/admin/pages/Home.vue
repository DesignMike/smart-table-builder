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
			<table class="tablesaw" id="table-preview" data-tablesaw-mode="columntoggle" data-tablesaw-sortable data-tablesaw-sortable-switch>
			<thead>
				<tr>
					<th scope="col" data-tablesaw-priority="persist" data-tablesaw-sortable-col rowspan="2">Movie Title</th>
					<th scope="col" data-tablesaw-priority="2" data-tablesaw-sortable-col data-tablesaw-sortable-default-col rowspan="2">Rank</th>
					<th scope="col" data-tablesaw-priority="4" colspan="3">Misc</th>
				</tr>
				<tr>
					<th scope="col" data-tablesaw-sortable-col style="text-align: right; text-transform: uppercase;">Year</th>
					<th scope="col" data-tablesaw-sortable-col><abbr title="Rotten Tomato Rating">Rating</abbr></th>
					<th scope="col" data-tablesaw-sortable-col>Gross</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/Avatar_(2009_film)">Avatar</a></td>
					<td>1</td>
					<td style="text-align: right">2009</td>
					<td>83%</td>
					<td>$2.7B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/Titanic_(1997_film)">Titanic</a></td>
					<td>2</td>
					<td style="text-align: right">1997-12-24</td>
					<td>88%</td>
					<td>$2.1B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/The_Avengers_(2012_film)">The Avengers</a></td>
					<td>3</td>
					<td style="text-align: right">2012</td>
					<td>2%</td>
					<td>$1.5B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2">Harry Potter and the Deathly Hallows—Part 2</a></td>
					<td>4</td>
					<td style="text-align: right">2011</td>
					<td>96%</td>
					<td>$1.3B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/Frozen_(2013_film)">Frozen</a></td>
					<td>5</td>
					<td style="text-align: right">2013-01-01</td>
					<td>89%</td>
					<td>$1.2B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/Iron_Man_3">Iron Man 3</a></td>
					<td>6</td>
					<td style="text-align: right">2013-01-02</td>
					<td>78%</td>
					<td>$1.2B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/Transformers:_Dark_of_the_Moon">Transformers: Dark of the Moon</a></td>
					<td>7</td>
					<td style="text-align: right">2011</td>
					<td>36%</td>
					<td>$1.1B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King">The Lord of the Rings: The Return of the King</a></td>
					<td>8</td>
					<td style="text-align: right">2003</td>
					<td>95%</td>
					<td>$1.1B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/Skyfall">Skyfall</a></td>
					<td>9</td>
					<td style="text-align: right">2012</td>
					<td>92%</td>
					<td>$1.1B</td>
				</tr>
				<tr>
					<td class="title"><a href="http://en.wikipedia.org/wiki/Transformers:_Age_of_Extinction">Transformers: Age of Extinction</a></td>
					<td>10</td>
					<td style="text-align: right">2014</td>
					<td>18%</td>
					<td>$1.0B</td>
				</tr>
			</tbody>
		</table>
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
				let tablePreview = document.getElementById('table-preview');
				debugger;
				Tablesaw.init(tablePreview);
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
	mounted() {
		// Tablesaw.init();
	},
};
</script>