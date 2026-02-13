<template>
  <section class="py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <!-- Title with Navigation -->
      <div class=" mb-12">
        <div class="flex-1">
          <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight mb-2">
            ГАЛЕРЕЯ НАШИХ РОБІТ
          </h2>
          <div class="text-gray-600 max-w-2xl">
            Подивіться на результати нашої роботи
          </div>
        </div>

        <!-- Navigation Arrows -->
        <div class="flex gap-3 py-2 lg:py-4 items-end justify-end">
          <button
            class="gallery-prev cursor-pointer w-12 h-12 rounded-full bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md"
            aria-label="Previous"
          >
            <i class="fa-solid fa-chevron-left text-[#FF6B00]"></i>
          </button>
          <button
            class="gallery-next cursor-pointer w-12 h-12 rounded-full bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md"
            aria-label="Next"
          >
            <i class="fa-solid fa-chevron-right text-[#FF6B00]"></i>
          </button>
        </div>
      </div>

      <!-- Gallery Swiper -->
      <BaseSwiper
        :slides-per-view="1.2"
        :space-between="16"
        :centered-slides="true"
        :breakpoints="swiperBreakpoints"
        :navigation="{
          prevEl: '.gallery-prev',
          nextEl: '.gallery-next'
        }"
      >
        <swiper-slide v-for="item in galleryItems" :key="item.id">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-square group cursor-pointer flex items-center justify-center">
            <div class="text-center p-6">
              <i :class="['text-4xl text-gray-400 mb-4', item.icon]"></i>
              <div class="text-gray-600 font-semibold">{{ item.title }}</div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#FF6B00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </swiper-slide>
      </BaseSwiper>

    </div>
  </section>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'
import BaseSwiper from '../components/BaseSwiper.vue'

// Swiper breakpoints for gallery
const swiperBreakpoints = {
  640: { slidesPerView: 1.2, spaceBetween: 20, centeredSlides: false },
  768: { slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
  1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
  1280: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false }
}

// Gallery items - placeholder data
const galleryItems = [
  {
    id: 1,
    icon: 'fa-mobile-screen-button',
    title: 'Ремонт iPhone'
  },
  {
    id: 2,
    icon: 'fa-laptop',
    title: 'Ремонт ноутбука'
  },
  {
    id: 3,
    icon: 'fa-display',
    title: 'Заміна екрану'
  },
  {
    id: 4,
    icon: 'fa-microchip',
    title: 'Ремонт материнської плати'
  },
  {
    id: 5,
    icon: 'fa-wind',
    title: 'Чистка від пилу'
  },
  {
    id: 6,
    icon: 'fa-battery-full',
    title: 'Заміна батареї'
  }
]
</script>
