<script setup>
import { BellIcon } from '@heroicons/vue/24/solid'
import { kanbanUIStore } from '../../stores/kanbanBoardUI'
import { computed } from 'vue'

const kanbanUI = kanbanUIStore()

const headerName = computed(() => {
    return kanbanUI.accountView
})
</script>

<template>
    <div class="p-3 flex justify-between items-center w-full">
        <h1 class="text-2xl font-bold text-primary capitalize">{{ headerName }}</h1>
        <div class="space-x-2 flex justify-between items-center">
            <BellIcon class="w-9 text-primary" />
            <img src="../../assets/vue-kenya.png" alt="" class="w-10 border-2 border-secondary rounded-full bg-gray-200">
        </div>
    </div>
</template>
