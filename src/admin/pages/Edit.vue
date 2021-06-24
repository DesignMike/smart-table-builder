<template>
    <p>{{ $route.query.table_id ? 'ooo' : 'qqq' }}</p>
</template>

<script>
export default {
    name: 'Edit',
    data() {
        return {
            toEditTable: null
        }
    },
    methods: {
        sampleFunc: () => {
        }
    },
    mounted() {
        debugger;
        let doProcess = (initialGridData) => {
            this.$store.commit('updateGrid', initialGridData );
        }
        jQuery.ajax({
            type: "GET",
            url: ajaxurl + '?action=sprdsh_get_table_cells',
            success: doProcess
        })
    },
}
</script>