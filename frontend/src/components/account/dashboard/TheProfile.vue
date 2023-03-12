<script setup>
import QrcodeSVG from '../../QrcodeSVG.vue';
</script>

<template>
    <div class="hidden sticky top-0 h-screen overflow-scroll scrollbar-hide md:block w-[400px] bg-white">
        <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" class="max-h-[185px] w-full object-fit rounded-t-md">
        <div class="p-4 my-4 space-y-3">
            <div>
                <p class="text-xl font-bold text-primary">Kanban Board</p>
                <span class="block text-sm text-secondary font-medium">@kanban-board</span>
            </div>
            <div class="space-y-2">
                <p class="text-base font-bold">Bio</p>
                <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi est accusamus quisquam molestiae veniam expedita et natus, delectus esse culpa nostrum, a aspernatur assumenda asperiores.</p>
            </div>
            <div class="space-y-2">
                <p class="text-base font-bold">Website</p>
                <a href="the-coding-montana.vercel.app" class="block cursor-pointer text-sm w-full text-secondary font-bold">the-coding-montana.vercel.app</a>
            </div>
            <div>
                <QrcodeSVG />
            </div>
        </div>
    </div>
</template>
