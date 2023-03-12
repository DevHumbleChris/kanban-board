<script setup>
import { FolderIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div class="grid gap-4 sm:grid-cols-2 p-3 rounded-md">
        <div class="hover:transition-all hover:shadow-sm duration-700 grow-0 ease-in-out border p-4 rounded-md boder-gray-600 hover:border-r-[2.5px] hover:border-r-primary hover:border-t-[2.5px] hover:border-t-primary hover:border-b-[2.5px] hover:border-b-primary hover:border-l-[6px] hover:border-l-primary">
            <p class="text-md text-secondary font-bold">Total Number of Projects</p>
            <div class="flex items-center space-x-3 justify-between">
                <FolderIcon class="w-28 text-primary" />
                <p class="text-4xl text-secondary font-bold">15</p>
            </div>
        </div>
        <div class="hover:transition-all hover:shadow-sm duration-700 ease-in-out border p-4 rounded-md boder-gray-600 hover:border-r-[2.5px] hover:border-r-primary hover:border-t-[2.5px] hover:border-t-primary hover:border-b-[2.5px] hover:border-b-primary hover:border-l-[6px] hover:border-l-primary">
            <p class="text-md text-secondary font-bold">Total Number of Tasks</p>
            <div class="flex items-center space-x-3 justify-between">
                <ClipboardDocumentCheckIcon class="w-28 text-primary" />
                <p class="text-4xl text-secondary font-bold">20</p>
            </div>
        </div>
    </div>
</template>
