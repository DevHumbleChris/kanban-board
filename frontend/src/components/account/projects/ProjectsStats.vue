<script setup>
import PercentageScore from '../../PercentageScore.vue';

</script>

<template>
    <div class="hidden sticky top-0 h-screen overflow-scroll scrollbar-hide md:block w-[400px]">
        <div class="bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-center">
                <PercentageScore />
            </div>
            <div class="p-4 -mt-4 space-y-3">
                <h2 class="text-xl font-bold text-primary">Projects</h2>
                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-blue-100 rounded-md p-2 space-y-1 shadow-xl">
                        <p class="uppercase text-sm text-gray-500">Total</p>
                        <p class="border-l-2 border-l-secondary px-2 text-primary font-bold text-lg">12</p>
                    </div>
                    <div class="bg-pink-100 rounded-md p-2 space-y-1 shadow-xl">
                        <p class="uppercase text-sm text-gray-500">Completed</p>
                        <p class="border-l-2 border-l-secondary px-2 text-primary font-bold text-lg">12</p>
                    </div>
                    <div class="bg-pink-100 rounded-md p-2 space-y-1 shadow-xl">
                        <p class="uppercase text-sm text-gray-500">Ongoing</p>
                        <p class="border-l-2 border-l-secondary px-2 text-primary font-bold text-lg">12</p>
                    </div>
                    <div class="bg-blue-100 rounded-md p-2 space-y-1 shadow-xl">
                        <p class="uppercase text-sm text-gray-500">Started</p>
                        <p class="border-l-2 border-l-secondary px-2 text-primary font-bold text-lg">12</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
</template>
