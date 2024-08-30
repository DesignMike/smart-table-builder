<template>
	<div class="modal-container">
		<div
			class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
			id="modal-example-small"
		>
			<!--content-->
			<div class="mx-4 w-full rounded-xl bg-gray-100 md:w-1/2 lg:w-1/3">
				<!--MODAL HEADER-->
				<div class="items center flex justify-between border-b border-gray-200">
					<div class="flex items-center justify-center">
						<div class="bg-white">
							<nav class="flex flex-col sm:flex-row">
								<button
									@click="tabbedPage = 'general-settings'"
									class="block px-6 py-4 hover:text-blue-500 focus:outline-none"
									v-bind:class="{
										'bg-blue-500 text-white': tabbedPage === 'general-settings',
									}"
								>
									General</button
								><button
									@click="tabbedPage = 'font-settings'"
									class="block px-6 py-4 hover:text-blue-500 focus:outline-none"
									v-bind:class="{
										'bg-blue-500 text-white': tabbedPage === 'font-settings',
									}"
								>
									Font Settings
								</button>
							</nav>
						</div>
					</div>
					<div
						class="my-2 mx-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 font-sans text-gray-500 hover:bg-gray-500 hover:text-gray-300"
						@click="handleModalClose()"
					>
						x
					</div>
				</div>

				<!--MODAL BODY-->
				<div class="my-4 px-4">
					<general-settings v-if="tabbedPage === 'general-settings'" />
					<font-settings v-if="tabbedPage === 'font-settings'" />
				</div>
			</div>
		</div>
		<div
			class="opacity-25 fixed inset-0 z-40 bg-black"
			id="modal-example-small-backdrop"
		></div>
	</div>
</template>

<script>
import FontsSelect from './FontsSelect.vue';
import GeneralSettings from './GeneralSettings.vue';
import FontSettings from './FontSettings.vue';
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
		GeneralSettings,
		FontSettings,
	},
	data() {
		return {
			paletteKey,
			maxPaletteColors,
			presetColors,
			tabbedPage: 'general-settings',
			color: '#BBF8DF',
			isLoading: true,
			googleFontsMetadata: [],
			componentKey: 0,
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
		handleModalClose() {
			this.$store.commit('setSettingsModalStatus', false);
			this.$parent.mountFonts();
		},
	},
};
</script>
