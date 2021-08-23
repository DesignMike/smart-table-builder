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
            <canvas-datagrid v-if="grid.data.length" v-bind:style="{ width: canvasWidth, height: canvasHeight }" @contextmenu="handleRightClick" @sortcolumn="handleGridEvent" ref="grid" :data.prop="grid.data"></canvas-datagrid>
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
				return this.$store.state.grid;
			},
			// setter
			set: function (newGrid) {
				debugger;
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
			if (typeof(this.$refs.grid) !== 'undefined') {
				try {
					this.$refs.grid.endEdit();	
				} catch (error) {
					// no need to handle
				}
			}
			this.tabNavigation = selectedTabIndex;
			if (selectedTabIndex == 1) {
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
			this.$refs.grid.setActiveCell(null);
		},
		handleRightClick(e,i,v,c) {
			// e.items.map((e,i) => e.title == 'Add/Remove columns' ? i : '').filter(ee => ee).forEach(eee => delete e.items[eee])
			let {$store: store} = this;
			let manipulateStore = (evt) => {
				store;
				debugger;
			}
			for (let index = 0; index < e.items.length; index++) {
				// const element = array[index];
				delete e.items[index];
			}
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
					this.insertRow({}, e.cell.boundRowIndex);
				}
			},
			{
				title: 'Add column',
				click: () => {
					let newCells = store.state.grid.data.map(ee => [...ee.slice(0, e.cell.boundColumnIndex), '', ...ee.slice(1)])
					store.commit('updateGrid', {data: newCells})
				}
			});
		}
    },
    components: {
		tableElement,
    },
	mounted() {
		setTimeout(() => {
		}, 3000);
	},
}
</script>