<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/stores/hockey'

const store = useStore()
const props = defineProps(["id"])

const players = computed(() => store.$state.data)

const player = computed(() => {
    return players.value.find(hky => hky.ID === props.id)
})
</script>

<template>
    <div class="container mx-auto py-2">
        <div v-if="player">
            {{ player?.Player }} -
            Position: {{ player?.Position }} - 
            Goals: {{ player?.G }} - 
            Assists: {{ player?.A }} - 
            Blocks: {{ player?.Blk }}
        </div>
    </div>
</template>