<template>
  <section class="devices-section py-16 lg:py-24">
    <div class="container mx-auto px-4">

      <!-- Title section -->
      <h2 class="text-3xl md:text-4xl xl:text-5xl text-center font-extrabold text-secondary leading-tight mb-8">
        МИ ПРАЦЮЄМО З ПРИСТРОЯМИ
      </h2>

      <!-- Mobile swiper with responsive breakpoints -->
      <div>
        <swiper
          :slides-per-view="1.2"
          :space-between="16"
          :centered-slides="true"
          :breakpoints="{
            '640': {
              slidesPerView: 1.2,
              spaceBetween: 20,
              centeredSlides: false
            },
            '768': {
              slidesPerView: 1.5,
              spaceBetween: 24,
              centeredSlides: false
            },
            '1024': {
              slidesPerView: 2.5,
              spaceBetween: 30,
              centeredSlides: false
            },
            '1280': {
              slidesPerView: 3.5,
              spaceBetween: 30,
              centeredSlides: false
            }
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: false,
          }"
          :modules="modules"
          class="devices-swiper"
          style="padding-bottom: 48px;"
        >
          <!-- Apple device card -->
          <swiper-slide>
            <div class="bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-[0px_8px_10px_0px_rgba(255,107,0,0.08)] hover:shadow-[0px_50px_60px_0px_rgba(255,107,0,0.08)] transition-all duration-300 hover:-translate-y-1 group">
              <img src="/images/devices/phone.png" alt="Apple iPhone" class="w-40 h-40 object-contain mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Apple</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FF6B00]">
                  <i class="fa-solid fa-chevron-right text-[#FF6B00] text-sm transition-colors duration-300 group-hover:text-white"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- Android device card -->
          <swiper-slide>
            <div class="bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-[0px_8px_10px_0px_rgba(255,107,0,0.08)] hover:shadow-[0px_50px_60px_0px_rgba(255,107,0,0.08)] transition-all duration-300 hover:-translate-y-1 group">
              <img src="/images/devices/android.png" alt="Android Phone" class="w-40 h-40 object-contain mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Android</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FF6B00]">
                  <i class="fa-solid fa-chevron-right text-[#FF6B00] text-sm transition-colors duration-300 group-hover:text-white"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- Gadgets device card -->
          <swiper-slide>
            <div class="bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-[0px_8px_10px_0px_rgba(255,107,0,0.08)] hover:shadow-[0px_50px_60px_0px_rgba(255,107,0,0.08)] transition-all duration-300 hover:-translate-y-1 group">
              <img src="/images/devices/watch.png" alt="Gadgets" class="w-40 h-40 object-contain mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Гаджетами</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FF6B00]">
                  <i class="fa-solid fa-chevron-right text-[#FF6B00] text-sm transition-colors duration-300 group-hover:text-white"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- Laptops device card -->
          <swiper-slide>
            <div class="bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-[0px_8px_10px_0px_rgba(255,107,0,0.08)] hover:shadow-[0px_50px_60px_0px_rgba(255,107,0,0.08)] transition-all duration-300 hover:-translate-y-1 group">
              <img src="/images/devices/laptop.png" alt="Laptops" class="w-40 h-40 object-contain mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Ноутбуками</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FF6B00]">
                  <i class="fa-solid fa-chevron-right text-[#FF6B00] text-sm transition-colors duration-300 group-hover:text-white"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- PC and Monoblocks device card -->
          <swiper-slide>
            <div class="bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-[0px_8px_10px_0px_rgba(255,107,0,0.08)] hover:shadow-[0px_50px_60px_0px_rgba(255,107,0,0.08)] transition-all duration-300 hover:-translate-y-1 group">
              <img src="/images/devices/console.png" alt="PC and Monoblocks" class="w-40 h-40 object-contain mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Моноблоками і PC</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FF6B00]">
                  <i class="fa-solid fa-chevron-right text-[#FF6B00] text-sm transition-colors duration-300 group-hover:text-white"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- Other devices card -->
          <swiper-slide>
            <div class="bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-[0px_8px_10px_0px_rgba(255,107,0,0.08)] hover:shadow-[0px_50px_60px_0px_rgba(255,107,0,0.08)] transition-all duration-300 hover:-translate-y-1 group">
              <img src="/images/devices/headphones 1.png" alt="Other devices" class="w-40 h-40 object-contain mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Іншими пристроями</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FF6B00]">
                  <i class="fa-solid fa-chevron-right text-[#FF6B00] text-sm transition-colors duration-300 group-hover:text-white"></i>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]
</script>

<style scoped>
.devices-section {
  font-family: 'Gilroy', sans-serif;
}

/* Swiper pagination styles */
.devices-swiper :deep(.swiper-pagination) {
  bottom: 0 !important;
}

.devices-swiper :deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #D1D5DB;
  opacity: 1;
  transition: all 0.3s ease;
}

.devices-swiper :deep(.swiper-pagination-bullet-active) {
  background: #E31E24;
  width: 24px;
  border-radius: 4px;
}
</style>
