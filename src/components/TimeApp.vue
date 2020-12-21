<template>
    <img alt="Vue logo" src="../assets/logo.png">

    <div>{{nowTime}}</div>
    <div>
        <button @click="getNowTime">
            显示当前时间
        </button>
      <span>Message</span>
    </div>
    <span>Message</span>
    <div v-if="loading">加载中...</div>
    <img v-if="loaded" :src="imageUrl" />
    <span>15:28:30</span>
    <span v-once>发生变化</span>
    <p>鼠标器偶爱你</p>

</template>

<script lang="ts">
    import {nowTime, getNowTime} from "../hooks/time_utils";
    import requestGet from "../hooks/net_work_util";


    export default {
        name: "TimeApp",
        setup(){
            const {requestResult, loading, loaded} = requestGet(
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1705581946,4177791147&fm=26&gp=0.jpg"
            );
            const imageUrl = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1705581946,4177791147&fm=26&gp=0.jpg";
            console.log("********************")
            return{nowTime, getNowTime,
                requestResult, loading, loaded, imageUrl,
            };
        }
    }
</script>

<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
