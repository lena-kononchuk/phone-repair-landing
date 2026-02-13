<template>
  <section
    ref="sectionRef"
    class="py-10 lg:py-16 relative"
    id="reviews"
  >
    <div class="container mx-auto px-4">
      <!-- Title with Navigation -->
      <div class="mb-12">
        <div class="flex-1">
          <h2 class="text-2xl md:text-3xl xl:text-4xl font-extrabold text-secondary leading-tight mb-2">
            ВІДГУКИ ЩАСЛИВИХ КЛІЄНТІВ
          </h2>
          <div class="text-gray-600 max-w-2xl">
            Що говорять наші клієнти про нашу роботу
          </div>
        </div>

        <!-- Navigation Arrows -->
       <div class="flex gap-3 py-2 lg:py-4 items-end justify-end">
          <button
            class="reviews-prev cursor-pointer w-12 h-12 rounded-full bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md"
            aria-label="Previous"
          >
            <i class="fa-solid fa-chevron-left text-[#FF6B00]"></i>
          </button>
          <button
            class="reviews-next cursor-pointer w-12 h-12 rounded-full bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md"
            aria-label="Next"
          >
            <i class="fa-solid fa-chevron-right text-[#FF6B00]"></i>
          </button>
        </div>
      </div>

      <!-- Reviews Swiper -->
      <BaseSwiper
        v-if="isVisible"
        :slides-per-view="1.2"
        :space-between="16"
        :centered-slides="true"
        :breakpoints="swiperBreakpoints"
        :navigation="{
          prevEl: '.reviews-prev',
          nextEl: '.reviews-next'
        }"
      >
        <swiper-slide v-for="review in reviews" :key="review.id">
          <div class="bg-white rounded-2xl p-4 sm:p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300">

          <!-- Author Info -->
            <div class="flex  gap-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {{ review.initials }}
              </div>
              <div class="text-left">
                <div class="font-bold text-secondary">{{ review.name }}</div>
                <div class="text-sm text-gray-500">{{ review.device }}</div>
              </div>
            </div>

            <!-- Rating Stars -->
            <div class="flex gap-1 mb-4">
              <i
                v-for="star in 5"
                :key="star"
                class="fa-solid fa-star text-yellow-400 text-lg"
              ></i>
            </div>

            <!-- Review Text -->
            <p class="text-gray-700 mb-6 leading-relaxed italic">
              "{{ review.text }}"
            </p>


          </div>
        </swiper-slide>
      </BaseSwiper>

      <!-- Skeleton loader -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 5" :key="i" class="h-48 bg-gray-200 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'
import BaseSwiper from '../components/BaseSwiper.vue'
import { useLazyLoad } from '@/composables/useLazyLoad'

// Lazy load this section
const { sectionRef, isVisible } = useLazyLoad(0.1, '200px')

// Swiper breakpoints for reviews
const swiperBreakpoints = {
  640: { slidesPerView: 1.2, spaceBetween: 20, centeredSlides: false },
  768: { slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
  1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
  1280: { slidesPerView: 4, spaceBetween: 30, centeredSlides: false }
}

// Reviews data
const reviews = [
  {
    id: 1,
    name: 'Олена Петренко',
    initials: 'ОП',
    device: 'iPhone 13 Pro',
    text: 'Дуже швидко та якісно замінили екран на моєму iPhone. Гарантія 6 місяців, ціна адекватна. Рекомендую!'
  },
  {
    id: 2,
    name: 'Андрій Коваль',
    initials: 'АК',
    device: 'MacBook Pro',
    text: 'Відмінний сервіс! Почистили ноутбук від пилу, замінили термопасту. Тепер працює як новий. Дякую!'
  },
  {
    id: 3,
    name: 'Марина Іваненко',
    initials: 'МІ',
    device: 'Samsung Galaxy S21',
    text: 'Швидко замінили батарею, телефон знову тримає заряд цілий день. Майстри професіонали своєї справи!'
  },
  {
    id: 4,
    name: 'Дмитро Сидоренко',
    initials: 'ДС',
    device: 'iPad Air',
    text: 'Відремонтували материнську плату після попадання води. Думав iPad не врятувати, але майстри зробили диво!'
  },
  {
    id: 5,
    name: 'Ірина Мельник',
    initials: 'ІМ',
    device: 'iPhone 12',
    text: 'Чудовий сервіс! Виїхали додому, забрали телефон, відремонтували та привезли назад. Дуже зручно!'
  }
]
</script>
