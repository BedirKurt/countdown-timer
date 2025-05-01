<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const Days = ref<Number | String | null>(null);
const Hours = ref<Number | String | null>(null);
const Minutes = ref<Number | String | null>(null);
const Seconds = ref<Number | String | null>(null);
let intervalId: number

function hesaplama() {
  const date = new Date('May 17,2025,00:00:00').getTime()
  const nowDate = new Date().getTime()
  // console.log(date)
  // console.log(nowDate)
  const dateDifference = date - nowDate;
  // console.log(dateDifference)

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(dateDifference / days)
  let timeHours: string | number = Math.floor((dateDifference % days) / hours)
  let timeMinutes: string | number = Math.floor((dateDifference % hours) / minutes)
  let timeSeconds: string | number = Math.floor((dateDifference % minutes) / seconds)

  // timeHours = timeHours < 10 ? '0' + timeHours : timeHours
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
  hesaplama();
  intervalId = setInterval(hesaplama, 1000)
  console.log("her saniye çalışıyorum");
})

onUnmounted(() => {
  clearInterval(intervalId)
})

</script>


<template>

  <body>
    <div class="main-container">


      <div class="stars">
        <img src="/src/assets/images/bg-stars.svg" alt="stars">
      </div>

      <h1>We're launching soon</h1>

      <div class="countdown">
        <div class="time-box">
          <p>{{ Days }}</p>
          <h3>Days</h3>
        </div>
        <div class="time-box">
          <p>{{ Hours }}</p>
          <h3>Hours</h3>
        </div>
        <div class="time-box">
          <p>{{ Minutes }}</p>
          <h3>Minutes</h3>
        </div>
        <div class="time-box">
          <p>{{ Seconds }}</p>
          <h3>Seconds</h3>
        </div>
      </div>



      <div class="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <img src="/src/assets/images/icon-facebook.svg" alt="">
            </a>
          </li>
          <li>
            <a href="https://tr.pinterest.com/">
              <img src="/src/assets/images/icon-pinterest.svg" alt="">
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src="/src/assets/images/icon-instagram.svg" alt="">
            </a>
          </li>
        </ul>
      </div>

      <div class="hills">
        <img src="/src/assets/images/pattern-hills.svg" alt="hills">
      </div>
    </div>

    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Bedirhan Kurt</a>.
    </div>

  </body>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: hsl(235, 16%, 14%);
  font-family: "Red Hat Text", sans-serif;

}

.attribution {
  font-size: 11px;
  text-align: center;
  margin-left: 60px;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

/* Container */
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 70vh;
}

.main-container h1 {
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-bottom: 50px;
}


/* Countdown kısmı  */
.countdown {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

.countdown p {
  padding: 25px;
  margin: 30px;
  background-color: hsl(236, 21%, 26%);
  color: hsl(345, 95%, 68%);
  font-size: 46px;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  min-width: 7vw;
}

.countdown p::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: hsl(236, 21%, 20%);
  z-index: -1;
}


.countdown p::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-color: hsl(236, 21%, 26%);
  transform: rotateX(205deg);
  transform-origin: bottom;
  z-index: -2;
  box-shadow: inset 0 40px 25px rgba(0, 0, 0, 0.4);
}

.countdown h3 {
  color: hsl(237, 18%, 59%);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  margin-top: 10px;
}

/* Socials */
.socials {
  position: absolute;
  bottom: 10%;
  z-index: 300;
  left: 50%;
  transform: translate(-30%);

}

.socials ul {
  display: flex;
}


.socials ul li {
  margin: 0vh 2vh;
}

.socials a img {
  transition: transform 0.3s ease;
}

.socials a:hover img {
  filter: saturate(50%) sepia(100%) hue-rotate(-56deg) saturate(800%) brightness(1.1);
  transform: scale(1.2);
  /* Resmi %20 büyütür */
}

img {
  max-width: 100%;
}

ul {
  list-style-type: none;
}

.stars {
  position: absolute;
}

.hills {
  position: absolute;
  bottom: 0;

}

/* Large screens */
@media (min-width: 1600px) {

  .stars img,
  .hills img {
    /* width: 1920px; */
    width: 100vw;
  }
}

@media (min-width: 1440px) {

  .stars img,
  .hills img {
    /* width: 1600px; */
    width: 100vw;
  }
}

@media (min-width: 1080px) {

  .stars img,
  .hills img {
    width: 100vw;
  }
}

/* Small screens (mobile) */
@media (max-width: 375px) {

  .stars img,
  .hills img {
    width: 100vw;
  }

  .main-container h1 {
    font-size: 10px;
    margin-left: 10px;
  }

  .countdown p {
    font-size: 10vw;
    padding: 0px;
    margin: 15px;
  }

  .countdown h3 {
    font-size: 0px;
  }

  .socials {
    bottom: 10px;
  }

  .attribution {
    font-size: 10px;
    text-align: center;
    margin: 0px;
    margin-top: 35%;
  }

  .attribution a {
    color: hsl(228, 45%, 44%);
  }

  .hills {
    position: absolute;
    bottom: 0;
    width: 100vw;
  }
}
</style>
