<script setup>
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/account/TheSidebar.vue'
import HeadWrapper from '@/components/account/HeadWrapper.vue'
</script>

<template>
    <main class="sm:flex">
        <TheSidebar />
        <div class="w-full">
            <HeadWrapper />
            <div class="p-4">
                <RouterView />
            </div>
        </div>
    </main>
</template>
