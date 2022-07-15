<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from '@/stores/qb'

const store = useStore()

const qbs = computed(() => store.$state.data)

/* const buildQBs = async () => {
    qbs
} */

/* setTimeout(async () => {
    qbs.value
}, 5000) */

onMounted(async () => {
    /* const res = await axios.get("")
    qbs.value = res.data 
    console.log(res) */
})
</script>

<template>
    <div class="container mx-auto grid grid-cols-2 gap-2 mt-4 md:grid-cols-3">
        <div v-for="qb in qbs" :key="qb.ID" class="flex flex-col flex-[1_0_0%] ml-2 mr-2 mb-2 dark:bg-gray-800">
            <img class="w-full h-auto" src="../assets/IMG_ME.PNG" alt="Image Description">
            <div class="p-4 flex-1 md:p-5">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                    {{ qb.Player }} - {{ qb.Position }}
                </h3>
                <p class="mt-1 text-gray-800 dark:text-gray-400">
                    Team: {{qb.Team}}
                </p>
                <p class="mt-1 text-gray-800 dark:text-gray-400">
                    Projected Point Total: {{qb.FPts}}
                </p>
            </div>
            <div class="p-4 border-t sm:px-5 dark:border-gray-700 flex justify-between">
                <p class="text-xs text-gray-500 font-bold dark:text-gray-300">
                    Current Rank: {{ qb.RkOv }}
                </p>
                <button type="button"
                    class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800">
                    <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>