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
<!--  <a v-bind:href="www.baidu.com"> dianwosadsad  </a>-->
</template>


<script lang="ts">
import {toRefs ,defineComponent, reactive, onRenderTriggered, onRenderTracked} from "vue";

export default defineComponent({
  name:"App",
  setup(){
    const herosData = reactive({
      heros : ['鲁班七号', '后羿', '夏侯惇'],
      selectHero : "",
      selectHeroFuction : (index: number) => {
        herosData.selectHero = herosData.heros[index];
      },
      showMessage: false,
    });
    const data = toRefs(herosData)

    onRenderTracked((event) => {
      console.log("状态跟踪组件----------->");
      console.log(event);
    })

    onRenderTriggered((event) => {
      console.log("状态触发组件--------------->");
      console.log(event);
    })

    return {...data}
  },
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
