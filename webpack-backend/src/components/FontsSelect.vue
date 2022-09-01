<template>
	<div class="ui vertical segment">
		<div class="flexbox">
			<div class="flex-content">
				<h3 class="font-semibold">{{ title }}</h3>
				<div>
					<basic-select
						:options="options1"
						:selected-option="item"
						placeholder="select item"
						@select="onSelect"
					>
					</basic-select>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { BasicSelect } from 'vue-search-select';
export default {
	data() {
		return {
			options1: this.options,
		};
	},
	methods: {
		onSelect(item) {
			let temp =
				this.$store.state[
					this.fontZone == 'tableHeader'
						? 'fontSettings'
						: 'tableBodyFontSettings'
				];
			temp[this.getSettingsIndex()] = item.value;
			if (this.context == 'fontFamily') {
				temp[2] = '400';
			}
			this.$store.commit(
				this.fontZone == 'tableHeader'
					? 'updatefontSettings'
					: 'updateTableBodyfontSettings',
				temp,
			);
			if (this.getSettingsIndex() == 0) {
				this.$emit('updateFont', this);
			}
			debugger;
			this.selectOption = { ...item };
		},
		getSettingsIndex() {
			let settingsIndex = '';
			switch (this.context) {
				case 'fontFamily':
					settingsIndex = 0;
					break;
				case 'fontSize':
					settingsIndex = 1;
					break;
				case 'fontWeight':
					settingsIndex = 2;
					break;
			}
			return settingsIndex;
		},
		reset() {
			this.item = {};
		},
		selectOption() {
			// select option from parent component
			this.item = this.options[0];
		},
	},
	computed: {
		item: {
			get: function () {
				return {
					text: this.$store.state[
						this.fontZone == 'tableHeader'
							? 'fontSettings'
							: 'tableBodyFontSettings'
					][this.getSettingsIndex()],
					value:
						this.$store.state[
							this.fontZone == 'tableHeader'
								? 'fontSettings'
								: 'tableBodyFontSettings'
						][this.getSettingsIndex()],
				};
			},
			set: function (data) {
				return (this.$store.state[
					this.fontZone == 'tableHeader'
						? 'fontSettings'
						: 'tableBodyFontSettings'
				][this.getSettingsIndex()] = data.value);
			},
		},
		title() {
			let title = '';
			switch (this.getSettingsIndex()) {
				case 0:
					title = 'Choose A Font';
					break;
				case 1:
					title = 'Choose A Size';
					break;
				case 2:
					title = 'Choose A Weight';
					break;
			}
			return title;
		},
	},
	components: {
		BasicSelect,
	},
	props: {
		options: Array,
		context: String,
		fontZone: String,
	},
};
</script>
