<template>
  <section class="py-16 lg:py-24 relative"  id="products">
    <div class="container mx-auto px-4">
      <!-- Title with Navigation -->
      <div class="mb-8">
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight flex-1">
          МИ ПРАЦЮЄМО З ПРИСТРОЯМИ
        </h2>

        <!-- Navigation Arrows -->
        <div class="flex gap-3 py-2 lg:py-4 items-end justify-end">
          <button
            class="products-prev cursor-pointer w-12 h-12 rounded-full bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md"
            aria-label="Previous"
          >
            <i class="fa-solid fa-chevron-left text-[#FF6B00]"></i>
          </button>
          <button
            class="products-next cursor-pointer  w-12 h-12 rounded-full bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md"
            aria-label="Next"
          >
            <i class="fa-solid fa-chevron-right text-[#FF6B00]"></i>
          </button>
        </div>
      </div>

      <!-- Data-driven Swiper with BaseSwiper component -->
      <BaseSwiper
        :slides-per-view="1.2"
        :space-between="16"
        :centered-slides="true"
        :breakpoints="swiperBreakpoints"
        :navigation="{
          prevEl: '.products-prev',
          nextEl: '.products-next'
        }"
      >
        <swiper-slide v-for="device in devices" :key="device.id">
          <div class="bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
            <img
              :src="device.image"
              :alt="device.alt"
              class="w-40 h-40 object-contain mx-auto mb-4 transition-transform duration-500 group-hover:scale-110"
            >
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-bold text-secondary">{{ device.name }}</h3>
              <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FF6B00]">
                <i class="fa-solid fa-chevron-right text-[#FF6B00] text-sm transition-colors duration-300 group-hover:text-white"></i>
              </div>
            </div>
          </div>
        </swiper-slide>
      </BaseSwiper>
    </div>
  </section>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'
import BaseSwiper from '../components/BaseSwiper.vue'

// Swiper breakpoints configuration
const swiperBreakpoints = {
  640: { slidesPerView: 1.2, spaceBetween: 20, centeredSlides: false },
  768: { slidesPerView: 1.5, spaceBetween: 24, centeredSlides: false },
  1024: { slidesPerView: 2.5, spaceBetween: 30, centeredSlides: false },
  1280: { slidesPerView: 3.5, spaceBetween: 30, centeredSlides: false }
}

// Devices data - small dataset can live in component
const devices = [
  {
    id: 1,
    name: 'Apple',
    image: '/images/devices/phone.png',
    alt: 'Apple iPhone'
  },
  {
    id: 2,
    name: 'Android',
    image: '/images/devices/android.png',
    alt: 'Android Phone'
  },
  {
    id: 3,
    name: 'Гаджетами',
    image: '/images/devices/watch.png',
    alt: 'Gadgets'
  },
  {
    id: 4,
    name: 'Ноутбуками',
    image: '/images/devices/laptop.png',
    alt: 'Laptops'
  },
  {
    id: 5,
    name: 'Моноблоками і PC',
    image: '/images/devices/console.png',
    alt: 'PC and Monoblocks'
  },
  {
    id: 6,
    name: 'Іншими пристроями',
    image: '/images/devices/headphones 1.png',
    alt: 'Other devices'
  }
]
</script>
