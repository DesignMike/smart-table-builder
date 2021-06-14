<template>
<div class="table-preview">
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
</template>

<script>
export default{
  props:['cellItems'],
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