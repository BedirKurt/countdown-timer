<template>
    <div
        class="attribution text-center text-xs relative -bottom-52 left-3 transition-transform duration-500 ease-in-out hover:scale-110">
        Challenge by <a class='text-blue-500' href="https://www.frontendmentor.io?ref=challenge"
            target="_blank">Frontend
            Mentor</a>.
        Coded by <a href="https://github.com/BedirKurt?tab=repositories" class='text-blue-500'>Bedirhan Kurt</a>.
    </div>
    <div class="socials absolute bottom-28 z-50 left-2/4 transform translate-x-[-30%]">
        <ul class="flex">
            <li class="mr-8">
                <a href="https://www.facebook.com/">
                    <img src="/src/assets/images/icon-facebook.svg" alt=""
                        class="transition-transform duration-300 ease-in-out hover:scale-110">
                </a>
            </li>
            <li class="mr-8">
                <a href="https://tr.pinterest.com/">
                    <img src="/src/assets/images/icon-pinterest.svg" alt=""
                        class="transition-transform duration-300 ease-in-out hover:scale-110">
                </a>
            </li>
            <li class="mr-8">
                <a href="https://www.instagram.com/">
                    <img src="/src/assets/images/icon-instagram.svg" alt=""
                        class="transition-transform duration-300 ease-in-out hover:scale-110">
                </a>
            </li>
        </ul>
    </div>
    <div class="hills absolute bottom-0">
        <img src="/src/assets/images/pattern-hills.svg" alt="hills">
    </div>
</template>


<style scoped>
.socials a:hover img {
    filter: saturate(50%) sepia(100%) hue-rotate(-56deg) saturate(800%) brightness(1.1);
}

.hills img {
    width: 100vw;
}
</style>