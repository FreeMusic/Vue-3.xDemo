<template>
    <h2>请选择你的英雄</h2>
    <div>
        <button v-for="(hero, index) in heros"
                v-bind:key="index"
                @click="selectHeroFuction(index)"
        >
            {{index}} : {{hero}}
        </button>
    </div>
    <div>你选择了英雄【{{selectHero}}】</div>
    <div v-if="showMessage">蛤蛤蛤蛤蛤</div>
</template>

<script>
    export default {
        name: "Vue2TryApp",
        data(){
           return {
               heros: ['鲁班七号', '后羿', '夏侯惇'],
               selectHero: '',
               showMessage: false,
           }
        },
        methods: {
            selectHeroFuction(index){
                this.selectHero = this.heros[index];
            },
        }
    }
</script>

<style scoped>

</style>