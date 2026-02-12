<template>
  <section class="devices-section py-16 lg:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      
      <!-- Desktop Layout (lg and up) -->
      <div class="hidden lg:block">
        <!-- Row 1: Title + 2 Cards -->
        <div class="grid grid-cols-3 gap-6 mb-6">
          <!-- Title -->
          <div class="flex items-center">
            <h2 class="text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
              МИ ПРАЦЮЄМО<br>
              З ПРИСТРОЯМИ:
            </h2>
          </div>

          <!-- Card 1 - Apple -->
          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/phone.png" alt="Apple iPhone" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Apple</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 - Android -->
          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/android.png" alt="Android Phone" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Android</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: 4 Cards -->
        <div class="grid grid-cols-4 gap-6">
          <!-- Card 3 - Gadgets -->
          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/watch.png" alt="Гаджети" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Гаджетами</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4 - Laptops -->
          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/laptop.png" alt="Ноутбуки" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Ноутбуками</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 5 - PC & Monoblocks -->
          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/console.png" alt="Моноблоки та PC" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Моноблоками і PC</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 6 - Other Devices -->
          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/headphones 1.png" alt="Інші пристрої" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Іншими пристроями</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tablet Layout (md) -->
      <div class="hidden md:block lg:hidden">
        <!-- Title -->
        <h2 class="text-4xl font-extrabold text-secondary mb-12">
          МИ ПРАЦЮЄМО<br>
          З ПРИСТРОЯМИ:
        </h2>

        <!-- 3 rows x 2 cards -->
        <div class="grid grid-cols-2 gap-6">
          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/phone.png" alt="Apple iPhone" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Apple</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/android.png" alt="Android Phone" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Android</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/watch.png" alt="Гаджети" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Гаджетами</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/laptop.png" alt="Ноутбуки" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Ноутбуками</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/console.png" alt="Моноблоки та PC" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-secondary">Моноблоками і PC</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="device-card bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="relative z-10">
              <img src="/images/devices/headphones 1.png" alt="Інші пристрої" class="w-48 h-48 object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Іншими пристроями</h3>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary group-hover:text-white text-base"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Swiper with Pagination -->
      <div class="md:hidden">
        <!-- Title -->
        <h2 class="text-3xl font-extrabold text-secondary mb-8">
          МИ ПРАЦЮЄМО<br>
          З ПРИСТРОЯМИ:
        </h2>

        <swiper
          :slides-per-view="1.2"
          :space-between="16"
          :centered-slides="true"
          :pagination="{
            clickable: true,
            dynamicBullets: false,
          }"
          :modules="modules"
          class="devices-swiper"
          style="padding-bottom: 48px;"
        >
          <swiper-slide>
            <div class="device-card-mobile bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-md">
              <img src="/images/devices/phone.png" alt="Apple iPhone" class="w-40 h-40 object-contain mx-auto mb-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Apple</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary text-sm"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="device-card-mobile bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-md">
              <img src="/images/devices/android.png" alt="Android Phone" class="w-40 h-40 object-contain mx-auto mb-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Android</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary text-sm"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="device-card-mobile bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-md">
              <img src="/images/devices/watch.png" alt="Гаджети" class="w-40 h-40 object-contain mx-auto mb-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Гаджетами</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary text-sm"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="device-card-mobile bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-md">
              <img src="/images/devices/laptop.png" alt="Ноутбуки" class="w-40 h-40 object-contain mx-auto mb-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Ноутбуками</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary text-sm"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="device-card-mobile bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-md">
              <img src="/images/devices/console.png" alt="Моноблоки та PC" class="w-40 h-40 object-contain mx-auto mb-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Моноблоками і PC</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary text-sm"></i>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="device-card-mobile bg-white rounded-3xl p-6 relative overflow-hidden h-full shadow-md">
              <img src="/images/devices/headphones 1.png" alt="Інші пристрої" class="w-40 h-40 object-contain mx-auto mb-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-secondary">Іншими пристроями</h3>
                <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                  <i class="fa-solid fa-chevron-right text-primary text-sm"></i>
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

.device-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.device-card:hover {
  transform: translateY(-5px);
}

/* Swiper Pagination Styles */
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
