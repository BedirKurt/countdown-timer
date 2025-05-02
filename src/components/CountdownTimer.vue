<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const Days = ref<number | string | null>(null);
const Hours = ref<number | string | null>(null);
const Minutes = ref<number | string | null>(null);
const Seconds = ref<number | string | null>(null);
let intervalId: number

function calculationTime() {
    const date = new Date('May 17,2025,00:00:00').getTime()
    const nowDate = new Date().getTime()
    const dateDifference = date - nowDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(dateDifference / days)
    let timeHours: string | number = Math.floor((dateDifference % days) / hours)
    let timeMinutes: string | number = Math.floor((dateDifference % hours) / minutes)
    let timeSeconds: string | number = Math.floor((dateDifference % minutes) / seconds)

    if (timeHours < 10) {
        timeHours = '0' + timeHours
    } if (timeMinutes < 10) {
        timeMinutes = '0' + timeMinutes
    } if (timeSeconds < 10) {
        timeSeconds = '0' + timeSeconds
    }
    Days.value = timeDays
    Hours.value = timeHours
    Minutes.value = timeMinutes
    Seconds.value = timeSeconds

}

onMounted(() => {
    calculationTime();
    intervalId = setInterval(calculationTime, 1000)
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>
<template>
    <div class="stars absolute mx-auto container">
        <img src="/src/assets/images/bg-stars.svg" alt="stars"
            class="main-container flex flex-col items-center justify-center">
    </div>
    
    <div class="countdown flex items-center justify-content-between text-center">
        <div class="time-box">
            <p class="p-6 m-8 text-5xl rounded-md relative z-10 min-w-[7vw]">{{ Days }}</p>
            <h3 class="uppercase tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] lg:tracking-[3px] text-sm">Days
            </h3>
        </div>
        <div class="time-box">
            <p class="p-6 m-8 text-5xl rounded-md relative z-10 min-w-[7vw]">{{ Hours }}</p>
            <h3 class="uppercase tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] lg:tracking-[3px] text-sm">Hours
            </h3>
        </div>
        <div class="time-box">
            <p class="p-6 m-8 text-5xl rounded-md relative z-10 min-w-[7vw]">{{ Minutes }}</p>
            <h3 class="uppercase tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] lg:tracking-[3px] text-sm">Minutes
            </h3>
        </div>
        <div class="time-box">
            <p class="p-6 m-8 text-5xl rounded-md relative z-10 min-w-[7vw]">{{ Seconds }}</p>
            <h3 class="uppercase tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] lg:tracking-[3px] text-sm">Seconds
            </h3>
        </div>
    </div>

</template>


<style scoped>
.countdown p {
    background-color: hsl(236, 21%, 26%);
    color: hsl(345, 95%, 68%);
}

.countdown p::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: hsla(235, 22%, 20%, 0.733);
    transform: rotateX(240deg);
    z-index: -1;
}

.countdown p::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background-color: hsla(236, 21%, 26%, 0.329);
    transform: rotateX(200deg);
    transform-origin: bottom;
    box-shadow: inset 0 40px 25px rgba(0, 0, 0, 0.3);
}

.countdown h3 {
    color: hsl(237, 18%, 59%);
}


.stars img{
    width: 100vw;
}
</style>