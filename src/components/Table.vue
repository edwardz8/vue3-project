<script setup>
import { computed, onMounted, ref } from 'vue';
// import { useStore } from '@/stores/hockey'
import hockey from '@/hockey.json'

// const store = useStore()
// const players = computed(() => store.$state.data)

/* onMounted(() => {
    fetch('hockey.json')
        .then(response => response.json())
        .then(json => hockey = json);
})
 */

const hockeyResults = ref(hockey)
const count = ref('')
const perPage = ref(4)
const page = ref(1)
const loadingNext = ref(false)
const loadingPrev = ref(false)

count.value = hockeyResults.value.count

/* pagination */
const fetchPage = async (p) => {
    if (p > page.value) loadingNext.value = true
    else loadingPrev.value = true

    try {
        fetch('json/hockey.json')
            .then(response => response.json)
            .then(json => hockey = json)
    } catch (err) {
        console.log(err)
    } finally {
        loadingNext.value = false
        loadingPrev.value = false 
    }
}

const showNextPage = computed(() => {
    return Math.floor(count.value / (page.value * perPage.value))
})

/* search */
const searchQuery = ref('')

const sortedPlayers = computed(() => {
    return hockeyResults.value.filter(
        p => p.Player.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})
</script>

<template>
    <div class="flex flex-col mt-4">
        <!-- <pre>{{ hockeyResults }}</pre> -->
        <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <div class="py-3 px-4">
                        <div class="relative max-w-xs">
                            <label for="hs-table-with-pagination-search" class="sr-only">Search</label>
                            <input type="text" name="hs-table-with-pagination-search"
                                id="hs-table-with-pagination-search"
                                class="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                placeholder="Search for items">
                            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                                <svg class="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Points
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Goals
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assists
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shots
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">More
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr v-for="player in sortedPlayers" :key="player.ID">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {{ player.Player }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                                    player.RkOv
                                    }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                        {{ player.Team }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                        {{ player.FPts }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                        {{ player.G }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                        {{ player.A }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                        {{ player.SOG }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <router-link :to="{ name: 'Player', params: { id: player.ID } }">
                                            <a class="text-blue-500 hover:text-blue-700" href="#">View</a>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="py-1 px-4">
                        <nav class="flex items-center space-x-2">
                            <a :disabled="page === 1" @click="fetchPage(page - 1)" class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
                                href="#">
                                <span aria-hidden="true">«</span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a :disabled="showNextPage === 0" @click="fetchPage(page + 1)" class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
                                href="#">
                                <span class="sr-only">Next</span>
                                <span aria-hidden="true">»</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>