<template>
  <div
    ref="carouselRef"
    class="carousel relative w-screen h-screen overflow-hidden bg-black text-white"
  >
    <!-- LIST -->
    <div ref="sliderRef" class="list relative w-full h-full">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item absolute inset-0"
      >
        <img
          :src="item.image"
          class="w-full h-full object-cover"
          alt=""
        />

        <div class="content">
          <div class="author font-bold tracking-[10px]">
            {{ item.author }}
          </div>

          <div class="title text-[2rem] md:text-[4rem] font-bold leading-tight">
            {{ item.title }}
          </div>

          <div class="topic text-[2rem] md:text-[4rem] font-bold leading-tight text-red-500">
            {{ item.topic }}
          </div>

          <div class="des text-md leading-relaxed">
            {{ item.des }}
          </div>

          <div class="buttons grid grid-cols-2 gap-2 mt-5">
            <button
              class="h-10 border border-white bg-transparent tracking-[3px] cursor-pointer"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- THUMBNAILS -->
    <div
      ref="thumbnailRef"
      class="thumbnail absolute bottom-12 left-1/2 z-1 flex gap-5 w-max"
    >
      <div
        v-for="(item, index) in items"
        :key="'thumb-' + index"
        class="item relative w-37.5 h-55 shrink-0"
      >
        <img
          :src="item.image"
          class="w-full h-full object-cover rounded-[20px]"
          alt=""
        />
        <div class="content absolute bottom-2.5 left-2.5 right-2.5">
          <div class="title font-medium">
            {{ item.title }}
          </div>
          <div class="description font-light text-xs">
            {{ item.topic }}
          </div>
        </div>
      </div>
    </div>

    <!-- ARROWS + PAUSE -->
    <div
      class="arrows absolute top-[80%] right-[52%] z-1 flex gap-2.5 items-center w-75 max-w-[30%]"
    >
      <!-- PREV -->
      <!-- <button
        @click="showSlider('prev')"
        class="w-10 h-10 rounded-full bg-white/20 text-white font-bold transition hover:bg-white hover:text-black "
      >
        <UIcon name="lucide:arrow-left" style="transform: translate(0%, 20%)" />
      </button> -->

      <!-- PAUSE / PLAY -->
      <!-- <button
        @click="togglePause"
        class="w-10 h-10 rounded-full bg-red-500/80 text-white font-bold transition hover:bg-red-500 cursor-pointer"
      >
        <UIcon
          :name="isPaused ? 'lucide:play' : 'lucide:pause'"
          style="transform: translate(0%, 20%)"
        />
      </button> -->

      <!-- NEXT -->
      <!-- <button
        @click="showSlider('next')"
        class="w-10 h-10 rounded-full bg-white/20 text-white font-bold transition hover:bg-white hover:text-black cursor-pointer"
      >
        <UIcon name="lucide:arrow-right" style="transform: translate(0%, 20%)" />
      </button> -->
    </div>

    <!-- TIME -->
    <div class="time absolute top-0 left-0 z-1 h-0.75 bg-red-500"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

/* =========================
   TYPES
========================= */
export interface CarouselItem {
  author: string
  title: string
  topic: string
  des: string
  image: string
}

interface Props {
  items: CarouselItem[]
  transitionTime?: number
  autoNextTime?: number
}

const props = withDefaults(defineProps<Props>(), {
  transitionTime: 3000,
  autoNextTime: 7000
})

/* =========================
   REFS
========================= */
const carouselRef = ref<HTMLDivElement | null>(null)
const sliderRef = ref<HTMLDivElement | null>(null)
const thumbnailRef = ref<HTMLDivElement | null>(null)
const isPaused = ref(false)

/* =========================
   SSR SAFE
========================= */
const isClient = import.meta.client

let runTimeout: number | undefined
let autoNextTimeout: number | undefined

/* =========================
   LOGIC
========================= */
function showSlider(type: 'next' | 'prev') {
  if (!isClient || isPaused.value) return
  if (!carouselRef.value || !sliderRef.value || !thumbnailRef.value) return

  const sliderItems = sliderRef.value.querySelectorAll<HTMLElement>('.item')
  const thumbnailItems = thumbnailRef.value.querySelectorAll<HTMLElement>('.item')

  if (type === 'next') {
    const firstSlide = sliderItems.item(0)
    const firstThumb = thumbnailItems.item(0)
    if (!firstSlide || !firstThumb) return

    sliderRef.value.appendChild(firstSlide)
    thumbnailRef.value.appendChild(firstThumb)
    carouselRef.value.classList.add('next')
  } else {
    const lastSlide = sliderItems.item(sliderItems.length - 1)
    const lastThumb = thumbnailItems.item(thumbnailItems.length - 1)
    if (!lastSlide || !lastThumb) return

    sliderRef.value.prepend(lastSlide)
    thumbnailRef.value.prepend(lastThumb)
    carouselRef.value.classList.add('prev')
  }

  clearTimeout(runTimeout)
  runTimeout = window.setTimeout(() => {
    carouselRef.value?.classList.remove('next')
    carouselRef.value?.classList.remove('prev')
  }, props.transitionTime)

  resetAutoNext()
}

/* AUTO NEXT CONTROL */
function resetAutoNext() {
  if (!isClient || isPaused.value) return

  clearTimeout(autoNextTimeout)
  autoNextTimeout = window.setTimeout(() => {
    showSlider('next')
  }, props.autoNextTime)
}

/* TOGGLE PAUSE */
function togglePause() {
  isPaused.value = !isPaused.value

  if (isPaused.value) {
    clearTimeout(autoNextTimeout)
    carouselRef.value?.classList.add('paused')
  } else {
    carouselRef.value?.classList.remove('paused')
    resetAutoNext()
  }
}

onMounted(() => {
  if (!isClient || !thumbnailRef.value) return
  const thumbs = thumbnailRef.value.querySelectorAll<HTMLElement>('.item')
  const first = thumbs.item(0)
  if (!first) return
  thumbnailRef.value.appendChild(first)
  resetAutoNext()
})

onBeforeUnmount(() => {
  if (!isClient) return
  clearTimeout(runTimeout)
  clearTimeout(autoNextTimeout)
})
</script>

<style scoped>
.carousel .list .item:nth-child(1) {
  z-index: 1;
}

.carousel .list .item .content {
  position: absolute;
  top: 20%;
  width: 1140px;
  max-width: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding-right: 30%;
  box-sizing: border-box;
  color: #fff;
}

@media screen and (max-width: 678px) {
  .carousel .list .item .content{
    padding-right: 0;
  }
  .carousel .list .item .content .title{
    font-size: 30px;
  }
}

.carousel .list .item .content .author,
.carousel .list .item .content .title,
.carousel .list .item .content .topic {
  text-shadow: 0 5px 10px #0006;
}

.carousel .list .item .content .des {
  background-color: rgba(0,0,0,.5);
  border-radius: .35rem;
  padding: .5rem;
  font-weight: 500;
}

.carousel .list .item:nth-child(1) .content .author,
.carousel .list .item:nth-child(1) .content .title,
.carousel .list .item:nth-child(1) .content .topic,
.carousel .list .item:nth-child(1) .content .des,
.carousel .list .item:nth-child(1) .content .buttons {
  transform: translateY(50px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent 0.5s 1s linear forwards;
}

@keyframes showContent {
  to {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}

.carousel .list .item:nth-child(1) .content .title {
  animation-delay: 1.2s;
}
.carousel .list .item:nth-child(1) .content .topic {
  animation-delay: 1.4s;
}
.carousel .list .item:nth-child(1) .content .des {
  animation-delay: 1.6s;
}
.carousel .list .item:nth-child(1) .content .buttons {
  animation-delay: 1.8s;
}

/* NEXT */
.carousel.next .list .item:nth-child(1) img {
  width: 150px;
  height: 220px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  border-radius: 30px;
  animation: showImage 0.5s linear forwards;
}

@keyframes showImage {
  to {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

.carousel.next .thumbnail {
  animation: effectNext 0.5s linear forwards;
}

@keyframes effectNext {
  from {
    transform: translateX(150px);
  }
}

/* PREV */
.carousel.prev .list .item:nth-child(2) img {
  animation: outFrame 0.5s linear forwards;
}

@keyframes outFrame {
  to {
    width: 150px;
    height: 220px;
    bottom: 50px;
    left: 50%;
    border-radius: 20px;
  }
}

/* TIME BAR */
.carousel.next .time,
.carousel.prev .time {
  animation: runningTime 3s linear forwards;
}

.carousel.paused .time {
  animation-play-state: paused;
}

@keyframes runningTime {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
