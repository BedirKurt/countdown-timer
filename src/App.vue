<script setup lang="ts">
import TimerFooter from './components/layout/TimerFooter.vue';
import TimerHeader from './components/layout/TimerHeader.vue';
import CountdownTimer from './components/CountdownTimer.vue';

</script>


<template>

  <div class="container mx-auto flex flex-col items-center justify-center
    min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[70vh]">
    <TimerHeader />
    <CountdownTimer />
    <TimerFooter />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
