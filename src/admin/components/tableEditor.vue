<template>
    
<div>
    <ul class="flex main-nav border-b tab-buttons">
        <li class="mr-1">
            <button data-tab-index="0" @click="handleTabSwitch" v-bind:class="[tabNavigation == 0 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Table Editor</button>
        </li>
        <li class="mr-1">
            <button data-tab-index="1" @click="handleTabSwitch" v-bind:class="[tabNavigation == 1 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Preview</button>
        </li>
        <li class="mr-1">
            <button data-tab-index="2" @click="handleTabSwitch" v-bind:class="[tabNavigation == 2 ? tabActiveClass : tabInactiveClass]" class="tab-item bg-white inline-block py-2 px-4 font-semibold">Embed</button>
        </li>
    </ul>
    <div v-if="tabNavigation == 0">
        <div  class="px-5 py-3 w-full h-full">
            <canvas-datagrid v-if="grid.data.length" v-bind:style="{ width: canvasWidth, height: canvasHeight }" @contextmenu="handleRightClick" @sortcolumn="handleGridEvent" @afterrendercell="handleRender" ref="grid" :data.prop="grid.data"></canvas-datagrid>
        </div>
    </div>
	<div  class="px-5 py-3" v-bind:style="{display: tabNavigation == 1 ? 'block' : 'none'}">
		<!-- <table-element v-if="grid.data.length" :cellItems="grid.data" :tableTitle="tableTitle" :showSearchBar="showSearchBar"></table-element> -->
		<div v-if="grid.data.length" class="table-container">
			<div class="excel-to-table-app">

			</div>
		</div>
	</div>
    <div v-if="tabNavigation == 2">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis aspernatur iure esse non autem excepturi officia quo, dolore architecto quod sint vitae quaerat nisi maxime exercitationem tenetur dolorum recusandae iste distinctio. Tempora facere veritatis, doloremque ipsam consectetur aliquid adipisci fugiat quidem, ducimus illo architecto dolorum obcaecati sequi nesciunt vitae et natus animi fuga ipsum impedit laudantium! Magni placeat odio, reiciendis tenetur repudiandae ut aspernatur voluptatum eaque saepe est consequuntur quaerat fugiat ad omnis nisi laborum sint officia! Iusto saepe hic optio nulla maiores molestias non, aut dignissimos consequatur et ut eaque fugiat enim accusantium laudantium odio possimus corporis ea.</p>
    </div>
</div>
</template>

<script>
import tableElement from '../../common/components/tableElement.vue';
import indexedDBHelper from '../../admin/utils/indexedDBHelper';
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
				return this.$store.commit('updateGrid', newGrid.data);
			}
		},
		tableTitle: {
			get: function () {
				return this.$store.state.tableTitle;
			}
		},
		showSearchBar: {
			get: function() {
				return this.$store.state.grid.showSearchBar || true
			}
		}
	},
    methods: {
		getStateDump() {
			return JSON.stringify(this.$store.state);
		},
		async handleTabSwitch(event) {
			debugger
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
				// jQuery('#vue-backend-app').parent().trigger('doPreview')
				jQuery('#vue-backend-app').parent().data('table', JSON.stringify(this.$store.state));
				// await indexedDBHelper.saveCat(this.$store.state.grid)
				frontVue(jQuery('.excel-to-table-app').get(0))
				setTimeout(() => {
					debugger;
					// frontVue(jQuery('.excel-to-table-app').get(0));
					// let tablePreview = document.getElementById('table-preview');
					// Tablesaw.init(tablePreview);
				}, 3000);
			};
		},
		adjustGridSize() {
			this.$refs.grid.style.height = window.innerHeight - 300 + 'px';
			this.$refs.grid.style.width = '100%';
		},
		handleRender(e) {
			if (e.cell.columnIndex === 1 && e.cell.rowIndex > -1) {
				e.cell.innerHTML = '<div style="display: inline-block; color: dodgerblue;">'
				+ e.cell.value
				+ '</div>'
    		}
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
					this.insertRow([], e.cell.boundRowIndex);
				}
			},
			{
				title: 'Duplicate row',
				click: function () {
					debugger
					this.insertRow(e.cell.data, e.cell.boundRowIndex);
				}
			},
			{
				title: 'Add column',
				click: () => {
					let newCells = store.state.grid.data.map(ee => [...ee.slice(0, e.cell.boundColumnIndex), '', ...ee.slice(e.cell.boundColumnIndex)])
					store.commit('updateGrid', newCells)
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