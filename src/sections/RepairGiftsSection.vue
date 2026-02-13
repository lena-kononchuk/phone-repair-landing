<template>
  <section class="py-10 lg:py-16 relative" id="gifts">
    <div class="container mx-auto px-4">
      <div>
        <!-- Left Side: Gifts Slider -->
        <div>
          <!-- Title with Navigation -->
          <div class="mb-8">
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-extrabold text-secondary leading-tight mb-6">
              НА КОЖНИЙ РЕМОНТ ГАРАНТОВАНО<br>ПОДАРУНОК НА ВАШ ВИБІР:
            </h2>

            <!-- Navigation Arrows -->
            <div class="flex gap-3 justify-end">
              <button
                class="gifts-prev w-12 h-12 rounded-full bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md"
                aria-label="Previous"
              >
                <i class="fa-solid fa-chevron-left text-[#FF6B00]"></i>
              </button>
              <button
                class="gifts-next w-12 h-12 rounded-full bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md"
                aria-label="Next"
              >
                <i class="fa-solid fa-chevron-right text-[#FF6B00]"></i>
              </button>
            </div>
          </div>

          <!-- Gifts Swiper -->
          <BaseSwiper
            :slides-per-view="1.2"
            :space-between="16"
            :centered-slides="true"
            :breakpoints="giftBreakpoints"
            :navigation="{
              prevEl: '.gifts-prev',
              nextEl: '.gifts-next'
            }"
          >
            <swiper-slide v-for="gift in gifts" :key="gift.id">
              <div class="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer relative overflow-hidden">
                <!-- Decorative wave elements -->
                <div v-if="gift.decorLeft" class="absolute top-4 left-4 opacity-30">
                  <svg width="40" height="30" viewBox="0 0 40 30">
                    <path d="M0,15 Q10,5 20,15 T40,15" stroke="#FFD700" stroke-width="2" fill="none"/>
                    <path d="M0,20 Q10,10 20,20 T40,20" stroke="#FFD700" stroke-width="2" fill="none"/>
                  </svg>
                </div>
                <div v-if="gift.decorRight" class="absolute top-4 right-4 opacity-30">
                  <svg width="40" height="30" viewBox="0 0 40 30">
                    <path d="M0,15 Q10,5 20,15 T40,15" stroke="#FF6B00" stroke-width="2" fill="none"/>
                    <path d="M0,20 Q10,10 20,20 T40,20" stroke="#FF6B00" stroke-width="2" fill="none"/>
                  </svg>
                </div>

                <!-- Real Image -->
                <div class="mb-4 relative">
                  <img
                    :src="gift.image"
                    :alt="gift.title"
                    class="w-32 h-32 object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
                  >
                </div>
                <h3 class="text-lg font-bold text-secondary">{{ gift.title }}</h3>
              </div>
            </swiper-slide>
          </BaseSwiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'
import BaseSwiper from '../components/BaseSwiper.vue'

// Swiper breakpoints for gifts
const giftBreakpoints = {
  640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
  768: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
  1024: { slidesPerView: 4, spaceBetween: 30, centeredSlides: false }
}

// Main gifts for slider with real images
const gifts = [
  {
    id: 1,
    title: 'Чохли',
    image: '/images/devices/case.png',
    decorLeft: true
  },
  {
    id: 2,
    title: 'Захисні стекла',
    image: '/images/devices/glass.png',
    decorRight: true
  },
  {
    id: 3,
    title: 'Кабелі',
    image: '/images/devices/cables.png',
    decorLeft: true
  },
  {
    id: 4,
    title: 'Car holder',
    image: '/images/devices/car_holder 1.png',
    decorRight: true
  },
  {
    id: 5,
    title: 'Зарядки',
    image: '/images/devices/charger1.png',
    decorLeft: true
  },
  {
    id: 6,
    title: 'Навушники',
    image: '/images/devices/headphones 1.png',
    decorRight: true
  }
]
</script>
