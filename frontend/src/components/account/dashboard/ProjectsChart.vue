<script setup>
import { DoughnutChart, useDoughnutChart, useBarChart, BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref, computed } from 'vue'

Chart.register(...registerables);

const dataValues = ref([70, 20, 40, 10]);
const dataLabels = ref(["Total", "Completed", "Ongoing", "Started"]);

const testData = computed(() => ({
    labels: dataLabels.value,
    datasets: [
        {
            data: dataValues.value,
            backgroundColor: [
                "#77CEFF",
                "#0079AF",
                "#123E6B",
                "#97B0C4",
            ],
        },
    ],
}));

const { barChartProps } = useBarChart({
    chartData: testData
});

const { doughnutChartProps } = useDoughnutChart({
    chartData: testData
});
</script>

<template>
    <div class="p-3 space-y-3">
        <div class="flex items-center justify-between">
            <h1 class="text-xl text-primary">Project Chart</h1>
            <select name="projections" id="projections"
                class="px-4 py-3 rounded-md outline-none border border-gray-400 bg-[#f2f6ff]">
                <option value="all">All</option>
                <option value="all">This Month</option>
                <option value="all">This Week</option>
                <option value="all">Today</option>
            </select>
        </div>
        <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white p-2 rounded-xl shadow-xl">
                <BarChart v-bind="barChartProps" />
            </div>
            <div class="bg-white p-2 rounded-xl shadow-xl">
                <DoughnutChart v-bind="doughnutChartProps" />
            </div>
        </div>
    </div>
</template>
