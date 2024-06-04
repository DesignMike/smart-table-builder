<template>
	<div
		class="w-3/6 mx-auto px-4 py-8 justify-center rounded-sm bg-white border-t-4 border-brand"
	>
		<div v-if="defineCells" class="mx-16">
			<div class="py-3">
				<label
					for="title"
					class="font-bold text-sm text-gray-900 mb-2 pr-1 block"
					>Table Title</label
				>
				<input
					v-model="title"
					type="text"
					id="title"
					placeholder="Table Title"
					class="px-3 py-3 placeholder-gray-400 text-gray-900 mb-2 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
				/>
			</div>
			<div class="py-3 flex justify-between">
				<div class="flex-col w-5/12">
					<label
						for="columns"
						class="font-bold text-sm text-gray-900 mb-2 pr-1 block"
						>Columns</label
					>
					<input
						v-model="columns"
						type="number"
						id="columns"
						placeholder="Columns"
						class="w-full text-center px-3 py-3 placeholder-gray-400 text-gray-900 mb-2 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
					/>
				</div>
				<div class="flex-col w-2/12" />
				<div class="flex-col w-5/12">
					<label
						for="rows"
						class="font-bold text-sm text-gray-900 mb-2 pr-1 block"
						>Rows</label
					>
					<input
						id="rows"
						v-model="rows"
						type="number"
						placeholder="Rows"
						class="w-full text-center px-3 py-3 placeholder-gray-400 text-gray-900 mb-2 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
					/>
				</div>
			</div>
			<div class="py-3 flex justify-between">
				<button
					class="align-middle rounded select-none bg-gray-200 font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-md border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
					type="button"
					@click="setDefineCells"
				>
					Cancel
				</button>
				<button
					v-if="requiredFields"
					class="align-middle rounded select-none bg-brand font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-md border border-gray-900 text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
					type="button"
					@click="createTable"
				>
					Create
				</button>
			</div>
		</div>
		<div v-if="!defineCells">
			<div class="text-3xl font-bold text-center mb-8">Welcome!</div>
			<div class="text-xl text-center mb-4">Let's create a new table</div>
			<div class="flex justify-center">
				<div class="grid gap-8 mt-8 md:grid-cols-2">
					<div
						@click="setDefineCells"
						class="cursor-pointer p-4 transition-colors duration-200 bg-white border-2 border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"
					>
						<div class="flex items-center gap-x-3">
							<svg
								class="object-cover w-12 h-12"
								width="80"
								height="80"
								viewBox="0 0 80 80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="80" height="80" rx="10" fill="#EDE9FE" />
								<path
									d="M40.5 29.4612V50.3527"
									stroke="#1F2937"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M30.2917 39.907H50.7083"
									stroke="#1F2937"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<div class="flex-1">
								<div class="flex items-center justify-between">
									<h2
										class="font-semibold tracking-wide text-gray-800 dark:text-white"
									>
										Create a New Table
									</h2>
								</div>
								<p
									class="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400"
								>
									Create a simple table from scratch
								</p>
							</div>
						</div>
					</div>
					<div
						class="cursor-pointer p-4 transition-colors duration-200 bg-white border-2 border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"
					>
						<div class="flex items-center gap-x-3">
							<svg
								class="object-cover w-12 h-12"
								width="80"
								height="80"
								viewBox="0 0 80 80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="80" height="80" rx="10" fill="#DCF7F1" />
								<path
									d="M53.625 44.875V50.7083C53.625 51.4819 53.3177 52.2237 52.7707 52.7707C52.2237 53.3177 51.4819 53.625 50.7083 53.625H30.2917C29.5181 53.625 28.7763 53.3177 28.2293 52.7707C27.6823 52.2237 27.375 51.4819 27.375 50.7083V44.875"
									stroke="#1F2937"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M47.7917 34.6667L40.5 27.375L33.2083 34.6667"
									stroke="#1F2937"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M40.5 27.375V44.875"
									stroke="#1F2937"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<div class="flex-1">
								<div class="flex items-center justify-between">
									<h2
										class="font-semibold tracking-wide text-gray-800 dark:text-white"
									>
										Upload Spreadsheet
									</h2>
								</div>
								<p
									class="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400"
								>
									Importing data from a data source
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			defineCells: false,
			rows: 3,
			columns: 3,
			title: '',
		};
	},
	computed: {
		requiredFields() {
			return this.rows && this.columns && this.title.length ? true : false;
		},
		showWelcomeBanner() {
			return !this.defineCells;
		},
	},
	methods: {
		setDefineCells() {
			this.defineCells = !this.defineCells;
		},
		createTable() {
			this.$router.push({
				name: 'Add From Scratch',
				query: {
					title: this.title,
					col: this.columns,
					row: this.rows,
				},
			});
		},
		navigateToUpload() {
			this.$router.push({ name: 'New table from excel file' });
		},
	},
};
</script>
