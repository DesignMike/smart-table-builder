<template>
	<!-- <div class="flex h-32 items-center justify-center">
		<div class="flex p-5 justify-center bg-white" 
      v-if="!defineCells"
    >
			<button
				@click="setDefineCells"
				class="text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
			>
				Create New Table
			</button>
			<button
				@click="setDefineCells"
				class="text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
			>
				Create New Table
			</button>
			<button
				@click="navigateToUpload"
				class="text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
			>
				Upload SpreadSheet
			</button>
		</div>
		<div v-if="defineCells">
			<div>
				<div class="py-3">
					<label
						for="title"
						class="font-semibold text-sm text-gray-600 pr-1 block"
						>Table Title</label
					>
					<input
						v-model="title"
						type="text"
						id="title"
						placeholder="Table Title"
						class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
					/>
				</div>
				<div class="flex">
					<div class="flex-col">
						<label
							for="columns"
							class="font-semibold text-sm text-gray-600 pr-1 block"
							>Columns</label
						>
						<input
							v-model="columns"
							type="number"
							id="columns"
							placeholder="Columns"
							class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
						/>
					</div>
					<div class="flex-col">
						<label
							for="rows"
							class="font-semibold text-sm text-gray-600 pr-1 block"
							>Rows</label
						>
						<input
							v-model="rows"
							type="number"
							id="rows"
							placeholder="Rows"
							class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
						/>
					</div>
				</div>
			</div>
			<div class="text-center py-3">
				<button
					v-if="requiredFields"
					@click="createTable"
					class="text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
				>
					Create
				</button>
			</div>
		</div>
	</div> -->
	<div
		class="container mx-auto px-4 py-8 justify-center rounded-sm bg-white border-t-4 border-brand-100"
	>
		<div class="text-3xl font-bold text-center mb-8">Welcome!</div>
		<div class="text-xl text-center mb-4">Let's create a new table</div>
		<div class="flex justify-center">
			<div class="grid gap-8 mt-8 md:grid-cols-2">
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
