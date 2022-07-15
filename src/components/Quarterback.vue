<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/stores/qb'

const store = useStore()
const props = defineProps(["id"])

const qbs = computed(() => store.$state.data)

const qb = computed(() => {
    return qbs.value.find(qb => qb.ID === props.id)
})
</script>

<template>
    <div class="container mx-auto py-2">
        <div>
            {{ qb?.Player }}
        </div>
    </div>
</template>