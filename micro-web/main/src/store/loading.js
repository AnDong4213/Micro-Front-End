import { ref } from 'vue'

export let loadingStatus = ref(false)

export const changeLoading = (type) => (loadingStatus.value = type)
