<template>
<div class="flex flex-wrap justify-center">
    <div v-if="!defineCells">
                    <button @click="setDefineCells" class="text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Create New Table
                    </button>
                    <button @click="navigateToUpload" class="text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Upload SpreadSheet
                    </button>
    </div>
    <div v-if="defineCells">
        <div>
            <div class="py-3">
                <label for="title" class="font-semibold text-sm text-gray-600 pr-1 block">Table Title</label>
                <input v-model="title" type="text" id="title" placeholder="Table Title" class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full">
            </div>
            <div class="flex">
                <div class="flex-col">
                    <label for="columns" class="font-semibold text-sm text-gray-600 pr-1 block">Columns</label>
                    <input v-model="columns" type="number" id="columns" placeholder="Columns" class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring">
                </div>
                <div class="flex-col">
                    <label for="rows" class="font-semibold text-sm text-gray-600 pr-1 block">Rows</label>
                    <input v-model="rows" type="number" id="rows" placeholder="Rows" class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring">
                </div>
            </div>
        </div>
        <div class="text-center py-3">
            <button v-if="requiredFields" @click="createTable" class="text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Create
            </button>
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
            title: ""
        }
    },
    methods: {
        setDefineCells() {
            debugger
            this.defineCells = !this.defineCells;
        },
        createTable() {
            this.$router.push({ name: "Add From Scratch", query: {
                title: this.title,
                col: this.columns,
                row: this.rows
            }});
        },
        navigateToUpload() {
            this.$router.push({ name: "New table from excel file"})
        }
    },
    computed: {
        requiredFields() {
            return (this.rows && this.columns && this.title.length) ? true : false
        }
    },
}
</script>