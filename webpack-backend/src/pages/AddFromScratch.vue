<template>
	<div>
		<div class="mb-4 bg-white rounded-lg p-6">
			<label class="block uppercase tracking-wide text-xs font-bold"
				>Name</label
			>
			<div class="flex">
				<input
					v-model="tableTitle"
					type="text"
					class="block w-full focus:outline-0 bg-white py-3 px-6 mr-2 mb-2 sm:mb-0"
					name="name"
					placeholder="Enter the Table Name"
					required=""
				/>
				<div v-if="!isSaving" style="display: contents">
					<button
						v-if="!['/settings', '/edit', '/'].some((e) => e == $route.path)"
						@click="handleSave"
						class="rounded-lg bg-blue-500 hover:bg-blue-800 text-white py-2 px-4"
					>
						Save
					</button>
					<button
						v-if="$route.path == '/edit' && $route.query.table_id"
						@click="handleUpdate"
						class="rounded-lg bg-blue-500 hover:bg-blue-800 font-bold text-white py-2 px-4"
					>
						Update
					</button>
				</div>
				<div v-if="isSaving">
					<button
						class="rounded-lg bg-blue-500 hover:bg-blue-800 text-white py-2 px-4"
					>
						<i class="gg-spinner-alt"></i>
					</button>
				</div>
			</div>
		</div>
		<table-editor v-if="grid.data.length" />
		<settings-modal v-if="showSettings" />
	</div>
</template>

<script>
import tableEditor from '../components/tableEditor.vue';
import settingsModal from '../components/settings-modal.vue';
const defautlSheetData = ({ title, col, row }) => {
	let colsArray = new Array();
	let rowsArray = new Array();
	for (let index = 0; index < parseInt(col); index++) {
		colsArray.push('');
	}
	for (let index = 0; index < parseInt(row); index++) {
		rowsArray[index] = colsArray;
	}
	return {
		id: null,
		grid: {
			data: JSON.parse(JSON.stringify(rowsArray)),
		},
		title: title,
	};
};
export default {
	name: 'AddFromScratch',
	data() {
		return {
			loaded: false,
			isSaving: false,
		};
	},
	components: {
		tableEditor,
		settingsModal,
	},
	methods: {
		handleSave() {
			let data = {
				title: this.$store.state.tableTitle,
				cells: this.$store.state.grid.data,
				fontSettings: this.$store.state.fontSettings,
				settingsItemProps: this.$store.state.settingsItemProps,
			};
			jQuery.ajax({
				type: 'POST',
				url: ajaxurl + '?action=create_new_table_entry',
				dataType: 'json',
				data: JSON.stringify(data),
				success: (responseData) => {
					this.$router.push({
						name: 'Edit Existing',
						query: { table_id: responseData.ok },
					});
				},
			});
		},
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
				return (this.$store.state.tableTitle = newString);
			},
		},
		showSettings: (vm) => {
			return vm.$store.state.showSettings;
		},
	},
	mounted() {
		this.$store.commit(
			'updateGrid',
			defautlSheetData(this.$route.query).grid.data,
		);
		this.$store.commit('setTitle', defautlSheetData(this.$route.query).title);
	},
};
</script>
