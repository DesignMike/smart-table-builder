<template>
	<div>
		<div class="shadow-lg p-3 rounded-lg shadow-gray-500">
			<h5 v-if="isLoading" class="text-base my-2 font-semibold">
				Header Fonts is Loading
			</h5>
			<h5 v-if="!isLoading" class="text-base my-2 font-semibold">
				Header Fonts
			</h5>
			<div v-if="!isLoading" class="relative grid grid-cols-3 flex pt-0">
				<fonts-select
					:options="getFontFamilyList(this)"
					font-zone="tableHeader"
					context="fontFamily"
					@updateFont="handleFontUpdate"
				/>
				<fonts-select
					:options="getSizes(this)"
					font-zone="tableHeader"
					context="fontSize"
				/>
				<fonts-select
					:options="findFontFamilyWeights(this, 'tableHeader')"
					font-zone="tableHeader"
					:key="componentKey"
					ref="weightDropDown"
					context="fontWeight"
				/>
			</div>

			<label
				v-for="obj in Object.keys(settingsItems)"
				v-if="settingsItems[obj].group == 'Table Header'"
				:key="obj"
				v-bind:style="{ display: evaluateDeps(obj) }"
				class="block mt-2 items-center"
			>
				<toolcool-color-picker
					:key="obj"
					v-if="settingsItems[obj].type == 'color'"
					@change="handleColorChange($event, obj, settingsItemProps, $store)"
					:color="settingsItemProps[obj]"
				/>
				<span class="ml-2 font-semibold">{{ settingsItems[obj].title }}</span>
			</label>
		</div>
		<div class="shadow-lg p-3 mt-4 rounded-lg shadow-gray-500">
			<h5 v-if="isLoading" class="text-base my-2 font-semibold">
				Table Cell Fonts is Loading
			</h5>
			<h5 v-if="!isLoading" class="text-base my-2 font-semibold">
				Table Cell Fonts
			</h5>
			<div v-if="!isLoading" class="relative grid grid-cols-3 flex pt-0">
				<fonts-select
					:options="getFontFamilyList(this)"
					font-zone="tableBodyHeader"
					@updateFont="handleFontUpdate"
					context="fontFamily"
				/>
				<fonts-select
					:options="getSizes(this)"
					font-zone="tableBodyHeader"
					context="fontSize"
				/>
				<fonts-select
					:options="findFontFamilyWeights(this, 'tableBodyHeader')"
					font-zone="tableBodyHeader"
					:key="componentKey"
					context="fontWeight"
					ref="weightDropDown"
				/>
			</div>

			<label
				v-for="obj in Object.keys(settingsItems)"
				v-if="settingsItems[obj].group == 'Table Rows'"
				:key="obj"
				v-bind:style="{ display: evaluateDeps(obj) }"
				class="block mt-2 items-center"
			>
				<toolcool-color-picker
					:key="obj"
					v-if="settingsItems[obj].type == 'color'"
					@change="handleColorChange($event, obj, settingsItemProps, $store)"
					:color="settingsItemProps[obj]"
				/>
				<span class="ml-2 font-semibold">{{ settingsItems[obj].title }}</span>
			</label>
		</div>
	</div>
</template>
<script>
import FontsSelect from './FontsSelect.vue';
import 'toolcool-color-picker';

const presetColors = [
	'#3bb44a',
	'#ffffff',
	'#d9dee3',
	'#e49b9b',
	'#7eaae2',
	'#e4c438',
	'#c5f0ca',
	'#000000',
	'#633185',
	'#fb8622',
	'#e56565',
	'#3846ba',
	'#9ea5b0',
	'transparent',
];
const paletteKey = 'colorpicker.palate';
const maxPaletteColors = 14;

export default {
	components: {
		FontsSelect,
	},
	data() {
		return {
			paletteKey,
			maxPaletteColors,
			presetColors,
			color: '#BBF8DF',
			isLoading: true,
			googleFontsMetadata: [],
			componentKey: 0,
			settingsItems: {
				tableHeaderBg: {
					type: 'color',
					default: 'gray',
					title: 'Table Header background color',
					dependencies: [],
					group: 'Table Header',
				},
				tableHeaderTextColor: {
					type: 'color',
					default: '#000',
					title: 'Table Header text color',
					dependencies: [],
					group: 'Table Header',
				},
				tableRowsBg: {
					type: 'color',
					default: 'gray',
					title: 'Table rows background color',
					dependencies: [],
					group: 'Table Rows',
				},
				tableRowsTextColor: {
					type: 'color',
					default: 'gray',
					title: 'Table rows text color',
					dependencies: [],
					group: 'Table Rows',
				},
				tableCellsBorderBg: {
					type: 'color',
					default: 'gray',
					title: 'Table cell border colors',
					dependencies: ['addBorderToTableCells'],
					group: 'Table Rows',
				},
			},
			colors: [],
		};
	},
	computed: {
		settingsItemProps: {
			get: function () {
				return this.$store.state.settingsItemProps;
			},
		},
		filteredSettingsItems: {
			get: function () {
				return Object.keys(this.settingsItems).map(
					(z) => this.settingsItems[z],
				);
			},
		},
		getBool: {
			get: function () {
				return true;
			},
			set: function () {
				return false;
			},
		},
	},
	mounted() {
		const updateGoogleFontsMetaData = (data) => {
			this.googleFontsMetadata = JSON.parse(data);
			this.isLoading = false;
		};
		jQuery.ajax({
			url: wp.ajax.settings.url + '?action=sprdsh_get_gfonts_meta',
			success: updateGoogleFontsMetaData,
		});
	},
	methods: {
		handleChkbx: (evt, obj, settingsItemProps, store) => {
			// let currentSettings = this.settingsItemProps;
			let isChecked = evt.target.checked;
			store.commit('updateSettingsByKey', { key: obj, value: isChecked });
		},
		getFontFamilyList: (proxy) => {
			return proxy.googleFontsMetadata.familyMetadataList.map((e) => ({
				value: e.family,
				text: e.family,
			}));
		},
		findFontFamilyWeights($this, fontZone) {
			let family =
				this.$store.state[
					fontZone === 'tableHeader' ? 'fontSettings' : 'tableBodyFontSettings'
				][0];
			let weights = this.googleFontsMetadata.familyMetadataList
				.filter((e) => e.family == family)
				.map((e) => Object.keys(e.fonts))[0];
			return weights.map((e) => ({ text: e, value: e }));
		},
		getSizes() {
			return [...Array(80).keys()].map((e) => ({
				text: e + ' px',
				value: e + ' px',
			}));
		},
		handleFontUpdate(family) {
			this.componentKey = !this.componentKey;
		},
		handleModalClose() {
			this.$store.commit('setSettingsModalStatus', false);
			this.$parent.mountFonts();
		},
		evaluateDeps(obj) {
			let depResults = this.settingsItems[obj].dependencies.map((dep) =>
				Boolean(this.settingsItemProps[dep]),
			);
			let displayMode =
				this.settingsItems[obj].type == 'color' ? 'flex' : 'inline';
			return (depResults.length ? depResults.some((e) => e == true) : true)
				? displayMode
				: 'none';
		},
		handleColorChange: ({ detail }, obj, settingsItemProps, store) => {
			store.commit('updateSettingsByKey', { key: obj, value: detail.hex8 });
		},
	},
};
</script>
