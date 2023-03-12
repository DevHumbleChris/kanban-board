<script setup>
import { EllipsisVerticalIcon } from '@heroicons/vue/24/solid';
import ProjectsStats from '../../components/account/projects/ProjectsStats.vue';
</script>

<template>
    <section>
        <div class="flex gap-3">
            <div class="w-full scrollbar-hide overflow-scroll space-y-7 mb-20 md:mb-0">
                <div class="sticky top-0 grid grid-cols-3 text-lg font-bold">
                    <p class="p-3 border-b-4 border-b-primary">Started</p>
                    <p class="p-3">Ongoing</p>
                    <p class="p-3">Completed</p>
                </div>
                <div class="grid md:grid-cols-2 gap-3 space-y-3 mt-3">
                    <div class="p-4 rounded-md bg-white shadow-xl space-y-4">
                        <div class="flex items-center justify-between">
                            <p class="bg-secondary text-white px-3 py-2 rounded-full">Web Design</p>
                            <EllipsisVerticalIcon class="w-6" />
                        </div>
                        <p class="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Reiciendis nisi, aliquid, minus facere debitis, necessitatibus reprehenderit nulla totam.</p>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-secondary bg-[#f2f6ff]">
                                        Task in progress
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span class="text-xs font-semibold inline-block text-secondary">
                                        30%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#f2f6ff]">
                                <div :style="{ width: '30%'}"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary">
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-2 rounded-full border border-gray-400 px-3 py-2">
                                <FontAwesomeIcon :icon="['fab', 'github']" class="w-6 h-auto" />
                                <p class="text-xs">GitHub Repo</p>
                            </div>
                            <div class="flex items-center space-x-2 rounded-full border border-gray-400 px-3 py-2">
                                <FontAwesomeIcon :icon="['fas', 'globe']" class="w-6 h-auto" />
                                <p class="text-xs">Website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectsStats />
    </div>
</section></template>
