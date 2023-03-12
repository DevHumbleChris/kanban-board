<script setup>
import TheStats from '@/components/account/dashboard/TheStats.vue'
import TheProfile from '@/components/account/dashboard/TheProfile.vue'
import ProjectsChart from '@/components/account/dashboard/ProjectsChart.vue'
import TasksChart from '@/components/account/dashboard/TasksChart.vue'
</script>

<template>
    <section>
        <div class="flex">
            <div class="w-full scrollbar-hide overflow-scroll space-y-3 mb-20 md:mb-0">
                <TheStats />
                <ProjectsChart />
                <TasksChart />
            </div>
            <TheProfile />
        </div>
    </section>
</template>
