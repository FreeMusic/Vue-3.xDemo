<template>
    
</template>

<script>
    import { defineComponent, ref } from "vue";
    export default {
        name: "TryVue3",
        setup(){
            const heros = ref(['鲁班七号', '后羿', '夏侯惇']);
            const selectHero = ref("");
            const selectHeroFuction = (index: number) => {
                selectHero.value = this.heros.value[index];
            };

            return {heros, selectHeroFuction, selectHero}
        }

    }
</script>

<style scoped>

</style>