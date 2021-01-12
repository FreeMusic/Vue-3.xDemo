<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>欢迎来到王者荣耀</h1>
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
  <div>
    <button @click="overAction">
      确定
    </button>

  </div>
  <div>{{overText}}</div>
  <div>
    <Suspense>
      <template #defalut>
        <asyncShow>
          <div>{{asyncShow}}</div>
        </asyncShow>
      </template>
      <template #fallback>
        <h1>加载中...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import {toRefs ,defineComponent, reactive, ref,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated, watch,
} from "vue";

interface HeroDataProps {
  heros: string[];
  selectHero: string;
  selectHeroFuction: (index: number) => void;
}

export default defineComponent({
  name:"App",
  setup(){
    const herosData: HeroDataProps = reactive({
      heros : ['鲁班七号', '后羿', '夏侯惇'],
      selectHero : "",
      selectHeroFuction : (index: number) => {
        herosData.selectHero = herosData.heros[index];
      }
    });

    const data = toRefs(herosData)

    console.log("1-开始创建组件-------setup");

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-------onBeforeMount");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-------onMounted");
    });

    onBeforeUpdate(() => {
      console.log("4-组件更新之前-------onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("5-组件更新之后-------onUpdated");
    });

    const overText = ref("选英雄")
    const overAction = () => {
      // overText.value = overText.value + "选择完毕 | "
      overText.value = "英雄选择完毕"
      // document.title = overText.value;
    };

    // /*观察单个值*/
    // watch(overText, (newValue, oldValue) => {
    //   console.log(`new -> ${newValue}`)
    //   console.log(`old -> ${oldValue}`)
    //
    //   document.title = newValue
    // });

    /*观察多个对象*/
    watch([overText, data.selectHero], (newValue, oldValue) => {
      console.log(`new -> ${newValue}`);
      console.log(`old -> ${oldValue}`);

      document.title = newValue[0]
    });

    const asyncShow = new Promise((resolve, reject) => {

      setTimeout(() => {
        console.log('asyncShow')
        return resolve({reslut:"异步"})
      }, 2000);
    })

    return {...data, overText, overAction, asyncShow}
  },

//   beforeDestroy -> onBeforeUnmount
// destroyed     -> onUnmounted
// activated     -> onActivated
// deactivated   -> onDeactivated
// errorCaptured -> onErrorCaptured
  // /***************Vue2.x版本生命周期函数***************/
  // beforeCreate() {
  //   console.log("Vue2.x版本生命周期函数   1-组件创建之前-----beforeCreate()");
  // },
  // beforeMount() {
  //   console.log("Vue2.x版本生命周期函数  2-组件挂载到页面之前执行-----BeforeMount()");
  // },
  // mounted() {
  //   console.log("Vue2.x版本生命周期函数   3-组件挂载到页面之后执行-----Mounted()");
  // },
  // beforeUpdate() {
  //   console.log("Vue2.x版本生命周期函数   4-组件更新之前-----BeforeUpdate()");
  // },
  // updated() {
  //   console.log("Vue2.x版本生命周期函数   5-组件更新之后-----Updated()");
  // },
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
