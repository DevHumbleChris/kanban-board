<script setup>
import { Squares2X2Icon, FolderIcon, PuzzlePieceIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import { watch, ref, onBeforeMount } from 'vue'
import { kanbanUIStore } from '../../stores/kanbanBoardUI'

const kanbanUI = kanbanUIStore()

const route = useRoute()

const selectedRoute = ref('dashboard')

onBeforeMount(() => {
    kanbanUI.updateAccountView(selectedRoute.value)
})

watch(route, (newVal) => {
    selectedRoute.value = newVal.name
    kanbanUI.updateAccountView(selectedRoute.value)
})
</script>

<template>
    <aside class="fixed z-50 p-2 flex items-center bg-primary md:flex-col md:sticky bottom-0 md:top-0 md:h-screen w-full md:w-[16rem] space-x-2">
        <div class="flex md:flex-col items-center justify-center md:mt-6 md:mb-3 space-y-2">
            <img src="../../assets/vue-kenya.png" alt="vue-kenya-logo"
                class="w-12 sm:w-[3.5rem] md:w-24 border-2 border-secondary rounded-full bg-gray-200" />
            <h1 class="text-white text-xl hidden md:block">Kanban Board.</h1>
        </div>
        <ul class="md:p-4 p-2 flex items-center justify-between md:flex-col md:items-start md:justify-evenly md:space-y-4 sm:mt-0 group w-full">
            <li class="md:w-full">
                <RouterLink to="/account/dashboard" :class="selectedRoute === 'dashboard' ? 'flex items-center space-x-3 text-white group bg-secondary p-2 rounded-md': 'flex items-center space-x-3 text-white hover:bg-secondary p-2 rounded-md'">
                    <Squares2X2Icon class="w-auto h-6 sm:h-8" />
                    <p class="text-lg hidden md:block">Dashboard</p>
                </RouterLink>
            </li>
            <li class="md:w-full">
                <RouterLink to="/account/projects" :class="selectedRoute === 'projects' ? 'flex items-center space-x-3 text-white group bg-secondary p-2 rounded-md': 'flex items-center space-x-3 text-white hover:bg-secondary p-2 rounded-md'">
                    <FolderIcon class="w-auto h-6 sm:h-8" />
                    <p class="text-lg hidden md:block">Projects</p>
                </RouterLink>
            </li>
            <li class="md:w-full">
                <RouterLink to="/account/tasks" :class="selectedRoute === 'tasks' ? 'flex items-center space-x-3 text-white group bg-secondary p-2 rounded-md': 'flex items-center space-x-3 text-white hover:bg-secondary p-2 rounded-md'">
                    <PuzzlePieceIcon class="w-auto h-6 sm:h-8" />
                    <p class="text-lg hidden md:block">Tasks</p>
                </RouterLink>
            </li>
            <li class="md:w-full">
                <RouterLink to="/account/github" :class="selectedRoute === 'github' ? 'flex items-center space-x-3 text-white group bg-secondary p-2 rounded-md': 'flex items-center space-x-3 text-white hover:bg-secondary p-2 rounded-md'">
                    <FontAwesomeIcon :icon="['fab','github']" class="w-auto h-6 sm:h-8" />
                    <p class="text-lg hidden md:block">GitHub</p>
                </RouterLink>
            </li>
            <li class="md:w-full">
                <RouterLink to="/account/settings" :class="selectedRoute === 'settings' ? 'flex items-center space-x-3 text-white group bg-secondary p-2 rounded-md': 'flex items-center space-x-3 text-white hover:bg-secondary p-2 rounded-md'">
                    <Cog6ToothIcon class="w-auto h-6 sm:h-8" />
                    <p class="text-lg hidden md:block">Settings</p>
                </RouterLink>
            </li>
        </ul>
        <button class="text-white hidden absolute bottom-4 left-5 md:flex justify-center items-center space-x-3">
            <FontAwesomeIcon :icon="['fas','right-from-bracket']" class="w-auto h-8 sm:h-8"/>
            <p class="text-lg hidden md:block">Logout</p>
        </button>
    </aside>
</template>
