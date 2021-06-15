<template>
<div class="table-preview">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
  <div class="block w-full overflow-x-auto">
    <div v-if="tableTitle.length" class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-base text-blueGray-700">{{ tableTitle }}</h3>
        <div v-bind="{ 'other-attr': cellItems[0] }"></div>
      </div>
    </div>
    <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                v-for="(cell, key1) in headCells[0]" :key="key1"
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >{{ cell }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, key) in nonHeaderCells" :key="key">
              <td v-for="(cell, key1) in row" :key="key1" class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ cell }}
                    </p>
              </td>
            </tr>
          </tbody>
    </table>
  </div>
  </div>
</div>
</template>

<script>
export default{
  props:['cellItems', 'tableTitle'],
  mounted() {
  },
  computed: {
    headCells () {
      return this.cellItems.filter((e,i) => i == 0);
    },
    nonHeaderCells () {
      return this.cellItems.filter((e,i) => i !== 0);
    }
  }
}
</script>