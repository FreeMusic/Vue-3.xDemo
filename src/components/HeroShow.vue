<template>
    <div>{{result}}</div>
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        const data = axios.get('https://apiblog.jspang.com/default/getGirl')
        console.log(data)
        return {result: data}
    }
})
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
