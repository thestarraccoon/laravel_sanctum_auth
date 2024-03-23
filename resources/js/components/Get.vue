<script>
export default {
    name: "Get",

    mounted() {
        this.getData();
    },

    methods: {
        getData() {
            axios.get('/api/get').then( res => {
                console.log(res);
            })
        }
    }
}
</script>

<template>
    <div>Get</div>
</template>

<style scoped>

</style>
