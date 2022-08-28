<template>
  <div>Hello {{ name }}!</div>
</template>

<script>
  import { BasicSelect } from 'vue-search-select'
  export default {
    data() {
      return {
        name: "Vue",
      };
    },
    components: {
      BasicSelect
    }
  };
</script>