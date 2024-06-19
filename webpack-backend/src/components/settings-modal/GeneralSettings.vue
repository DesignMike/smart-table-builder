<template>
	<div>
		<label
			v-for="obj in Object.keys(settingsItems)"
			:key="obj"
			v-bind:style="{ display: evaluateDeps(obj) }"
			class="block mt-2 items-center"
		>
			<input
				type="checkbox"
				class="form-checkbox"
				v-if="settingsItems[obj].type == 'boolean'"
				:checked="settingsItemProps[obj]"
				@change="handleChkbx($event, obj, settingsItemProps, $store)"
			/>
			<span class="ml-2 font-semibold">{{ settingsItems[obj].title }}</span>
		</label>
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
				addBorderToTableCells: {
					type: 'boolean',
					default: false,
					title: 'Add border to table cells',
					dependencies: [],
				},
				showSearchBar: {
					type: 'boolean',
					default: false,
					title: 'Show SearchBar',
					dependencies: [],
				},
				showTitle: {
					type: 'boolean',
					default: true,
					title: 'Show Table Title',
					dependencies: [],
				},
				tableCellPadding: {
					type: 'range',
					default: '2',
					title: 'Table Cell Padding',
					dependencies: [],
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
		findFontFamilyWeights($this) {
			let family = this.$store.state.fontSettings[0];
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
				this.settingsItems[obj].type == 'color' ? 'flex' : 'block';
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
