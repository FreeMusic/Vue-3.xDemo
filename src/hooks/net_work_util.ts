import { ref } from "vue";
import axios from "axios";

/*网络请求GET 方法*/
function requestGet (url: string) {
    console.log("********************")
    const requestResult = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const requestError = ref(null)

    axios.get(url).then((result) => {
        console.log("********************")
        console.log(result)
        loading.value = false
        loaded.value = true
        requestResult.value = result.data
    }).catch(error => {
        console.log(error)
        requestError.value = error
        loading.value = false
    })

    return {
        requestResult,
        loading,
        loaded,
        requestError
    }
}

export default requestGet
