<template>
    
<div>
    <ul class="flex main-nav border-b tab-buttons">
        <li class="mr-1">
            <button data-tab-index="0" @click="handleTabSwitch" v-bind:class="[tabNavigation == 0 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Excel Sheet</button>
        </li>
        <li class="mr-1">
            <button data-tab-index="1" @click="handleTabSwitch" v-bind:class="[tabNavigation == 1 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Table</button>
        </li>
    </ul>
    <div v-if="tabNavigation == 0">
        <div  class="px-5 py-3 w-full h-full">
            <canvas-datagrid v-if="grid.data.length" @contextmenu="handleRightClick" @sortcolumn="handleGridEvent" ref="grid" :data.prop="grid.data"></canvas-datagrid>
        </div>
    </div>
    <div v-if="tabNavigation == 1">
        <div  class="px-5 py-3">
            <table-element v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle"></table-element>
        </div>
    </div>
</div>
</template>

<script>
import tableElement from '../../common/components/tableElement.vue';
export default {
    data() {
		debugger;
        return {
			tabNavigation: 0,
			tabActiveClass: 'border-l border-t border-r rounded-t text-blue-700 active',
			tabInactiveClass: 'text-blue-500 hover:text-blue-800',
        }
    },
	computed: {
		canvasHeight() {
			return window.innerHeight - 200 + 'px';
		},
		canvasWidth() {
			return window.innerWidth - 300 + 'px';
		},
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
			}
		}
	},
    methods: {
		handleTabSwitch(event) {
			let selectedTabIndex = parseInt(event.target.getAttribute('data-tab-index'));
			// this.$refs.grid
			debugger;
			if (typeof(this.$refs.grid) !== 'undefined') {
				try {
					this.$refs.grid.endEdit();	
				} catch (error) {
					// no need to handle
				}
			}
			debugger;
			this.tabNavigation = selectedTabIndex;
			if (selectedTabIndex == 1) {
				debugger;
				setTimeout(() => {
					let tablePreview = document.getElementById('table-preview');
					Tablesaw.init(tablePreview);
				}, 3000);
			};
		},
		adjustGridSize() {
			this.$refs.grid.style.height = window.innerHeight - 300 + 'px';
			this.$refs.grid.style.width = '100%';
		},
		handleGridEvent(e,v,i,c) {
			debugger;
			this.$refs.grid.setActiveCell(null);
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
		tableElement,
    },
	mounted() {
		debugger;
		setTimeout(() => {
			debugger;
		}, 3000);
	},
}
</script>